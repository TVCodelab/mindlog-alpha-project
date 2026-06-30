extends StaticBody3D
class_name Interactable

# ─────────────────────────────────────────
#  INTERACTABLE — Classe base
#  Extends no editor para cada objeto interativo
# ─────────────────────────────────────────

@export var label: String = "examinar"
@export var one_shot: bool = true

var _used: bool = false

func interact(player: CharacterBody3D) -> void:
	if one_shot and _used:
		return
	_used = true
	_on_interact(player)

# Override nas subclasses
func _on_interact(_player: CharacterBody3D) -> void:
	pass

func get_prompt() -> String:
	return "[E] " + label
