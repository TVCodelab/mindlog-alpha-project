extends CanvasLayer

# ─────────────────────────────────────────
#  HUD — Interface mobile + desktop
#  Joystick, botões, notificações, crosshair
# ─────────────────────────────────────────

@onready var notif_label: Label   = $Notif
@onready var crosshair: Control   = $Crosshair
@onready var mobile_controls: Control = $MobileControls
@onready var joystick_base: Control   = $MobileControls/JoystickBase
@onready var joystick_knob: Control   = $MobileControls/JoystickBase/Knob
@onready var btn_interact: Button = $MobileControls/BtnInteract
@onready var btn_crouch: Button   = $MobileControls/BtnCrouch
@onready var btn_uv: Button       = $MobileControls/BtnUV

var _player: CharacterBody3D
var _notif_tween: Tween
var _joy_active: bool = false
var _joy_touch_id: int = -1
var _joy_origin: Vector2 = Vector2.ZERO
const JOY_MAX: float = 48.0

func _ready() -> void:
	var is_mobile = OS.has_feature("mobile") or OS.has_feature("web_android") or OS.has_feature("web_ios")
	mobile_controls.visible = is_mobile

	# Botão UV: só aparece ao coletar a lanterna
	btn_uv.visible = false
	Inventory.item_added.connect(_on_item_added)
	Game.notify.connect(_show_notif)
	Game.uv_toggled.connect(_on_uv_toggled)

	# Conecta botões mobile
	btn_interact.pressed.connect(_on_interact_pressed)
	btn_crouch.pressed.connect(_on_crouch_pressed)
	btn_uv.pressed.connect(_on_uv_pressed)


func set_player(p: CharacterBody3D) -> void:
	_player = p


func _show_notif(msg: String, duration: float = 2.5) -> void:
	notif_label.text = msg
	notif_label.modulate.a = 1.0
	if _notif_tween:
		_notif_tween.kill()
	_notif_tween = create_tween()
	_notif_tween.tween_interval(duration - 0.4)
	_notif_tween.tween_property(notif_label, "modulate:a", 0.0, 0.4)


func _on_item_added(item_id: String) -> void:
	if item_id == "uv_flashlight":
		btn_uv.visible = true
		# Pisca o botão UV para chamar atenção
		var t = create_tween().set_loops(3)
		t.tween_property(btn_uv, "modulate:a", 0.2, 0.15)
		t.tween_property(btn_uv, "modulate:a", 1.0, 0.15)


func _on_uv_toggled(is_on: bool) -> void:
	if is_on:
		btn_uv.modulate = Color(0.8, 0.4, 1.0)
		btn_uv.add_theme_color_override("font_color", Color(0.9, 0.6, 1.0))
	else:
		btn_uv.modulate = Color.WHITE
		btn_uv.remove_theme_color_override("font_color")


# ── Mobile button handlers ────────────────

func _on_interact_pressed() -> void:
	if _player:
		_player.do_interact()

func _on_crouch_pressed() -> void:
	if _player:
		_player.do_crouch()

func _on_uv_pressed() -> void:
	Game.toggle_uv()


# ── Floating joystick ─────────────────────

func _input(event: InputEvent) -> void:
	if not mobile_controls.visible:
		return
	if Game.state != Game.State.PLAY:
		return

	if event is InputEventScreenTouch:
		var half_w = DisplayServer.window_get_size().x * 0.5
		if event.pressed and event.position.x < half_w * 0.45:
			_joy_touch_id = event.index
			_joy_origin = event.position
			# Reposiciona joystick no ponto do toque
			joystick_base.global_position = event.position - joystick_base.size * 0.5
			joystick_base.visible = true
			_joy_active = true
		elif not event.pressed and event.index == _joy_touch_id:
			_joy_active = false
			_joy_touch_id = -1
			joystick_knob.position = Vector2.ZERO
			if _player:
				_player.set_joystick(Vector2.ZERO)

	if event is InputEventScreenDrag and event.index == _joy_touch_id:
		var delta = event.position - _joy_origin
		var clamped = delta.limit_length(JOY_MAX)
		joystick_knob.position = clamped
		if _player:
			_player.set_joystick(clamped / JOY_MAX)
