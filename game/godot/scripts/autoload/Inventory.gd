extends Node

# ─────────────────────────────────────────
#  INVENTORY — Autoload singleton
#  Itens coletados, tapes, UV
# ─────────────────────────────────────────

var _items: Dictionary = {}
var _tapes: Array[String] = []

signal item_added(id: String)
signal tape_added(id: String)

func add_item(id: String) -> void:
	if _items.has(id):
		return
	_items[id] = true
	item_added.emit(id)
	Game.item_picked.emit(id)

func has_item(id: String) -> bool:
	return _items.has(id)

func add_tape(tape_id: String) -> void:
	if tape_id in _tapes:
		return
	_tapes.append(tape_id)
	tape_added.emit(tape_id)

func has_tape(tape_id: String) -> bool:
	return tape_id in _tapes

func get_tapes() -> Array[String]:
	return _tapes.duplicate()

func get_all() -> Dictionary:
	return _items.duplicate()
