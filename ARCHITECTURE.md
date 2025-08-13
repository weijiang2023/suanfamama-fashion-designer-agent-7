## Architecture Overview

### Components
- Frontend: Web app (TypeScript) for project workspace, ideation flows, review and export.
- API Gateway: Backend (Node/TS or Python) exposing REST/GraphQL for projects, assets, generation jobs.
- AI Services:
  - Vision generation (prompt-to-sketch, silhouette exploration).
  - Attribute tagging (silhouette, fabric, palette).
  - Tech pack drafting (LLM-assisted spec synthesis).
- Storage:
  - Database (Postgres) for projects, designs, tech packs, comments.
  - Object storage (S3-compatible) for assets and exports.
- Integrations: Adobe, CLO3D, PLM (via connectors; opt-in by project).

### Data Model (high-level)
- Project: id, name, members, createdAt, updatedAt
- Design: id, projectId, title, prompts, attributes, versions[]
- Asset: id, designId, type(image/pdf/vector), url, tags[]
- TechPack: id, designId, sections{components, seams, trims, measurements, BOM}
- Comment: id, projectId/designId, body, authorId, createdAt

### Flows (simplified)
1. Ideation: user prompt → generation request → async job → image variants stored → UI displays.
2. Tagging: images processed → attributes saved on `Asset` → filter/search UI.
3. Tech pack: select design → draft spec → user edits → export PDF → stored in `Asset` and downloadable.
4. Collaboration: share link with role → comments on assets → notifications.

### Non-functional
- Observability: request tracing for generation jobs, structured logs.
- Security: scoped tokens per project; signed URLs for assets; audit log for exports.
- Privacy: data residency configs; model call redaction and source attribution.

### API Contracts (initial sketch)
- POST /projects
- GET /projects/:id
- POST /designs (projectId)
- POST /generations (designId, prompt, refs)
- GET /generations/:id (status, resultUrls)
- POST /techpacks (designId)
- GET /techpacks/:id (download)


