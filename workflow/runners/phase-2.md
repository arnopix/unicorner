# Phase 2 — Fondations Juridiques — Runner

## Module 2.1 — Structure juridique

**Prerequis:** 0.4 COMPLETED

### 2.1.1 — Choix forme juridique
**Action:** Recommander la forme juridique optimale.
**Output:** `legal/structure-juridique.md`:
- Forme recommandee (SAS, SASU, etc.) avec justification
- Comparatif des options
- Implications fiscales et sociales
- Si US: LLC vs C-Corp

### 2.1.2 — Redaction statuts
**Action:** Generer un draft de statuts.
**DISCLAIMER:** Document a faire valider par un avocat.
**Output:** `legal/statuts-draft.md`

### 2.1.3 — Pacte d'associes
**Action:** Generer un template de pacte d'associes.
**Output:** `legal/pacte-associes-draft.md` (si multi-fondateurs)

### 2.1.4 — Immatriculation
**Action:** Guide pas-a-pas d'immatriculation.
**REQUIRES_HUMAN:** true
**Output:** `legal/immatriculation-guide.md`

### 2.1.5 — Compte bancaire
**Action:** Comparatif et recommandation (Qonto, Shine, etc.).
**REQUIRES_HUMAN:** true
**Output:** Section dans `legal/structure-juridique.md`

### 2.1.6 — Assurances
**Action:** Lister les assurances necessaires.
**Output:** Section dans `legal/structure-juridique.md`

---

## Module 2.2 — CGV

**Prerequis:** 0.3 COMPLETED

### 2.2.1 — Obligations legales par marche
**Action:** Identifier les obligations selon target_market.
**Output:** Section intro dans `legal/cgv-fr.md`

### 2.2.2 — Redaction CGV SaaS
**Action:** Rediger les CGV completes.
**Output:** `legal/cgv-fr.md` (et `legal/cgv-en.md` si multi-langue):
- Objet et champ d'application
- Description des services
- Conditions d'acces et d'utilisation
- Tarification et modalites de paiement
- Duree, renouvellement, resiliation
- Niveaux de service (SLA)
- Responsabilite et garanties
- Propriete intellectuelle
- Force majeure
- Droit applicable et juridiction

### 2.2.3 — Adaptation par marche
**Action:** Adapter selon le marche cible.
**Output:** Sections specifiques dans les CGV

### 2.2.4 — Versioning CGV
**Action:** Mettre en place le versioning.
**Output:** `legal/cgv-versioning.md`

---

## Module 2.3 — CGU

**Prerequis:** 0.3 COMPLETED

### 2.3.1 — Redaction CGU
**Action:** Rediger les CGU completes.
**Output:** `legal/cgu-fr.md` (et `legal/cgu-en.md`):
- Acceptation
- Compte utilisateur
- Usage acceptable
- Contenu utilisateur
- Suspension/resiliation
- Limitation de responsabilite
- Indemnisation
- Modifications

### 2.3.2 — Politique contenu
**Action:** Definir la politique de contenu.
**Output:** Section dans les CGU

### 2.3.3 — Regles communautaires
**Action:** Rediger les regles communautaires (si applicable).
**Output:** Section dans les CGU

---

## Module 2.4 — RGPD / Confidentialite

**Prerequis:** 2.1 COMPLETED

### 2.4.1 — Mapping donnees personnelles
**Action:** Cartographier toutes les donnees collectees.
**Output:** `legal/data-registry.md` (debut)

### 2.4.2 — Registre des traitements
**Action:** Creer le registre Article 30 RGPD.
**Output:** `legal/data-registry.md`:
- Finalite de chaque traitement
- Base legale
- Categories de donnees
- Destinataires
- Durees de conservation
- Mesures de securite

### 2.4.3 — Politique de confidentialite
**Action:** Rediger la politique complete.
**Output:** `legal/privacy-policy-fr.md` (et en.md):
- Donnees collectees
- Finalites
- Base legale
- Durees de conservation
- Transferts hors UE
- Droits des personnes
- Cookies
- Contact DPO

### 2.4.4 — Bandeau cookies
**Action:** Generer la configuration du bandeau cookies.
**Output:** `legal/cookie-config.md`:
- Categories de cookies (necessaires, analytics, marketing)
- Liste des cookies par categorie
- Code d'implementation (consent manager)

### 2.4.5 — Procedure DSAR
**Action:** Creer la procedure de gestion des droits.
**Output:** `legal/dsar-process.md`

### 2.4.6 — DPIA
**Action:** Evaluer si un DPIA est necessaire, le rediger si oui.
**Output:** `legal/dpia.md`

### 2.4.7 — Conformite CCPA
**Action:** Si marche US, adapter pour CCPA.
**Output:** Section dans privacy policy

---

## Module 2.5 — Contrats & Templates

**Prerequis:** 2.2 COMPLETED

### 2.5.1-2.5.6 — Tous les contrats
**Action:** Generer chaque template de contrat.
**Output:**
- `legal/contracts/saas-agreement.md`
- `legal/contracts/dpa.md`
- `legal/contracts/freelance.md`
- `legal/contracts/nda.md`
- `legal/contracts/employment.md`
- `legal/contracts/bspce.md`
- `legal/contracts/term-sheet.md`

---

## Module 2.6 — Mentions Legales

**Prerequis:** 2.1 COMPLETED

### 2.6.1-2.6.3 — Mentions legales
**Action:** Generer les mentions legales completes.
**Output:** `legal/mentions-legales.md`
