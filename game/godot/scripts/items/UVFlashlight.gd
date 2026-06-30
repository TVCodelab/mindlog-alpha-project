extends Interactable
class_name UVFlashlight

# ─────────────────────────────────────────
#  UV FLASHLIGHT — Item coletável
#  Só aparece após FITA_02 ser assistida
#  Só o botão UV aparece depois de coletar
# ─────────────────────────────────────────

@export var requires_tape: String = "tape_02"

func _ready() -> void:
	# Começa invisível — aparece quando tape_02 é assistida
	visible = false
	Game.tape_played.connect(_on_tape_played)

func _on_interact(player: CharacterBody3D) -> void:
	Inventory.add_item("uv_flashlight")
	Game.notify.emit("▐ LANTERNA UV COLETADA ▌", 3.0)
	Game.notify.emit("[ F ] para ligar/desligar", 2.5)
	queue_free()

func _on_tape_played(tape_id: String) -> void:
	if tape_id == requires_tape:
		visible = true
		# Efeito de spawn suave
		var tween = create_tween()
		scale = Vector3.ZERO
		tween.tween_property(self, "scale", Vector3.ONE, 0.4).set_trans(Tween.TRANS_BACK)
		Game.notify.emit("▐ ALGO BRILHA NA ESCRIVANINHA ▌", 3.0)

func get_prompt() -> String:
	return "[E] pegar lanterna UV"
