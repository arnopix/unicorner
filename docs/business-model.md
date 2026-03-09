# Business Model Canvas — Service de Facturation Freelances France

> **Module** : 0.3 (sous-taches 0.3.1, 0.3.2, 0.3.4)
> **Date** : 2026-03-09
> **Dependances** : 0.1 (Analyse de marche), 0.2 (Value Proposition) — COMPLETED
> **Marche** : France, B2B, freelances et micro-entreprises

---

## 1. Business Model Canvas — 9 blocs

### 1.1 Segments de clients

| Segment | Description | Taille estimee | Priorite |
|---------|------------|----------------|----------|
| **S1 — Freelances tech** | Developpeurs, designers UI/UX, data engineers, DevOps en micro ou EURL. CA moyen 60-90k EUR. Sensibles a l'API, l'UX et l'automatisation. | ~400 000 | **Primaire (early adopters)** |
| **S2 — Consultants independants** | Consultants en management, transformation digitale, formation. EURL/SASU. CA moyen 80-150k EUR. Besoin TVA, FEC, facturation jalons. | ~200 000 | Primaire |
| **S3 — Micro-entrepreneurs creatifs** | Graphistes, redacteurs, photographes, community managers. Micro-entreprise. CA moyen 20-45k EUR. Sensibles au prix et a la simplicite. | ~350 000 | Secondaire |
| **S4 — Freelances multi-statuts** | Mix portage salarial + micro + societe. En transition entre statuts. CA moyen 70-120k EUR. Besoin vision consolidee. | ~80 000 | Secondaire |
| **S5 — Micro-agences et studios** | 2-5 personnes, SAS/SARL. CA moyen 150-400k EUR. Besoin multi-utilisateurs, gestion projets, sous-traitance. | ~50 000 | Tertiaire |
| **S6 — Cabinets comptables** | Experts-comptables gerant des portefeuilles de freelances. Besoin de plateforme collaborative. | ~15 000 cabinets | Tertiaire (partenariat) |

**Total marche adressable direct** : ~1 080 000 freelances actifs en France + ~50 000 micro-structures + ~15 000 cabinets.

---

### 1.2 Proposition de valeur

#### Par segment

| Segment | Proposition de valeur principale | Proposition secondaire |
|---------|----------------------------------|----------------------|
| **S1 — Freelances tech** | "La facturation API-first pensee pour les devs : conforme e-facture 2026, SDK TypeScript, webhooks, automatisations." | UX premium niveau Linear/Stripe, dark mode, raccourcis clavier |
| **S2 — Consultants** | "Facturation conforme avec gestion TVA integree, export FEC automatique, et factures par jalons." | Dashboard financier temps reel, relances automatiques, personnalisation premium |
| **S3 — Micro creatifs** | "Facturez en 90 secondes, gratuitement, avec des factures aussi belles que votre portfolio." | Suivi du plafond micro en temps reel, conformite e-facture gratuite, alertes URSSAF |
| **S4 — Multi-statuts** | "Un seul tableau de bord pour votre portage, votre micro et votre future societe." | Simulation transition de statut, historique unifie, accompagnement juridique |
| **S5 — Micro-agences** | "Gerez vos projets, vos equipes et vos factures dans un seul outil, sans la complexite d'un ERP." | Multi-utilisateurs, RBAC, facturation par jalons, rentabilite par projet |
| **S6 — Cabinets** | "Donnez a vos clients freelances un outil de facturation moderne qui produit des FEC propres." | Portail collaboratif, vision multi-clients, alertes automatiques |

#### Proposition de valeur globale

> **Facturation intelligente, conforme et ouverte pour les freelances en France.**
> Conforme e-facture 2026 des le jour 1. Gratuite pour les fonctions essentielles. API-first pour les developpeurs. UX premium pour tous.

---

### 1.3 Canaux

#### Canaux d'acquisition

