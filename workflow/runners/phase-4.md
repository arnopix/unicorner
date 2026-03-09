# Phase 4 — Developpement Produit (MVP) — Runner

## Module 4.1 — Auth & Utilisateurs

**Prerequis:** 3.2 COMPLETED

**Action:** Implementer le systeme d'authentification complet.

### Implementation
1. Installer NextAuth.js v5 + adapter Supabase
2. Configurer les providers (credentials, Google, GitHub)
3. Creer les pages:
   - `/auth/login` — connexion
   - `/auth/register` — inscription
   - `/auth/forgot-password` — reset mot de passe
   - `/auth/verify-email` — verification email
   - `/settings/profile` — profil utilisateur
4. Middleware d'auth (proteger les routes)
5. Rate limiting sur les endpoints auth
6. Tests unitaires (Vitest) pour chaque flow
7. Tests E2E (Playwright) pour login/register/reset

**Output:** Code complet dans le projet, tests passants.

---

## Module 4.2 — Multi-tenancy & Organisations (B2B)

**Prerequis:** 4.1 COMPLETED
**Condition:** Seulement si `business_model` contient "B2B"

**Action:** Implementer le systeme multi-tenant.

### Implementation
1. Schema DB: organizations, memberships, roles
2. CRUD organisations
3. Systeme d'invitations par email
4. RBAC (Owner > Admin > Member > Viewer)
5. Middleware d'isolation des donnees par tenant
6. UI switch entre organisations
7. Audit log des actions
8. Tests complets

---

## Module 4.3 — Core Features

**Prerequis:** 4.1 COMPLETED

**Action:** Developper les features core du produit.

### Process pour chaque feature:
1. Lire `project.description` pour identifier les features cles
2. Creer les user stories dans `docs/user-stories.md`
3. Prioriser MoSCoW
4. Pour chaque feature Must-Have:
   a. Schema DB (migration)
   b. API endpoints (route handlers)
   c. Business logic (services)
   d. Validation (Zod schemas)
   e. UI components
   f. Pages
   g. Tests unitaires
   h. Tests d'integration
5. Feature flags pour chaque feature

**Output:** MVP fonctionnel avec toutes les features Must-Have.

---

## Module 4.4 — Billing & Subscriptions

**Prerequis:** 4.1 COMPLETED

**Action:** Integrer Stripe pour le billing complet.

### Implementation
1. Setup Stripe (Products, Prices selon `docs/pricing-strategy.md`)
2. Checkout Session pour signup payant
3. Customer Portal pour gestion abonnement
4. Webhooks handler:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Gestion des plans et limites
6. Trial period
7. Dunning (relance impaye)
8. Proration sur changement de plan
9. Coupons
10. Tests en mode Stripe Test

**Output:** Billing complet fonctionnel.

---

## Module 4.5 — Notifications

**Prerequis:** 4.3 COMPLETED

**Action:** Implementer le systeme de notifications.

### Implementation
1. Notifications in-app (table DB + SSE ou polling)
2. Centre de notifications (UI)
3. Emails transactionnels avec Resend + React Email:
   - Welcome
   - Password reset
   - Invoice
   - Feature updates
4. Preferences utilisateur
5. Tests

---

## Module 4.6 — File Management

**Prerequis:** 4.3 COMPLETED

**Action:** Implementer la gestion de fichiers.

### Implementation
1. Upload vers Supabase Storage ou S3
2. Image processing (resize, thumbnails)
3. File preview
4. Download
5. Quotas par plan
6. Tests

---

## Module 4.7 — Search & Filtering

**Prerequis:** 4.3 COMPLETED

**Action:** Implementer la recherche.

### Implementation
1. PostgreSQL Full-Text Search
2. Composant de recherche avec debounce
3. Filtres avances (UI)
4. Tri et pagination server-side
5. Tests

---

## Module 4.8 — i18n

**Prerequis:** 4.3 COMPLETED
**Condition:** Si `project.language` = "multi"

**Action:** Implementer l'internationalisation.

### Implementation
1. Setup next-intl
2. Extraire toutes les chaines
3. Fichiers de traduction FR + EN
4. Routing localise (/fr/, /en/)
5. Formatage dates/nombres/devises
6. Tests

---

## Module 4.9 — Accessibility

**Prerequis:** 4.3 COMPLETED

**Action:** Audit et corrections a11y.

### Implementation
1. Audit avec axe-core
2. Fix semantic HTML
3. Keyboard navigation sur tous les composants interactifs
4. ARIA labels
5. Color contrast verification
6. Tests automatises a11y

---

## Module 4.10 — Performance

**Prerequis:** 4.3 COMPLETED

**Action:** Optimiser les performances.

### Implementation
1. Audit Lighthouse
2. Code splitting / dynamic imports
3. next/image pour toutes les images
4. Caching headers
5. Database indexes
6. Bundle analysis
7. Target: Lighthouse > 90

---

## Module 4.11 — Security Hardening

**Prerequis:** 4.3 COMPLETED

**Action:** Renforcer la securite.

### Implementation
1. Review OWASP Top 10
2. Validation Zod sur tous les inputs
3. CSRF tokens
4. Content Security Policy headers
5. Rate limiting global
6. npm audit + fix
7. Secret scanning (.env dans .gitignore)
8. Security headers dans next.config
9. Rapport de securite
