## Setup

### 1) Fix npm registry (Windows PowerShell)
If you see: "https://registry.npm.taobao.org/@gradio%2fclient: certificate has expired", switch away from the taobao mirror.

Run in PowerShell:

```powershell
npm config set registry https://registry.npmjs.org/
npm config set @gradio:registry https://registry.npmjs.org/
npm cache clean --force
npm ping
npm config get registry
npm config get @gradio:registry
```

If using Yarn or pnpm:

```powershell
yarn config set registry https://registry.npmjs.org/
pnpm config set registry https://registry.npmjs.org/
```

Optional: check user npm config file at `%USERPROFILE%\.npmrc` for any taobao entries and remove them.

### 2) Prerequisites
- Node.js 20 LTS
- Git, VS Code (or your editor)

### 3) Local environment
```powershell
git clone <repo-url>
cd suanfamama-fashion-designer-agent-7
# Install deps once the project scaffolding is added
# npm install
# npm run dev
```

### 4) Quality gates
- Formatter and linter configured in CI (to be added with code scaffolding).
- Pre-commit hooks for fast checks.

### 5) Secrets
- Use `.env.local` for local development; never commit secrets.