| Canal | Description | Segment cible | CAC estime | Priorite |
|-------|------------|---------------|-----------|----------|
| **SEO / Content marketing** | Blog, guides ("facturation electronique 2026", "meilleur outil facturation freelance"), glossaires, comparatifs | Tous | 5-15 EUR | Haute |
| **Communautes tech** | Slack/Discord de devs freelances, Dev.to, Twitter/X tech, Hacker News FR | S1 | 2-8 EUR | Haute |
| **Product Hunt** | Lancement produit avec campagne dediee | S1, S2 | 0-5 EUR | Moyenne |
| **LinkedIn organic** | Posts fondateurs, articles thought leadership, temoignages | S2, S4 | 3-10 EUR | Moyenne |
| **Referral / Parrainage** | Programme de parrainage in-app (1 mois Pro offert) | Tous | 8-12 EUR | Moyenne |
| **Partenariats comptables** | Cabinets, experts-comptables en ligne (Dougs, L-Expert-Comptable) | S2, S5, S6 | 15-25 EUR | Moyenne |
| **Google Ads** | Mots-cles : "logiciel facturation freelance", "facture electronique 2026" | Tous | 20-40 EUR | Basse (phase 2) |
| **Social Ads (Meta/LinkedIn)** | Retargeting visiteurs site, lookalike audiences | S2, S3 | 25-45 EUR | Basse (phase 2) |

#### Canaux de distribution

| Canal | Description |
|-------|------------|
| **Application web** | SPA Next.js, accessible sur tout navigateur, experience desktop-first |
| **Application mobile** | PWA dans un premier temps, apps natives iOS/Android en v2 |
| **API publique** | REST API documentee, SDK TypeScript/Python, marketplace d'integrations |
| **Integrations tierces** | Stripe, banques (Open Banking), outils compta (Pennylane, Cegid), outils productivite (Notion, Slack) |

#### Canaux de communication

| Canal | Usage | Frequence |
|-------|-------|-----------|
| **Blog** | SEO, education, thought leadership | 2-3 articles/semaine |
| **Newsletter** | Nurturing, tips facturation, actualites fiscales | Hebdomadaire |
| **Twitter/X** | Engagement communaute tech, annonces produit | Quotidien |
| **LinkedIn** | Contenu B2B, temoignages, partenariats | 3-4 posts/semaine |
| **Changelog public** | Transparence produit, engagement early adopters | A chaque release |
| **Documentation** | Support technique, guides API, tutoriels | Continue |

---

### 1.4 Relations clients

| Type de relation | Description | Segment | Cout |
|-----------------|------------|---------|------|
| **Self-service** | Onboarding autonome, documentation interactive, tutoriels video, centre d'aide | Tous | Faible |
| **Support email** | Reponse sous 24h (gratuit), sous 4h (Pro), sous 1h (Business) | Tous | Moyen |
| **Chat in-app** | Support en temps reel via widget Intercom/Crisp | Pro, Business | Moyen |
| **Communaute** | Forum/Discord communautaire, partage de templates, entraide entre users | Tous | Faible |
| **Onboarding assiste** | Call de 15 min pour les comptes Business et cabinets comptables | S5, S6 | Eleve |
| **Account management** | Suivi dedie pour les cabinets comptables et les comptes Enterprise | S6 | Eleve |
| **Contenu educatif** | Guides fiscaux, webinaires "facturation electronique 2026", alertes reglementaires | Tous | Moyen |

**Strategie de retention** :
- Emails d'onboarding (J0 a J30) avec activation progressive des features
- Relances in-app pour les utilisateurs inactifs (J7, J14, J30 sans facture)
- Notifications proactives (echeances fiscales, changements reglementaires)
- NPS survey trimestriel avec boucle de feedback produit

---

### 1.5 Sources de revenus

| Source | Description | Modele | Contribution estimee (Y1) |
|--------|------------|--------|--------------------------|
| **Abonnements SaaS** | Plans Pro (9,90 EUR/mois) et Business (19,90 EUR/mois) | Recurrent mensuel/annuel | 80-85% |
| **Commissions paiement** | Commission sur les paiements en ligne via lien Stripe (0,5-1% en sus des frais Stripe) | Transactionnel | 5-8% |
| **Marketplace integrateurs** | Commission sur les integrations premium proposees par des tiers (compta, banques) | Revenue share | 2-5% |
| **Referral partenaires** | Commission d'apport d'affaires vers experts-comptables, neobanques, assurances | Affiliation | 3-5% |
| **API usage-based** | Facturation a l'usage au-dela des quotas inclus dans le plan Business (> 10k calls/mois) | Pay-as-you-go | 2-3% |
| **Enterprise / sur devis** | Plans personnalises pour cabinets comptables et grandes structures de portage | Contrat annuel | 0% (Y1), 5-10% (Y2+) |

---

### 1.6 Ressources cles

#### Ressources technologiques

