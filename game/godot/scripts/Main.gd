extends Node3D

func _ready() -> void:
	await get_tree().process_frame
	Game.change_state(Game.State.PLAY)

func _input(event: InputEvent) -> void:
	# Clique na tela captura o mouse no desktop
	if event is InputEventMouseButton and event.pressed:
		if Input.mouse_mode != Input.MOUSE_MODE_CAPTURED:
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
