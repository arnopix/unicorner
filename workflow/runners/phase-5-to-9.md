# Phases 5-9 — Runner

## Phase 5 — Backoffice & Admin

### Module 5.1 — Admin Dashboard (dep: 4.2)
**Action:** Creer le dashboard admin avec:
- Route group `/admin/` protegee par role
- KPIs: users total/actifs/nouveaux, MRR, churn
- Graphiques avec Recharts
- Filtres par periode

### Module 5.2 — User Management Admin (dep: 5.1)
**Action:** CRUD admin des utilisateurs:
- Liste avec recherche/filtres/tri/pagination
- Detail utilisateur (profil + activite + billing)
- Actions: ban, suspend, delete, reset password
- Impersonation (login as user)
- Export CSV

### Module 5.3 — Billing Admin (dep: 4.4)
**Action:** Interface admin billing:
- Liste abonnements avec filtres
- Revenue analytics (MRR, ARR, churn graph)
- Refund / credit manual
- Gestion coupons
- Export comptable

### Module 5.4 — Content Management (dep: 4.3)
**Action:** CMS integre:
- Blog avec MDX (Contentlayer)
- Pages statiques editables
- Changelog / Release notes
- Help center articles

### Module 5.5 — Feature Flags (dep: 4.3)
**Action:** Systeme de feature flags:
- Table DB feature_flags
- API pour check flag
- UI admin pour toggle
- Rollout % progressif

### Module 5.6 — Support (dep: 4.3)
**Action:** Module support:
- Integration Crisp ou widget custom
- FAQ dynamique (CRUD admin)
- Chatbot IA avec Claude API
- CSAT survey post-interaction

---

## Phase 6 — Contenu & SEO

### Module 6.1 — Site Marketing (dep: 1.3, 1.4)
**Action:** Developper toutes les pages marketing:
- Homepage (hero, features, how it works, pricing, testimonials, CTA)
- Page Pricing detaillee
- Pages Features (une par feature majeure)
- Page About
- Page Contact (formulaire)
- Pages legales (CGV, CGU, Privacy, Mentions)
- Changelog
- Pages comparaison vs concurrents (depuis `docs/competitors.md`)
- Pages cas d'usage par persona (depuis `docs/personas.md`)

### Module 6.2 — SEO Technique (dep: 6.1)
**Action:** Implementer tout le SEO technique:
- Meta tags dynamiques par page
- OpenGraph + Twitter Cards
- Schema.org JSON-LD (Organization, Product, FAQ, Breadcrumbs)
- Sitemap.xml dynamique
- Robots.txt
- Canonical URLs
- Hreflang (si multi-langue)
- next.config headers

### Module 6.3 — SEO Contenu (dep: 6.2)
**Action:** Creer le contenu SEO:
- Keyword research (recherche web)
- Content strategy (`docs/content-strategy.md`)
- Editorial calendar 3 mois (`docs/editorial-calendar.md`)
- 10 articles de blog (2000+ mots, SEO-optimises) dans `content/blog/`
- 3 guides/tutorials dans `content/guides/`
- Glossaire de l'industrie

### Module 6.4 — SEO Off-page (dep: 6.2)
**Action:** Preparer le SEO off-page:
- Strategie backlinks (`docs/seo-offpage-strategy.md`)
- Liste 50+ annuaires SaaS avec URLs et process de soumission
- Templates de guest posts
- Liste influenceurs/journalistes

### Module 6.5 — Analytics & Tracking (dep: 6.1)
**Action:** Setup analytics:
- PostHog integration (ou Plausible)
- Event tracking plan (`docs/event-tracking.md`)
- Conversion goals
- UTM strategy
- Bandeau cookies RGPD-compliant

---

## Phase 7 — Go-To-Market

### Module 7.1 — GTM Strategy (dep: 0.2)
**Action:** Strategie GTM complete:
- `docs/gtm-strategy.md`
- Positionnement final
- Messaging par persona
- Canaux prioritaires
- Funnel AARRR
- KPIs et metriques
- Budget

