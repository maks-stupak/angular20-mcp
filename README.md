# Local Angular 20 MCP Helper

> **MCP resources & helpers for modern Angular 20 style-guide–driven code**

This repo bundles 🔗

* **📚 Resources** – official Angular docs index, style-guides, curated articles, reference components.  
* **📜 Prompts** – system prompts that force an LLM (via MCP) to obey the guides.  
* **⚙️ MCP server** – a tiny Node process (stdio) that exposes everything to any IDE supporting **Model Context Protocol** (GitHub Copilot, Cursor, Zed, Claude Desktop, …).

Result → generated / refactored Angular code **always** matches Angular 20 APIs **and** your internal conventions.

---

## Folder map

```text
mcp-local/
├─ data/
│  ├─ angular-docs/          # trimmed Angular guides
│  ├─ style-guides/          # MD rules
│  ├─ component-examples/    # samples
│  └─ articles/              # extra blogs
├─ src/
│  ├─ helpers/
│  │   ├─ register-folder.js
│  │   └─ load-style-guides.js
│  ├─ prompts/
│  │   └─ strict-angular20.js
│  ├─ tools/                 # (optional) CLI helpers / checkers
│  └─ server.js              # MCP entry (bin: mcp-helper)
└─ .vscode/mcp.json          # VS Code MCP config
```

---

## Quick start

### 1 Install

```bash
npm install            # Node 20+
```

### 2 Manual test

```bash
npm run start          # node ./src/server.js
# → "Handshake complete"
```

### 3 VS Code Copilot / Cursor / Zed

Add `mcp-config.json`:

```jsonc
{
  "mcpServers": {
    "localAngular": {
      "command": "npx",
      "args": ["mcp-helper"]
    }
  }
}
```

or 

```jsonc
{
  "servers": {
    "localAngular": {
      "type": "stdio",
      "command": "npx",
      "args": ["mcp-helper"]
    }
  }
}
```

---

## Updating knowledge

* **Docs** – drop new `.md` in `data/angular-docs/` → restart server.  
* **Style-guides** – edit files in `data/style-guides/`, update list in `load-style-guides.js`.  
* **Examples / articles** – any `*.md`, `*.ts`, `*.html` auto-registered.

---

## Roadmap

* 🔧 **Style-guide compliance tools** – ESLint-based audit + Markdown report
* 🔎 **Semantic search** – `searchDocs(query)` returns top relevant paragraphs
* 🛠️ **Angular CLI wrapper** – expose `ng generate …` via MCP
* 🧪 **Testing-Library integration** – auto-generate & run tests with `@testing-library/angular`
* 🛠️ **Style-guide fixer** – one-click rename / re-format to match rules

---

