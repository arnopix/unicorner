# Phase 0 — Discovery & Validation — Runner

## Context
Ce runner est execute automatiquement par Claude Code.
Il recoit en input: `project.description`, `project.target_market`, `project.business_model`, `project.language`.

---

## Module 0.1 — Analyse de marche

### 0.1.1 — Recherche concurrentielle
**Action:** Rechercher sur le web les concurrents directs et indirects du SaaS decrit.
**Output:** `docs/competitors.md` avec pour chaque concurrent:
- Nom, URL, description
- Pricing (plans, fourchette)
- Forces / Faiblesses
- Part de marche estimee
- Stack technique (si visible)
- Positionnement

### 0.1.2 — Analyse des tendances
**Action:** Rechercher les tendances du secteur via web search.
**Output:** Section dans `docs/market-analysis.md`:
- Tendances macro du secteur
- Technologies emergentes
- Changements reglementaires
- Comportements utilisateurs

### 0.1.3 — Estimation TAM/SAM/SOM
**Action:** Estimer la taille du marche.
**Output:** Section dans `docs/market-analysis.md`:
- TAM (Total Addressable Market)
- SAM (Serviceable Addressable Market)
- SOM (Serviceable Obtainable Market)
- Sources et hypotheses

### 0.1.4 — Identification personas
**Action:** Definir 3-5 personas cibles.
**Output:** `docs/personas.md` avec pour chaque persona:
- Nom fictif, titre, entreprise type
- Demographiques
- Objectifs et motivations
- Frustrations actuelles
- Parcours d'achat
- Criteres de decision
- Citation representative

### 0.1.5 — Benchmark prix
**Action:** Analyser les prix du marche.
**Output:** Section dans `docs/market-analysis.md`:
- Grille tarifaire par concurrent
- Prix moyen par segment
- Modeles de pricing dominants
- Recommandation de positionnement prix

---

## Module 0.2 — Value Proposition Design

**Prerequis:** 0.1 COMPLETED

### 0.2.1 — Canvas proposition de valeur
**Action:** Remplir le Value Proposition Canvas.
**Output:** `docs/value-proposition.md`:
- Customer Profile (jobs, pains, gains)
- Value Map (products, pain relievers, gain creators)
- Fit analysis

### 0.2.2 — Jobs-to-be-done
**Action:** Identifier les JTBD principaux.
**Output:** Section dans `docs/value-proposition.md`:
- 5-10 jobs fonctionnels
- 3-5 jobs emotionnels
- 3-5 jobs sociaux
- Hierarchisation par importance

### 0.2.3 — Pain points / Gains mapping
**Action:** Mapper les douleurs et gains.
**Output:** Section dans `docs/value-proposition.md`:
- Pain points classes par severite
- Gains attendus classes par importance
- Mapping avec les features du produit

### 0.2.4 — USP
**Action:** Formuler la Unique Selling Proposition.
**Output:** Section dans `docs/value-proposition.md`:
- USP en une phrase
- 3 differenciateurs cles
- Proof points

### 0.2.5 — Elevator pitches
**Action:** Rediger les pitches.
**Output:** `docs/pitch-deck-draft.md`:
- Pitch 30 secondes
- Pitch 2 minutes
- Pitch 5 minutes
- One-liner pour site web

---

## Module 0.3 — Business Model Canvas

**Prerequis:** 0.1 et 0.2 COMPLETED

### 0.3.1 — 9 blocs BMC
**Action:** Remplir les 9 blocs.
**Output:** `docs/business-model.md`:
- Segments de clients
- Proposition de valeur
- Canaux
- Relations clients
- Sources de revenus
- Ressources cles
- Activites cles
- Partenaires cles
- Structure de couts

### 0.3.2 — Revenue streams
**Action:** Detailler les flux de revenus.
**Output:** Section dans `docs/business-model.md`

### 0.3.3 — Pricing strategy
**Action:** Definir la strategie de prix.
**Output:** `docs/pricing-strategy.md`:
- Nombre de plans (ex: Free, Pro, Enterprise)
- Prix par plan (mensuel/annuel)
- Features par plan (feature matrix)
- Strategie freemium ou trial
- Discounts volume/annuel

### 0.3.4 — Cost structure
**Action:** Estimer les couts.
**Output:** Section dans `docs/business-model.md`:
- Couts fixes (infra, SaaS, equipe)
- Couts variables (par utilisateur)
- Break-even analysis

### 0.3.5 — Unit economics
**Action:** Calculer les metriques unitaires.
**Output:** `docs/unit-economics.md`:
- CAC (Customer Acquisition Cost)
- LTV (Lifetime Value)
- LTV/CAC ratio
- Payback period
- Churn rate cible
- MRR/ARR projections (12 mois)

---

## Module 0.4 — Validation rapide

**Prerequis:** 0.3 COMPLETED

### 0.4.1 — Landing page de test
**Action:** Generer une landing page de validation dans `validation/landing/`.
**Output:** Landing page Next.js avec:
- Headline + subheadline issus du pitch
- 3 features cles
- Formulaire waitlist (email)
- Social proof placeholder
- CTA clair

### 0.4.2 — Script interviews
**Action:** Creer un guide d'interview.
**Output:** `docs/interview-script.md`:
- Introduction (2 min)
- Questions ouvertes sur le probleme (10 min)
- Presentation de la solution (5 min)
- Questions sur la solution (10 min)
- Willingness to pay (5 min)
- Wrap-up (3 min)

### 0.4.3 — Questionnaire validation
**Action:** Creer un questionnaire.
**Output:** `docs/validation-questionnaire.md`:
- 15-20 questions
- Mix quanti (Likert) et quali (ouvertes)
- Questions de filtrage
- Questions de pricing

### 0.4.4 — Metriques validation
**Action:** Definir les KPIs de validation.
**Output:** Section dans `docs/validation-results.md`:
- Signup rate cible
- NPS intent cible
- Willingness to pay seuil
- Nombre d'interviews cible

### 0.4.5 — Go/No-Go framework
**Action:** Creer le cadre de decision.
**Output:** Section dans `docs/validation-results.md`:
- Criteres Go (tous doivent etre remplis)
- Criteres No-Go (un seul suffit)
- Criteres Pivot (ajuster et retester)