### Module 7.2 — Email Marketing (dep: 6.1)
**Action:** Setup email marketing:
- Integration Resend/Loops
- Sequence onboarding (7 emails sur 14 jours)
- Sequence nurturing
- Newsletter template
- Sequence win-back
- Templates dans `content/emails/`

### Module 7.3 — Social Media (dep: 1.3)
**Action:** Preparer la presence sociale:
- Guide creation comptes avec branding unifie
- Content calendar 1 mois (`content/social/calendar.md`)
- 30 templates de posts dans `content/social/`
- Strategie hashtags

### Module 7.4 — Paid Acquisition (dep: 6.1)
**Action:** Preparer les campagnes:
- Copy pour Google Ads (10 variantes)
- Copy pour LinkedIn Ads (si B2B)
- Landing pages dediees
- Budget recommandation
- Tracking setup

### Module 7.5 — Product Hunt Launch (dep: 6.1)
**Action:** Preparer le launch PH:
- `docs/product-hunt-launch.md`
- Tagline + description
- First comment draft
- Gallery assets descriptions
- Launch day playbook heure par heure
- Templates messages pour mobiliser

### Module 7.6 — PR & Communications (dep: 1.4)
**Action:** Preparer les PR:
- Communique de presse (`content/press/press-release.md`)
- Media kit description (`content/press/media-kit.md`)
- Liste journalistes cibles
- Pitch templates personnalises
- Talking points podcast/interview

### Module 7.7 — Partnerships (dep: 4.3)
**Action:** Strategie partenariats:
- Identification partenaires strategiques
- API publique documentation (si applicable)
- Referral program design

---

## Phase 8 — Lancement & Distribution

### Module 8.1 — Pre-Launch Checklist (dep: 4.11)
**Action:** Verifier chaque point:
- [ ] Tests fonctionnels complets passes
- [ ] Tests de securite passes
- [ ] Cross-browser OK
- [ ] Mobile responsive OK
- [ ] CGV/CGU/Privacy publiees
- [ ] Bandeau cookies fonctionnel
- [ ] Sentry configure
- [ ] Uptime monitoring actif
- [ ] Backups automatises
- [ ] Documentation utilisateur
- [ ] Sitemap soumis
- [ ] DNS final configure
**Output:** `docs/pre-launch-checklist.md` avec tous les items coches

### Module 8.2 — Deployment Production (dep: 8.1)
**Action:** Deployer en production:
- Vercel production deployment
- DNS pointe vers Vercel
- SSL OK
- Variables d'environnement production
- Database migration production
- Smoke tests automatises
- Rollback plan documente

### Module 8.3 — Launch Day (dep: 8.2)
**Action:** Preparer les artefacts du jour J:
- `docs/launch-day-playbook.md` (plan minute par minute)
- Templates de posts pour chaque reseau
- Email pour la waitlist
- Communique de presse pret
- Scripts de monitoring

---

## Phase 9 — Post-Launch & Growth

### Module 9.1 — Analytics & Reporting (dep: 8.3)
**Action:** Mettre en place le reporting:
- Template weekly review
- Template monthly business review
- Dashboard analytics configure
- Alertes sur metriques cles

### Module 9.2 — User Feedback (dep: 8.3)
**Action:** Boucle de feedback:
- Widget feedback in-app
- Survey NPS automatise
- Template interview utilisateur
- Board de feature requests
- Roadmap publique

### Module 9.3 — Growth Loops (dep: 8.3)
**Action:** Implementer les moteurs de croissance:
- Referral program (invite + reward)
- "Powered by [Product]" badge
- Content-led growth plan
- Product-led growth (upgrade prompts)

### Module 9.4 — Scaling (dep: 9.3)
**Action:** Preparer la montee en charge:
- Load testing avec k6
- Plan de scaling DB
- Cache strategy
- Cost optimization review
- Runbooks operationnels
