# Phase 1 — Identite & Branding — Runner

## Module 1.1 — Naming

**Prerequis:** 0.4 COMPLETED

### 1.1.1 — Generation de noms
**Action:** Generer 50+ candidats de noms.
**Criteres:**
- Court (2-3 syllabes max)
- Memorable et prononçable
- Evoque le domaine d'activite (ou pas — abstrait OK)
- Pas de connotation negative
- Si marche FR: prononçable en francais
- Si marche INTL: prononçable en anglais
**Output:** `brand/naming-candidates.md` — liste de 50+ noms avec justification

### 1.1.2 — Verification domaines
**Action:** Pour le top 20, verifier la disponibilite des domaines via web search.
**TLDs a verifier:** .com, .io, .co, .app, .dev, .fr (si FR), .eu (si EU), .ai
**Output:** Tableau dans `brand/naming-candidates.md` avec disponibilite par TLD

### 1.1.3 — Verification marques
**Action:** Rechercher sur les registres de marques (INPI.fr pour FR, EUIPO pour EU, USPTO pour US).
**Output:** Section dans `brand/naming-candidates.md` — risques identifies

### 1.1.4 — Verification reseaux sociaux
**Action:** Verifier la disponibilite des handles sur Twitter/X, LinkedIn, GitHub, Instagram.
**Output:** Tableau dans `brand/naming-candidates.md`

### 1.1.5 — Verification linguistique
**Action:** Verifier que le nom n'a pas de sens negatif dans les langues des marches cibles.
**Output:** Section dans `brand/naming-candidates.md`

### 1.1.6 — Scoring shortlist
**Action:** Scorer chaque nom sur: memorabilite, disponibilite domaine, disponibilite marque, disponibilite sociale, prononciation.
**Output:** `brand/naming-shortlist.md` — top 5 avec scores

### 1.1.7 — Decision finale
**Action:** Presenter le top 5 a l'utilisateur pour decision.
**REQUIRES_HUMAN:** true — L'utilisateur doit choisir le nom.
**Output:** `brand/naming-decision.md`

---

## Module 1.2 — Domaines & DNS

**Prerequis:** 1.1 COMPLETED

### 1.2.1 — Achat domaine principal
**REQUIRES_HUMAN:** true — L'utilisateur doit acheter le domaine.
**Action:** Generer les instructions d'achat (registrar recommande, prix estime).
**Output:** `infra/dns-config.md` avec instructions

### 1.2.2 — Domaines secondaires
**Action:** Lister les domaines protectifs a acheter (typos, autres TLDs).
**Output:** Section dans `infra/dns-config.md`

### 1.2.3 — Configuration DNS
**Action:** Generer la configuration DNS.
**Output:** Section dans `infra/dns-config.md`:
- Records A/CNAME pour Vercel
- Records MX pour email
- Records TXT pour verification

### 1.2.4 — Email professionnel
**Action:** Guide de setup Google Workspace ou equivalent.
**Output:** `infra/email-setup.md`

### 1.2.5 — SPF/DKIM/DMARC
**Action:** Generer les records DNS pour l'authentification email.
**Output:** Section dans `infra/email-setup.md`

---

## Module 1.3 — Identite visuelle

**Prerequis:** 1.1 COMPLETED

### 1.3.1 — Brief creatif
**Action:** Generer un brief creatif base sur le positionnement.
**Output:** `brand/creative-brief.md`:
- Valeurs de marque
- Personnalite de marque
- References visuelles
- Mood board (descriptions)
- A eviter

### 1.3.2 — Palette de couleurs
**Action:** Definir la palette complete.
**Output:** `brand/colors.md`:
- Couleur primaire (+ variantes light/dark)
- Couleur secondaire
- Couleurs neutres (background, text, borders)
- Couleurs semantiques (success, warning, error, info)
- Codes HEX, RGB, HSL, oklch

### 1.3.3 — Typographies
**Action:** Selectionner les typographies.
**Output:** `brand/typography.md`:
- Heading font (Google Fonts)
- Body font (Google Fonts)
- Mono font (pour code)
- Tailles et line-heights

### 1.3.4 — Logo
**REQUIRES_HUMAN:** true — Necesssite un designer ou outil IA (Midjourney, etc.)
**Action:** Generer le brief logo detaille.
**Output:** `brand/logo-brief.md`:
- Style souhaite
- Contraintes techniques
- Formats requis (SVG, PNG @1x @2x, favicon ICO)
- Variantes (dark, light, mono, icon-only)

### 1.3.5 — Design tokens
**Action:** Generer les design tokens en JSON + config Tailwind.
**Output:**
- `brand/design-tokens.json`
- Config Tailwind a integrer dans le projet

### 1.3.6 — Charte graphique
**Action:** Compiler la charte graphique complete.
**Output:** `brand/brand-guidelines.md`:
- Logo usage
- Couleurs
- Typographies
- Espacements
- Do's and Don'ts

---

## Module 1.4 — Tone of Voice

**Prerequis:** 1.1 COMPLETED

### 1.4.1 — Definition du ton
**Action:** Definir la voix de la marque.
**Output:** `brand/tone-of-voice.md`:
- Spectre de ton (ex: professionnel mais accessible)
- Adjectifs de marque (3-5)
- Exemples de phrases OK / pas OK

### 1.4.2 — Glossaire produit
**Action:** Creer le glossaire des termes.
**Output:** `brand/glossary.md`:
- Termes produit et leur definition
- Termes a utiliser vs a eviter
- Traductions FR/EN si multi-langue

### 1.4.3 — Templates communication
**Action:** Creer les templates.
**Output:** `brand/copy-templates.md`:
- Email de bienvenue
- Notification in-app
- Message d'erreur
- Page 404
- Message de maintenance
- Confirmation de paiement

### 1.4.4 — Guidelines redactionnelles
**Action:** Regles d'ecriture.
**Output:** Section dans `brand/tone-of-voice.md`:
- Majuscules / minuscules
- Ponctuation
- Nombres
- Dates et heures
- Listes
- CTAs
