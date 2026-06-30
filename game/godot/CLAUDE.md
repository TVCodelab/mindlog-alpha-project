# TVGuy — Projeto Godot 4

Horror ARG first-person. Godot 4.2+.

## Setup local

```bash
# 1. Clone o repo
git clone https://github.com/TVCodelab/mindlog-alpha-project
cd mindlog-alpha-project/game/godot

# 2. Abra no Godot 4
# File → Open Project → selecione esta pasta

# 3. (Opcional) Instale o MCP do Godot para usar com Claude Code
npm install -g godot-mcp
```

## MCPs configurados

### Godot MCP
Permite que Claude Code leia/crie cenas, execute GDScript e edite o projeto diretamente.

**Pré-requisito:** Godot 4 instalado e rodando.

**Mac/Linux:** Edite `.claude/settings.json` e ajuste o caminho do executável:
```json
"GODOT_EXECUTABLE": "/Applications/Godot.app/Contents/MacOS/Godot"
```

**Windows:**
```json
"GODOT_EXECUTABLE": "C:\\Godot\\Godot_v4.2.exe"
```

### Pixel Lab AI MCP
Gera sprites, texturas e assets de pixel art para o jogo.

1. Crie conta em pixellab.ai
2. Gere sua API key
3. Substitua `SUA_CHAVE_AQUI` no `.claude/settings.json`
4. Use: "gere um sprite 32x32 de lanterna UV estilo retro horror"

## Estrutura do projeto

```
scenes/
  Main.tscn        ← cena raiz
  Player.tscn      ← CharacterBody3D + Camera3D + UV light
  ui/HUD.tscn      ← CanvasLayer com controles mobile

scripts/
  autoload/
    Game.gd        ← estado global, UV, códigos ARG
    Inventory.gd   ← itens coletados, fitas
    AudioMgr.gd    ← gerenciador de áudio
  Player.gd        ← movimento FPS, mouse/touch look
  Interactable.gd  ← classe base para objetos interativos
  items/
    UVFlashlight.gd ← só aparece após tape_02
    TapeItem.gd     ← fitas VHS coletáveis
    Radio.gd        ← puzzle de frequência 87.3 MHz

assets/
  shaders/
    uv_reveal.gdshader ← material para escrita UV
  sprites/           ← outputs do Pixel Lab AI aqui
  audio/             ← trilha, efeitos
```

## Mecânicas implementadas

- [x] Movimento FPS (WASD + mouse / joystick flutuante + swipe)
- [x] Crouch suave
- [x] Sistema de interação via RayCast3D
- [x] UV flashlight — só disponível após pegar o item físico
- [x] Botão UV no HUD mobile — só aparece após coletar
- [x] Sistema de fitas com desbloqueio progressivo
- [x] Rádio puzzle (87.3 MHz → código SINAL)
- [x] Códigos ARG (ACORDE, SINAL, TORRE)
- [x] Shader de UV reveal com parâmetro global
- [ ] Cenas 3D da sala (criar no editor com assets do Pixel Lab)
- [ ] Entidade sombra (IA simples de perseguição)
- [ ] Sistema de fitas / tape viewer UI
- [ ] Exportação HTML5

## Export para mobile (Android/iOS)

```
Project → Export → Add Preset → Android
Orientation: Landscape
```

Para web (jogar no GitHub Pages):
```
Project → Export → Add Preset → Web
```
