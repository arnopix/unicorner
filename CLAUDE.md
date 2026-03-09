# UNICORNER — Instructions Claude Code

## Qu'est-ce que c'est
Unicorner transforme une idee de SaaS en produit lance. Tu donnes une idee, Claude Code execute automatiquement tout le workflow : analyse de marche, naming, legal, dev, SEO, GTM, lancement.

## Usage
L'utilisateur dit quelque chose comme :
> "utilise unicorner pour me faire un service de facturation pour freelances, marche FR, B2B"

Claude Code doit alors :
1. Initialiser le projet dans `workflow/modules.json`
2. Derouler **tous les modules automatiquement** dans l'ordre des dependances
3. Produire les artefacts reels (fichiers, code, documents)
4. Ne s'arreter que sur les etapes `REQUIRES_HUMAN` pour demander a l'utilisateur

## Workflow d'execution

```
POUR CHAQUE module dans l'ordre des dependances:
  1. Verifier que les dependances sont COMPLETED
  2. Lire workflow/runners/phase-X.md pour les instructions du module
  3. Executer chaque sous-tache:
     - Produire l'artefact (ecrire le fichier reel)
     - Mettre a jour modules.json (status: COMPLETED, completed_at)
  4. Si REQUIRES_HUMAN dans le runner:
     → Preparer tout, demander validation a l'utilisateur
     → Attendre sa reponse, puis continuer
  5. Sinon: tout faire et passer au suivant
  6. Mettre a jour DASHBOARD.md
```

## Initialisation d'un projet

Quand l'utilisateur donne une idee, remplir `workflow/modules.json > project`:
```json
{
  "name": "",           // vide si pas encore de nom (sera trouve en 1.1)
  "description": "...", // ce que l'utilisateur a dit
  "target_market": "FR|EU|US|INTL",
  "business_model": "B2B|B2C|B2B2C",
  "language": "fr|en|multi",
  "created_at": "...",
  "status": "IN_PROGRESS"
}
```

## Structure des fichiers
```
workflow/
  modules.json       — Source de verite (etat de tous les modules)
  DASHBOARD.md       — Dashboard lisible auto-genere
  runners/           — Instructions d'execution par phase
    phase-0.md       — Discovery & Validation
    phase-1.md       — Identite & Branding
    phase-2.md       — Fondations Juridiques
    phase-3.md       — Infrastructure & Architecture
    phase-4.md       — Developpement Produit (MVP)
    phase-5-to-9.md  — Backoffice, SEO, GTM, Launch, Growth
docs/                — Documents strategiques et techniques
brand/               — Identite visuelle, naming
legal/               — Documents juridiques
content/             — Blog, guides, social, presse
infra/               — Configuration infrastructure
app/                 — Dashboard web Next.js (Vercel)
PRD.md               — Product Requirements Document complet
```

## Regles

### Dependances
Un module ne demarre que si toutes ses dependances sont COMPLETED.
Les dependances sont dans `modules.json`.

### Artefacts
Chaque sous-tache produit des **fichiers reels**. Ne jamais simuler.
Les chemins sont definis dans les runners.

### Mise a jour du statut
Apres chaque sous-tache completee, mettre a jour `workflow/modules.json`:
- `subtask.status` → `"COMPLETED"`
- `subtask.completed_at` → timestamp ISO
- `module.progress` → % de sous-taches completees
- `module.status` → `"IN_PROGRESS"` ou `"COMPLETED"`

### Dashboard
Regenerer `workflow/DASHBOARD.md` regulierement (au moins a chaque module complete).

### Git + Vercel
A la fin de chaque phase:
```
git add -A && git commit -m "phase X: [nom] completed" && git push
```
Ca met a jour automatiquement le dashboard web sur Vercel.

### Adaptations
- Si B2C: sauter le module 4.2 (Multi-tenancy)
- Si langue unique: simplifier i18n (4.8)
- Si bootstrap: simplifier infra, pas de Docker/IaC
- Adapter CGV/CGU/Privacy au marche cible

## Stack par defaut
- Next.js 15 + TypeScript + Tailwind + shadcn/ui
- Supabase (PostgreSQL + Auth + Storage)
- Stripe (payments)
- Resend + React Email
- Vercel (hosting)
- Sentry (monitoring)
- PostHog (analytics)
- Vitest + Playwright (tests)

## Statuts
- `NOT_STARTED` — Pas encore demarre
- `IN_PROGRESS` — En cours
- `IN_REVIEW` — Attend validation humaine
- `COMPLETED` — Termine
- `BLOCKED` — Bloque
