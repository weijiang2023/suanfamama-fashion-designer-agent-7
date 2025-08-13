## Roadmap

### Objectives
- Deliver an MVP that helps fashion designers go from idea to production-ready artifacts quickly and reliably.
- Ensure privacy, IP safety, and seamless integration with existing design/PLM tools.

### Phase 0 — Foundations (Week 0-1)
- Repo scaffolding, CI, code quality (format, lint, test), basic telemetry (opt-in).
- Resolve environment issues (npm registry), lock Node LTS, document setup.
- Decide MVP stack and create app skeletons (frontend, backend, AI services).

Acceptance criteria:
- One-click local setup documented; CI passes on main; minimal health endpoint.

### Phase 1 — MVP Ideation (Week 2-3)
- Prompt-to-sketch: generate rough silhouettes from text prompts and/or moodboard images.
- Moodboard ingestion: upload images, auto-tag key attributes (silhouette, fabric, palette).
- Simple project workspace: create/save a design project with assets and notes.

Acceptance criteria:
- Create project, upload moodboard, generate at least 3 candidate silhouettes per prompt.
- Basic filtering by tags; export images as PNG/JPEG.

### Phase 2 — Spec Automation (Week 4-5)
- Tech pack draft generator from selected silhouette (components, seams, trims, measurements).
- Measurement table template; suggested grading rules for 2-3 sizes.
- Export tech pack as PDF; include BOM section placeholders.

Acceptance criteria:
- One-click tech pack draft from a design; editable before export; PDF export under 10s.

### Phase 3 — Material Intelligence (Week 6)
- Fabric recommendations based on silhouette and intended wear/use.
- Sustainability labels (basic), sourcing hints (non-sensitive, public catalog start).

Acceptance criteria:
- Surface 5 material suggestions with rationale and searchable attributes.

### Phase 4 — Collaboration Basics (Week 7)
- Shareable project links (role: viewer/commenter).
- Commenting on assets; version history for generated artifacts.

Acceptance criteria:
- Invite flow works; comments persist; simple version diff view.

### Non-functional Requirements
- Privacy-first (local redaction of sensitive inputs where possible, opt-in sharing).
- Reliability (>99% generation success for standard prompts), traceable outputs.
- Performance: interactive actions <150ms; generations with progress feedback.

### Tracking
- Use issues labeled by phase and component (`ideation`, `specs`, `materials`, `collab`).
- Each issue has scope, acceptance criteria, and test notes.