| Ressource | Description | Criticite |
|-----------|------------|-----------|
| **Plateforme SaaS** | Application Next.js 15 + Supabase + Stripe, hebergee sur Vercel | Critique |
| **API REST** | API publique documentee (OpenAPI), SDK TypeScript, webhooks | Critique |
| **Moteur de conformite** | Systeme de regles pour mentions obligatoires, numerotation, format Factur-X, PDP/PPF | Critique |
| **Infrastructure** | Vercel (frontend + API routes), Supabase (PostgreSQL + Auth + Storage), Sentry (monitoring) | Critique |
| **Pipeline de donnees** | PostHog (analytics), Resend (emails), integration Open Banking | Importante |

#### Ressources humaines

| Role | Nombre (Y1) | Priorite |
|------|------------|----------|
| **CTO / Lead Dev full-stack** | 1 (fondateur) | Critique |
| **Developpeur full-stack** | 1 (embauche M3-M6) | Haute |
| **Product Designer** | 1 (freelance puis embauche) | Haute |
| **Growth / Marketing** | 1 (fondateur ou embauche M6) | Moyenne |
| **Support client** | 0,5 ETP (temps partiel ou fondateur) | Moyenne |

#### Propriete intellectuelle

| Asset | Description |
|-------|------------|
| **Marque et nom commercial** | Depot INPI classe 9 (logiciels), 35 (gestion), 42 (SaaS) |
| **Code source** | Propriete exclusive, repo prive |
| **Moteur de conformite** | Algorithme de generation de mentions et validation, avantage competitif |
| **Base de donnees clients** | Asset strategique (fichier clients, historiques, preferences) |
| **Contenu SEO** | 50+ articles, guides, glossaires positionnees sur des mots-cles strategiques |

---

### 1.7 Activites cles

| Activite | Description | Frequence |
|----------|------------|-----------|
| **Developpement produit** | Features, bug fixes, ameliorations UX, API. Cycles de release bi-hebdomadaires. | Continue |
| **Conformite reglementaire** | Veille juridique/fiscale, mise a jour des regles (e-facture, TVA, mentions), certification PDP | Continue |
| **Acquisition utilisateurs** | SEO, content marketing, communautes, partenariats, referral | Continue |
| **Onboarding et activation** | Optimisation du funnel signup → premiere facture, emails d'onboarding, tutoriels | Continue |
| **Support client** | Reponse aux tickets, documentation, FAQ, resolution de bugs | Continue |
| **Data et analytics** | Suivi des metriques SaaS (MRR, churn, NRR, ARPU), cohortes, experimentation A/B | Hebdomadaire |
| **Securite et compliance** | RGPD, securite des donnees, audits, pentests, certifications | Trimestrielle |
| **Gestion financiere** | Compta, tresorerie, facturation fournisseurs, reporting investisseurs | Mensuelle |

---

### 1.8 Partenaires cles

| Partenaire | Type | Valeur apportee | Valeur recue |
|-----------|------|-----------------|-------------|
| **PDP agreee (ex: Chorus Pro, Divalto, Cegid)** | Technologique | Connexion au reseau de facturation electronique, conformite legale | Volume de transactions, redevance |
| **Stripe** | Technologique | Paiement en ligne, gestion abonnements, facturation interne | Volume de transactions (commission) |
| **Supabase** | Technologique | BaaS (PostgreSQL, Auth, Storage, Realtime) | Utilisation de la plateforme |
| **Vercel** | Technologique | Hosting, CDN, edge functions, preview deployments | Utilisation de la plateforme |
| **Cabinets comptables** | Distribution | Recommandation a leurs clients freelances, validation produit | Outil collaboratif gratuit, FEC propres, gain de temps |
| **Neobanques (Qonto, Shine)** | Partenariat | Integration bancaire, Open Banking, co-marketing | Valeur ajoutee pour leurs clients freelances |
| **Societes de portage (Jump, Didaxis)** | Distribution | Recommandation a leurs portes, co-marketing | Outil complementaire pour les portes |
| **Communautes freelances** | Distribution | Visibilite, bouche-a-oreille, feedback produit | Outil adapte a leurs besoins, contenus educatifs |
| **Resend / React Email** | Technologique | Emails transactionnels, deliverabilite | Utilisation de la plateforme |
| **PostHog** | Technologique | Analytics produit, feature flags, session replay | Utilisation de la plateforme |
| **Sentry** | Technologique | Error tracking, performance monitoring | Utilisation de la plateforme |

