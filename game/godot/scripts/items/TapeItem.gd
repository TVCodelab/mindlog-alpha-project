extends Interactable
class_name TapeItem

# ─────────────────────────────────────────
#  TAPE — Fita VHS coletável
#  Coleta e abre o tape viewer
# ─────────────────────────────────────────

@export var tape_id: String = "tape_01"
@export var tape_label: String = "FITA #01"

# Controla visibilidade inicial
@export var starts_visible: bool = true
@export var unlock_signal: String = ""  # item_id que desbloqueia

func _ready() -> void:
	visible = starts_visible
	if unlock_signal != "":
		visible = false
		Game.item_picked.connect(_on_item_picked)

func _on_item_picked(item_id: String) -> void:
	if item_id == unlock_signal:
		visible = true
		var tween = create_tween()
		scale = Vector3.ZERO
		tween.tween_property(self, "scale", Vector3.ONE, 0.35).set_trans(Tween.TRANS_BACK)
		Game.notify.emit("▐ " + tape_label + " · FITA APARECEU ▌", 3.5)

func _on_interact(player: CharacterBody3D) -> void:
	Inventory.add_tape(tape_id)
	Game.tape_played.emit(tape_id)
	Game.notify.emit("▐ " + tape_label + " ▌", 2.0)
	# Abre tape viewer via sinal (HUD escuta)
	queue_free()

func get_prompt() -> String:
	return "[E] pegar " + tape_label
