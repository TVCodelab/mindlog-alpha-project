extends Node

# ─────────────────────────────────────────
#  GAME — Autoload singleton
#  Estado global, eventos, progressão
# ─────────────────────────────────────────

enum State { BOOT, PLAY, WATCH, DIALOG, END }

var state: State = State.BOOT
var uv_on: bool = false
var codes_used: Dictionary = {}

# Sinais principais — conecte via código ou editor
signal state_changed(new_state: State)
signal uv_toggled(is_on: bool)
signal item_picked(item_id: String)
signal tape_played(tape_id: String)
signal code_entered(code: String)
signal notify(message: String, duration: float)

# Mapa de códigos ARG → callbacks
var _arg_codes: Dictionary = {
	"ACORDE": _on_code_acorde,
	"SINAL":  _on_code_sinal,
	"TORRE":  _on_code_torre,
}

func _ready() -> void:
	# Garante captura de input no início
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE


func change_state(new_state: State) -> void:
	state = new_state
	state_changed.emit(new_state)
	match new_state:
		State.PLAY:
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
		State.WATCH, State.DIALOG, State.BOOT:
			Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
		State.END:
			Input.mouse_mode = Input.MOUSE_MODE_VISIBLE


func toggle_uv() -> void:
	if not Inventory.has_item("uv_flashlight"):
		notify.emit("você não tem a lanterna UV.", 2.0)
		return
	uv_on = !uv_on
	uv_toggled.emit(uv_on)
	var msg = "▐ LUZ UV ATIVA ▌" if uv_on else "LUZ UV DESLIGADA"
	notify.emit(msg, 2.0)
	# Atualiza shader global para revelar/esconder marcações UV
	RenderingServer.global_shader_parameter_set("uv_active", uv_on)


func submit_code(code: String) -> void:
	var upper = code.strip_edges().to_upper()
	if upper in codes_used:
		notify.emit("> fragmento já recuperado.", 2.5)
		return
	if upper in _arg_codes:
		codes_used[upper] = true
		code_entered.emit(upper)
		_arg_codes[upper].call()
	else:
		notify.emit("> código não reconhecido.", 2.5)


func _on_code_acorde() -> void:
	notify.emit("> processando fragmento ACORDE...", 3.0)
	await get_tree().create_timer(0.6).timeout
	item_picked.emit("tape_04_unlock")
	notify.emit("▐ FITA #04 · SINAL LOCALIZADO NO CORREDOR ▌", 4.0)


func _on_code_sinal() -> void:
	notify.emit("> frequência decodificada...", 3.0)
	await get_tree().create_timer(0.8).timeout
	item_picked.emit("tape_05_unlock")
	notify.emit("▐ FITA #05 · ENCONTRADA NA SALA DO CORREDOR ▌", 4.0)


func _on_code_torre() -> void:
	notify.emit("> acesso liberado...", 2.0)
	await get_tree().create_timer(0.7).timeout
	item_picked.emit("door_unlock")
	notify.emit("▐ PORTA DO CORREDOR DESBLOQUEADA ▌", 3.5)