---

### 1.9 Structure de couts

#### Couts fixes mensuels (Y1)

| Poste | Detail | Cout mensuel | Cout annuel |
|-------|--------|-------------|-------------|
| **Salaires et charges** | 1 fondateur (3 000 EUR net) + 1 dev (4 000 EUR brut charge) a partir de M6 | 3 000-7 000 EUR | 60 000 EUR |
| **Infrastructure cloud** | Vercel Pro (20 EUR), Supabase Pro (25 EUR), domaines (5 EUR) | 50 EUR | 600 EUR |
| **Outils SaaS** | Sentry (26 EUR), PostHog (0-450 EUR), Resend (20 EUR), Crisp (25 EUR), Linear (8 EUR), GitHub (4 EUR) | 100-550 EUR | 1 200-6 600 EUR |
| **Juridique** | Depot marque INPI (190 EUR one-shot), comptable (150 EUR/mois), CGV/CGU (500 EUR one-shot) | 150 EUR | 2 690 EUR |
| **Assurances** | RC Pro, cyber-assurance | 100 EUR | 1 200 EUR |
| **Bureaux / Coworking** | Coworking 2 postes ou remote | 200-500 EUR | 2 400-6 000 EUR |
| **Divers** | Communication, evenements, licences, imprevu | 200 EUR | 2 400 EUR |
| **Total couts fixes** | | **3 800-8 600 EUR/mois** | **70 490-79 490 EUR/an** |

#### Couts variables

| Poste | Detail | Cout unitaire |
|-------|--------|--------------|
| **Stripe fees** | 1,5% + 0,25 EUR par transaction (abonnements) | ~0,40 EUR/transaction |
| **Infrastructure par utilisateur** | Stockage Supabase, bandwidth Vercel, emails | ~0,05-0,15 EUR/user/mois |
| **Support client** | Temps passe par ticket (15 min moy.) | ~2-5 EUR/ticket |
| **Acquisition (CAC)** | Cout par acquisition marketing | 5-40 EUR/user selon canal |
| **PDP / e-facture** | Commission par facture electronique transmise (si PDP externe) | 0,05-0,20 EUR/facture |

---

## 2. Revenue Streams detailles

### 2.1 Revenus recurrents (SaaS) — 80-85% du CA

#### Projections d'abonnements (12 premiers mois)

| Mois | Users totaux | Gratuit | Pro (9,90 EUR) | Business (19,90 EUR) | MRR |
|------|-------------|---------|----------------|---------------------|-----|
| M1 | 150 | 135 | 12 | 3 | 178 EUR |
| M2 | 350 | 308 | 34 | 8 | 496 EUR |
| M3 | 650 | 559 | 72 | 19 | 1 091 EUR |
| M4 | 1 100 | 935 | 132 | 33 | 1 964 EUR |
| M5 | 1 700 | 1 428 | 218 | 54 | 3 232 EUR |
| M6 | 2 500 | 2 075 | 340 | 85 | 5 062 EUR |
| M7 | 3 500 | 2 870 | 504 | 126 | 7 510 EUR |
| M8 | 4 800 | 3 888 | 730 | 182 | 10 851 EUR |
| M9 | 6 500 | 5 200 | 1 040 | 260 | 15 470 EUR |
| M10 | 8 500 | 6 715 | 1 428 | 357 | 21 243 EUR |
| M11 | 11 000 | 8 580 | 1 936 | 484 | 28 800 EUR |
| M12 | 14 000 | 10 780 | 2 576 | 644 | 38 377 EUR |

**Hypotheses** :
- Mix stable : 77% gratuit / 18,4% Pro / 4,6% Business (taux de conversion freemium de 5% vers Pro, puis 25% des Pro upsell vers Business)
- Croissance MoM : 50-80% en M1-M6 (effet lancement + reforme e-facture sept. 2026), puis 30-40% en M7-M12
- Churn mensuel : 6% en M1-M6, puis 4,5% en M7-M12 (amelioration produit et habitudes)
- Discount annuel (2 mois offerts) pris en compte : 20% des abonnes choisissent l'annuel

**MRR fin Y1** : ~38 000 EUR
**ARR fin Y1** : ~460 000 EUR (run rate)

### 2.2 Revenus transactionnels — 5-8% du CA

