extends CharacterBody3D

# ─────────────────────────────────────────
#  PLAYER — First-person controller
#  WASD + mouse (desktop) / joystick + swipe (mobile)
# ─────────────────────────────────────────

# Nodes (assign in editor or on _ready)
@onready var camera: Camera3D      = $Camera3D
@onready var raycast: RayCast3D    = $Camera3D/RayCast3D
@onready var uv_light: SpotLight3D = $Camera3D/UVLight

# Movement
const SPEED_WALK:   float = 4.0
const SPEED_CROUCH: float = 2.0
const GRAVITY:      float = 9.8
const JUMP_VEL:     float = 0.0   # sem pulo — é um jogo de horror, não de ação

const STAND_HEIGHT:  float = 1.65
const CROUCH_HEIGHT: float = 0.95
const CROUCH_SPEED:  float = 8.0  # interpolação suave

# Look
const MOUSE_SENSITIVITY: float = 0.0018
const TOUCH_SENSITIVITY: float = 0.0014
const PITCH_LIMIT:        float = 1.2

# Interact
const REACH: float = 2.8

var _yaw:   float = 0.0
var _pitch: float = 0.0
var _crouching: bool = false
var _target_height: float = STAND_HEIGHT
var _current_height: float = STAND_HEIGHT

# Mobile touch state
var _joy_touch_id:  int   = -1
var _joy_origin:    Vector2 = Vector2.ZERO
var _look_touch_id: int   = -1
var _look_last:     Vector2 = Vector2.ZERO

var _is_mobile: bool = false

func _ready() -> void:
	_is_mobile = OS.has_feature("mobile") or OS.has_feature("web_android") or OS.has_feature("web_ios")
	uv_light.visible = false
	uv_light.light_color = Color(0.47, 0.0, 1.0)
	uv_light.spot_range = 6.0
	uv_light.spot_angle = 28.0
	uv_light.light_energy = 0.0

	Game.uv_toggled.connect(_on_uv_toggled)
	Game.state_changed.connect(_on_state_changed)


func _input(event: InputEvent) -> void:
	if Game.state != Game.State.PLAY:
		return

	# Mouse look (desktop)
	if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
		_yaw   -= event.relative.x * MOUSE_SENSITIVITY
		_pitch -= event.relative.y * MOUSE_SENSITIVITY
		_pitch  = clamp(_pitch, -PITCH_LIMIT, PITCH_LIMIT)
		_apply_look()

	# Touch look (right side of screen)
	if event is InputEventScreenDrag:
		if event.index == _look_touch_id:
			var dx = clamp(event.relative.x, -30.0, 30.0)
			var dy = clamp(event.relative.y, -30.0, 30.0)
			_yaw   -= dx * TOUCH_SENSITIVITY
			_pitch -= dy * TOUCH_SENSITIVITY
			_pitch  = clamp(_pitch, -PITCH_LIMIT, PITCH_LIMIT)
			_apply_look()

	if event is InputEventScreenTouch:
		_handle_touch(event)

	# Keyboard actions
	if event.is_action_pressed("interact"):
		_try_interact()
	if event.is_action_pressed("crouch"):
		_toggle_crouch()
	if event.is_action_pressed("uv_toggle"):
		Game.toggle_uv()
	if event.is_action_pressed("pause") and not _is_mobile:
		if Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
			Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
		else:
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED


func _physics_process(delta: float) -> void:
	if Game.state != Game.State.PLAY:
		return

	# Gravity
	if not is_on_floor():
		velocity.y -= GRAVITY * delta

	# Crouch smooth
	_current_height = lerp(_current_height, _target_height, delta * CROUCH_SPEED)
	camera.position.y = _current_height

	# Movement direction
	var speed = SPEED_CROUCH if _crouching else SPEED_WALK
	var dir = Vector3.ZERO
	var basis = Basis(Vector3.UP, _yaw)

	if Input.is_action_pressed("move_forward"):  dir -= basis.z
	if Input.is_action_pressed("move_back"):     dir += basis.z
	if Input.is_action_pressed("move_left"):     dir -= basis.x
	if Input.is_action_pressed("move_right"):    dir += basis.x

	# Mobile joystick input (set by HUD script)
	if _joy_vec != Vector2.ZERO:
		dir -= basis.z * _joy_vec.y
		dir += basis.x * _joy_vec.x

	if dir.length() > 0.01:
		dir = dir.normalized()

	var target_vel = dir * speed
	velocity.x = lerp(velocity.x, target_vel.x, delta * 10.0)
	velocity.z = lerp(velocity.z, target_vel.z, delta * 10.0)

	move_and_slide()
	_update_interact_prompt()


var _joy_vec: Vector2 = Vector2.ZERO

func set_joystick(v: Vector2) -> void:
	_joy_vec = v

func do_interact() -> void:
	_try_interact()

func do_crouch() -> void:
	_toggle_crouch()


func _apply_look() -> void:
	rotation.y = _yaw
	camera.rotation.x = _pitch


func _toggle_crouch() -> void:
	_crouching = !_crouching
	_target_height = CROUCH_HEIGHT if _crouching else STAND_HEIGHT


func _try_interact() -> void:
	if not raycast.is_colliding():
		return
	var obj = raycast.get_collider()
	if obj and obj.has_method("interact"):
		obj.interact(self)


func _update_interact_prompt() -> void:
	var show = raycast.is_colliding()
	if show:
		var obj = raycast.get_collider()
		show = obj != null and obj.has_method("interact")
	# Emite sinal para o HUD mostrar/esconder o prompt
	if show and raycast.is_colliding():
		var obj = raycast.get_collider()
		if obj and obj.has_method("get_prompt"):
			Game.notify.emit(obj.get_prompt(), 0.12)


func _handle_touch(event: InputEventScreenTouch) -> void:
	var half_w = DisplayServer.window_get_size().x * 0.5
	if event.pressed:
		# Esquerda = joystick (tratado pelo HUD)
		# Direita = look
		if event.position.x > half_w and _look_touch_id == -1:
			_look_touch_id = event.index
			_look_last = event.position
	else:
		if event.index == _look_touch_id:
			_look_touch_id = -1


func _on_uv_toggled(is_on: bool) -> void:
	uv_light.visible = is_on
	var tween = create_tween()
	tween.tween_property(uv_light, "light_energy", 1.4 if is_on else 0.0, 0.25)


func _on_state_changed(new_state: Game.State) -> void:
	if new_state == Game.State.PLAY:
		if not _is_mobile:
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
