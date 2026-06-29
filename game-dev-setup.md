# Game Dev com Claude Code + MCP

## Como funciona

O Claude Code usa **MCP (Model Context Protocol)** para conectar ferramentas externas. Para dev de jogos, há servidores MCP que permitem ao Claude interagir diretamente com engines como Godot.

---

## Opção 1 — Godot (Recomendado para 2D/3D)

### Pré-requisitos
- [Godot 4.x](https://godotengine.org/download/) instalado
- Node.js 18+ instalado
- Claude Code CLI (`npm install -g @anthropic-ai/claude-code`)

### Passo a passo

**1. Instale o plugin MCP no Godot**

No Godot, vá em `AssetLib` e busque por **"Claude MCP"** ou instale manualmente:
```
https://github.com/Coding-Solo/godot-mcp
```
Ative o plugin em `Project > Project Settings > Plugins`.

**2. Configure o `.claude/settings.json`** (já criado neste repo)

O arquivo `.claude/settings.json` já está configurado com:
- `godot` — conecta ao servidor MCP do Godot Editor
- `filesystem` — acesso direto aos arquivos do projeto
- `shell` — executa comandos de build/export

**3. Aponte o path do projeto Godot**

Edite `.claude/settings.json` e troque `${workspaceFolder}/game` pelo caminho real do seu projeto `.godot`.

**4. Abra o Claude Code dentro da pasta do jogo**
```bash
cd /caminho/para/seu/jogo
claude
```

**5. Exemplo de prompt pra começar:**
```
Cria uma cena 2D com um personagem que se move com WASD, 
tem gravidade e pula com espaço. Usa CharacterBody2D.
```

---

## Opção 2 — Engines Mobile (Godot Export / Unity)

### Godot Mobile (Android/iOS)
Godot exporta nativamente para mobile. Adicione ao settings.json:
```json
"godot-export": {
  "command": "godot",
  "args": ["--export-release", "Android", "build/game.apk"]
}
```

### Unity (experimental)
Existe um MCP server comunitário para Unity:
```json
"unity": {
  "command": "npx",
  "args": ["-y", "unity-mcp-server"]
}
```

---

## O que o Claude consegue fazer com MCP no Godot

| Ação | Suporte |
|------|---------|
| Criar cenas (`.tscn`) | ✅ |
| Escrever scripts GDScript | ✅ |
| Configurar física / colisões | ✅ |
| Criar tilesets e tilemaps | ✅ |
| Configurar animações | ✅ |
| Exportar para Android/iOS | ✅ (com Godot export templates) |
| Debugar erros em runtime | ✅ (via logs) |
| Criar shaders | ✅ |

---

## Sem MCP (modo básico)

Mesmo sem MCP configurado, o Claude Code consegue:
- Escrever GDScript, C# (Unity), ou Lua (LÖVE2D) completos
- Criar estrutura de pastas do projeto
- Gerar arquivos `.tscn` e `.tres` manualmente
- Explicar arquitetura do jogo e padrões de design

Basta ter os arquivos do projeto abertos na mesma pasta.

---

## Links úteis
- [godot-mcp no GitHub](https://github.com/Coding-Solo/godot-mcp)
- [MCP Servers oficiais Anthropic](https://github.com/modelcontextprotocol/servers)
- [Documentação MCP Claude Code](https://docs.anthropic.com/claude-code/mcp)