| Source | Mecanisme | Volume estime (M12) | Revenu mensuel (M12) |
|--------|-----------|--------------------|--------------------|
| **Commission paiement en ligne** | 0,8% sur les paiements CB via lien Stripe sur facture (en sus des frais Stripe) | 500 paiements x 1 200 EUR moy. | ~4 800 EUR |
| **Frais de virement instantane** | 0,50 EUR par virement instantane demande | 200 virements | ~100 EUR |
| **Total transactionnel** | | | ~4 900 EUR/mois |

**Hypotheses** :
- 15% des utilisateurs Pro/Business activent le paiement en ligne
- Montant moyen d'une facture freelance : 1 200 EUR
- Les revenus transactionnels croissent avec l'adoption du paiement en ligne

### 2.3 Revenus marketplace et partenariats — 2-5% du CA

| Source | Mecanisme | Revenu estime (M12) |
|--------|-----------|-------------------|
| **Referral expert-comptable** | Commission d'apport (30-50 EUR/client refere a un cabinet partenaire) | 500-1 000 EUR/mois |
| **Referral neobanque** | Commission d'apport (20-40 EUR/client qui ouvre un compte pro chez un partenaire) | 300-600 EUR/mois |
| **Referral assurance** | Commission d'apport vers RC Pro et assurances partenaires | 100-300 EUR/mois |
| **Integrations premium** | Revenue share sur les integrations premium tierces vendues in-app | 200-500 EUR/mois |
| **Total marketplace** | | **1 100-2 400 EUR/mois** |

### 2.4 Expansion revenue (upsell) — inclus dans SaaS

| Levier | Description | Taux de conversion cible |
|--------|------------|------------------------|
| **Gratuit -> Pro** | Limite de 5 factures/mois atteinte, relances auto non dispo, export FEC | 5% des gratuits a M6 |
| **Pro -> Business** | Besoin API, multi-utilisateurs, integrations avancees | 25% des Pro a M12 |
| **Mensuel -> Annuel** | Discount de 17% (2 mois offerts), propose apres M3 d'abonnement | 30% des abonnes a M12 |
| **Usage-based API** | Depassement des quotas API inclus (> 10k calls/mois) | 5% des Business |

---

## 3. Cost Structure detaillee

### 3.1 Couts fixes

| Categorie | Poste | M1-M6 (mensuel) | M7-M12 (mensuel) | Annuel |
|-----------|-------|-----------------|------------------|--------|
| **Personnel** | Fondateur(s) remuneration | 3 000 EUR | 3 500 EUR | 39 000 EUR |
| **Personnel** | Dev full-stack (embauche M4) | 0-4 500 EUR | 4 500 EUR | 40 500 EUR |
| **Personnel** | Designer (freelance M1-M6, embauche M7) | 1 500 EUR | 3 500 EUR | 30 000 EUR |
| **Personnel** | Charges sociales et patronales (~45%) | 1 350-4 050 EUR | 5 175 EUR | 49 275 EUR |
| **Infra** | Vercel Pro | 20 EUR | 20 EUR | 240 EUR |
| **Infra** | Supabase Pro | 25 EUR | 25 EUR | 300 EUR |
| **Infra** | Domaines + DNS | 5 EUR | 5 EUR | 60 EUR |
| **SaaS** | Sentry, PostHog, Resend, Crisp, Linear, GitHub | 100-350 EUR | 350-650 EUR | 3 600 EUR |
| **Juridique** | Comptable + juridique divers | 200 EUR | 200 EUR | 2 400 EUR |
| **Juridique** | Depot marque, brevets (one-shot) | — | — | 500 EUR |
| **Assurance** | RC Pro + cyber | 100 EUR | 100 EUR | 1 200 EUR |
| **Bureaux** | Coworking / remote | 300 EUR | 500 EUR | 4 800 EUR |
| **Divers** | Conferences, licences, imprevu | 200 EUR | 300 EUR | 3 000 EUR |
| **Total fixes** | | **6 800-14 225 EUR** | **18 175-18 875 EUR** | **~174 875 EUR** |

### 3.2 Couts variables

