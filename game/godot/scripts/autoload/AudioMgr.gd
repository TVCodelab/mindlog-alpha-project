extends Node

# ─────────────────────────────────────────
#  AUDIO MANAGER — Autoload singleton
#  Gerencia áudio ambiente, música, efeitos
# ─────────────────────────────────────────

var _ambient: AudioStreamPlayer
var _music: AudioStreamPlayer
var _sfx_pool: Array[AudioStreamPlayer] = []

func _ready() -> void:
	_ambient = _make_player("Ambient", 0.0)
	_music = _make_player("Music", -6.0)
	for i in 8:
		_sfx_pool.append(_make_player("SFX_%d" % i, 0.0))

func _make_player(n: String, vol: float) -> AudioStreamPlayer:
	var p = AudioStreamPlayer.new()
	p.name = n
	p.volume_db = vol
	add_child(p)
	return p

func play_ambient(stream: AudioStream, fade: float = 1.0) -> void:
	_ambient.stream = stream
	_ambient.play()

func play_music(stream: AudioStream) -> void:
	_music.stream = stream
	_music.play()

func stop_music() -> void:
	_music.stop()

func play_sfx(stream: AudioStream, volume_db: float = 0.0) -> void:
	for p in _sfx_pool:
		if not p.playing:
			p.stream = stream
			p.volume_db = volume_db
			p.play()
			return
