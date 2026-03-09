# Phase 3 — Infrastructure & Architecture — Runner

## Module 3.1 — Architecture technique

**Prerequis:** 0.3 COMPLETED

### 3.1.1 — Choix stack technique
**Action:** Confirmer ou adapter le stack par defaut selon le projet.
**Output:** `docs/architecture.md` section stack:
- Frontend: Next.js 15 + TypeScript + Tailwind + shadcn/ui (defaut)
- Backend: Next.js API Routes / Server Actions
- Database: PostgreSQL via Supabase
- Auth: NextAuth.js v5
- Payments: Stripe
- Email: Resend + React Email
- Hosting: Vercel
- Monitoring: Sentry
- Analytics: PostHog

### 3.1.2 — Architecture diagram
**Action:** Creer le diagramme d'architecture en Mermaid.
**Output:** `docs/architecture.md` section diagramme

### 3.1.3 — API design
**Action:** Designer l'API (routes, schemas).
**Output:** `docs/api-design.md`:
- Convention de nommage
- Routes principales
- Request/Response schemas (Zod)
- Error handling pattern
- Pagination pattern
- Auth pattern

### 3.1.4 — Database schema
**Action:** Designer le schema de base de donnees.
**Output:** `docs/db-schema.md`:
- Diagramme ERD (Mermaid)
- Tables avec colonnes, types, contraintes
- Indexes
- Relations
- Migrations SQL initiales

### 3.1.5 — Event architecture
**Action:** Si event-driven, designer l'architecture evenementielle.
**Output:** Section dans `docs/architecture.md`

### 3.1.6 — Security architecture
**Action:** Documenter l'architecture securite.
**Output:** `docs/security-architecture.md`:
- Auth flow
- Authorization model (RBAC)
- Data encryption
- Network security
- Secrets management

---

## Module 3.2 — Setup projet

**Prerequis:** 3.1 COMPLETED

### 3.2.1 — Init repository Git
**Action:** Initialiser le repo dans un dossier `src/` (ou equivalent) du projet.
**Output:** Repo Git initialise avec .gitignore

### 3.2.2 — Monorepo setup
**Action:** Setup Turborepo si necessaire, sinon projet simple Next.js.
**Output:** Structure monorepo ou projet simple

### 3.2.3 — Structure dossiers
**Action:** Creer toute l'arborescence.
**Output:** Arborescence complete selon `docs/architecture.md`

### 3.2.4 — Config TS/lint/format
**Action:** Configurer TypeScript, ESLint, Prettier/Biome.
**Output:** tsconfig.json, eslint.config.js, .prettierrc, .editorconfig

### 3.2.5 — Config testing
**Action:** Configurer Vitest + Playwright.
**Output:** vitest.config.ts, playwright.config.ts

### 3.2.6 — Husky + lint-staged
**Action:** Configurer les pre-commit hooks.
**Output:** .husky/, lint-staged config

### 3.2.7 — Conventional commits
**Action:** Configurer commitlint.
**Output:** commitlint.config.js

### 3.2.8 — Changelog automatise
**Action:** Setup changesets ou equivalent.
**Output:** .changeset/config.json

---

## Module 3.3 — CI/CD Pipeline

**Prerequis:** 3.2 COMPLETED

### 3.3.1 — GitHub Actions workflows
**Action:** Creer les workflows CI/CD.
**Output:** `.github/workflows/`:
- `ci.yml` (lint, type-check, test, build)
- `preview.yml` (deploy preview sur PR)
- `release.yml` (deploy production sur merge main)

### 3.3.2 — Branch protection
**Action:** Documenter les regles de protection.
**Output:** `docs/git-workflow.md`
**REQUIRES_HUMAN:** true (setup sur GitHub)

### 3.3.3 — Semantic versioning
**Action:** Configurer le versioning automatique.
**Output:** Configuration dans le pipeline

### 3.3.4 — Docker config
**Action:** Creer Dockerfile si necessaire.
**Output:** `Dockerfile`, `docker-compose.yml`, `.dockerignore`

### 3.3.5 — IaC
**Action:** Si infrastructure complexe, setup Terraform/Pulumi.
**Output:** `infra/terraform/` (si applicable)

---

## Module 3.4 — Environnements

**Prerequis:** 3.2 COMPLETED

### 3.4.1-3.4.5 — Setup environnements
**Action:** Configurer dev, staging, production.
**Output:**
- `.env.example` avec toutes les variables documentees
- `docs/environments.md` guide de setup local
- Scripts de seed de base de donnees
