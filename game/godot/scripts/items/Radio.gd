extends Interactable
class_name Radio

# ─────────────────────────────────────────
#  RADIO — Puzzle de frequência
#  Sintoniza 87.3 MHz para captar SINAL
# ─────────────────────────────────────────

const TARGET_FREQ: float = 87.3
const LOCK_MARGIN: float = 0.4   # MHz de tolerância
const FREQ_MIN:    float = 70.0
const FREQ_MAX:    float = 108.0

var _current_freq: float = 93.5
var _locked: bool = false
var _open: bool = false

# Referência ao painel da UI (assign na scene)
@export var radio_ui_path: NodePath

@onready var _ui: Control = get_node_or_null(radio_ui_path)

# Áudio
var _noise_player: AudioStreamPlayer
var _signal_player: AudioStreamPlayer

func _ready() -> void:
	_noise_player = AudioStreamPlayer.new()
	_signal_player = AudioStreamPlayer.new()
	add_child(_noise_player)
	add_child(_signal_player)

func _on_interact(_player: CharacterBody3D) -> void:
	_open = true
	Game.change_state(Game.State.WATCH)
	if _ui:
		_ui.open(_current_freq, self)

func close() -> void:
	_open = false
	Game.change_state(Game.State.PLAY)

func set_frequency(freq: float) -> void:
	_current_freq = clamp(freq, FREQ_MIN, FREQ_MAX)
	var dist = abs(_current_freq - TARGET_FREQ)
	var strength = max(0.0, 1.0 - dist / LOCK_MARGIN)

	if strength > 0.95 and not _locked:
		_on_signal_locked()
	elif strength < 0.5 and _locked:
		_locked = false

func get_signal_strength() -> float:
	var dist = abs(_current_freq - TARGET_FREQ)
	return clamp(1.0 - dist / LOCK_MARGIN, 0.0, 1.0)

func _on_signal_locked() -> void:
	_locked = true
	Game.notify.emit("▐ SINAL CAPTADO · 87.3 MHz ▌", 3.0)
	await get_tree().create_timer(1.2).timeout
	Game.notify.emit("> decodificando transmissão...", 2.5)
	await get_tree().create_timer(1.8).timeout
	close()
	Game.submit_code("SINAL")

func get_prompt() -> String:
	return "[E] ligar o rádio"
