# UNICORNER — Instructions Claude Code

## Projet
Unicorner est une plateforme d'orchestration du lancement de startups SaaS.
Elle transforme une idee en un workflow d'execution jalonne et automatise.

## Comment ca marche
1. L'utilisateur donne une idee + description
2. Claude Code initialise le projet dans `workflow/modules.json`
3. Claude Code execute **automatiquement** chaque module dans l'ordre des dependances
4. Chaque module produit des artefacts reels (fichiers, code, documents)
5. Le statut est mis a jour dans `modules.json` + `DASHBOARD.md` a chaque etape
6. A la fin de chaque phase, `git push` pour mettre a jour le dashboard Vercel

## Commande d'execution automatique

Quand l'utilisateur dit "lance le workflow" ou donne une idee:

```
1. Lire workflow/modules.json pour l'etat courant
2. Calculer l'ordre d'execution (respecter les dependances)
3. Pour chaque module executable:
   a. Lire le runner correspondant dans workflow/runners/phase-X.md
   b. Marquer le module IN_PROGRESS dans modules.json
   c. Executer chaque sous-tache:
      - Produire l'artefact (fichier, code, document)
      - Marquer la sous-tache COMPLETED
      - Sauvegarder modules.json
   d. Si REQUIRES_HUMAN: marquer IN_REVIEW et DEMANDER a l'utilisateur
   e. Sinon: marquer le module COMPLETED
   f. Regenerer DASHBOARD.md
4. Passer au module suivant
5. A la fin de chaque phase: git add + commit + push
```

## Structure
- `PRD.md` — Product Requirements Document complet
- `workflow/modules.json` — Source de verite (etat des modules)
- `workflow/DASHBOARD.md` — Dashboard auto-genere
- `workflow/runners/` — Instructions d'execution par phase
- `workflow/orchestrator.ts` — Logique d'orchestration (reference)
- `docs/` — Documents strategiques et techniques
- `brand/` — Identite visuelle, naming, tone of voice
- `legal/` — Documents juridiques
- `content/` — Blog, guides, social, presse
- `infra/` — Configuration infrastructure
- `app/` — Frontend Next.js (dashboard web)

## Regles d'execution

### Ordre des dependances
Un module ne peut demarrer que si **toutes** ses dependances sont COMPLETED.
Les dependances sont listees dans `modules.json` pour chaque module.

### Modules auto vs humain
- **Auto (pas de REQUIRES_HUMAN):** Claude Code execute et marque COMPLETED
- **Humain (REQUIRES_HUMAN):** Claude Code prepare tout, marque IN_REVIEW, demande validation a l'utilisateur, puis COMPLETED apres validation

### Artefacts
Chaque sous-tache produit des fichiers reels. Ne jamais simuler ou faire semblant.
Les chemins des artefacts sont definis dans les runners.

### Mise a jour du statut
A chaque sous-tache completee:
1. Mettre a jour `workflow/modules.json` (status + progress + completed_at)
2. Regenerer `workflow/DASHBOARD.md`

### Git workflow
A la fin de chaque phase completee:
```
git add -A
git commit -m "phase X: [nom de la phase] completed"
git push
```
Cela declenche un rebuild Vercel et le dashboard web se met a jour.

## Statuts possibles
- `NOT_STARTED` — Pas encore demarre
- `IN_PROGRESS` — En cours d'execution par Claude Code
- `IN_REVIEW` — Attend une validation humaine
- `COMPLETED` — Termine et valide
- `BLOCKED` — Bloque par une dependance ou un probleme
- `ARCHIVED` — Archive (plus pertinent)

## Stack par defaut (ajustable)
- Frontend: Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Backend: Next.js API Routes / Server Actions
- Database: PostgreSQL via Supabase
- Auth: NextAuth.js v5
- Payments: Stripe
- Email: Resend + React Email
- Hosting: Vercel
- Monitoring: Sentry
- Analytics: PostHog
- Testing: Vitest + Playwright

## Adaptation au projet
- Si B2C: sauter le module 4.2 (Multi-tenancy)
- Si langue = "fr" uniquement: sauter i18n (4.8) sauf pour les termes techniques
- Si budget = "bootstrap": simplifier infra, sauter Docker, IaC
- Toujours adapter le contenu des CGV/CGU/Privacy au marche cible