| Poste | Formule | Cout estime M6 | Cout estime M12 |
|-------|---------|---------------|----------------|
| **Stripe processing** | 1,5% + 0,25 EUR / transaction | 150 EUR | 800 EUR |
| **Infrastructure par user** | ~0,10 EUR/user actif/mois | 250 EUR | 1 400 EUR |
| **Emails transactionnels** | ~0,002 EUR/email (Resend) | 30 EUR | 150 EUR |
| **Support client** | ~3 EUR/ticket, 0,5 ticket/user actif/mois | 300 EUR | 1 500 EUR |
| **PDP / e-facture** | ~0,10 EUR/facture transmise | 100 EUR | 800 EUR |
| **Marketing paid** | Budget Ads (a partir de M6) | 500 EUR | 2 000 EUR |
| **Total variables** | | **~1 330 EUR** | **~6 650 EUR** |

### 3.3 Break-even analysis

| Metrique | Valeur |
|----------|--------|
| **Couts fixes mensuels (run rate M7-M12)** | ~18 500 EUR |
| **Couts variables mensuels (M12)** | ~6 650 EUR |
| **Cout total mensuel (M12)** | ~25 150 EUR |
| **MRR break-even** | ~25 000 EUR |
| **Nombre d'abonnes payants pour break-even** | ~2 050 Pro + ~500 Business (soit ~10 000 users totaux) |
| **Mois estime pour break-even** | **M10-M11** (scenario base) |
| **Mois estime pour break-even** | **M8-M9** (scenario optimiste, effet reforme e-facture sept. 2026) |

**Hypotheses break-even** :
- ARPU blended (Pro + Business) : ~12,20 EUR/mois
- Taux de conversion freemium : 5% Pro, 1,2% Business
- Les revenus transactionnels et marketplace accelerent le break-even de 1-2 mois
- Le recrutement est le principal driver de couts fixes ; retarder une embauche de 2 mois repousse le break-even de ~1 mois

### 3.4 Repartition des couts (Y1)

```
Personnel + charges     : 158 775 EUR  (82%)
Infrastructure cloud    :     600 EUR   (0,3%)
Outils SaaS             :   3 600 EUR   (1,9%)
Juridique + assurance   :   4 100 EUR   (2,1%)
Bureaux + divers        :   7 800 EUR   (4,0%)
Couts variables (total) :  18 500 EUR   (9,6%)
---------------------------------------------
TOTAL Y1 estimé         : ~193 375 EUR
```

**Observation** : La structure de couts est tres fortement orientee personnel (82%). C'est typique d'un SaaS early-stage sur stack moderne (Vercel + Supabase = infra quasi-gratuite). L'avantage est une elasticite elevee : les couts fixes hors personnel sont < 20 000 EUR/an, ce qui rend la structure viable meme avec des revenus modestes.

---

## 4. Synthese strategique

### Points forts du modele

1. **Structure de couts legere** : Stack technique moderne (Vercel, Supabase) permettant de servir des milliers d'utilisateurs gratuits a cout marginal quasi-nul
2. **Freemium comme moteur d'acquisition** : Le plan gratuit sert de levier d'acquisition massive (objectif 10k+ users gratuits en Y1), avec un cout marginal < 0,15 EUR/user/mois
3. **Multiple revenue streams** : SaaS recurrent (coeur), transactionnel (paiements), marketplace (partenariats) diversifient les sources de revenus
4. **Timing reglementaire** : L'obligation e-facture (sept. 2026 reception, sept. 2027 emission micro) cree une fenetre d'acquisition unique
5. **Marche en croissance** : +100k-200k nouveaux freelances/an, taux d'adoption logiciel en forte hausse post-reforme

### Risques et mitigations

| Risque | Probabilite | Impact | Mitigation |
|--------|------------|--------|-----------|
| Churn eleve sur le plan gratuit | Haute | Moyen | Focus onboarding, activation rapide (premiere facture < 5 min), engagement continu |
| Conversion freemium faible (< 3%) | Moyenne | Eleve | Feature gating intelligent, experience "Aha moment" claire, upsell contextuel |
| Retard calendrier e-facture | Faible | Eleve | Diversifier la valeur au-dela de la conformite (UX, API, automatisation) |
| Concurrence prix (Tiime/Indy gratuit illimite) | Haute | Moyen | Differentiation sur API, UX, multi-statut — pas sur les features de base |
| Difficulte de recrutement | Moyenne | Moyen | Remote-first, stack moderne attractive, culture produit forte |

---

*Document produit le 2026-03-09 — Module 0.3 (sous-taches 0.3.1, 0.3.2, 0.3.4)*
*Sources : docs/market-analysis.md, docs/competitors.md, docs/personas.md, docs/value-proposition.md*
