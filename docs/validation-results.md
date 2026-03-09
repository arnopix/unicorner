# Framework de Validation — Service de Facturation Freelances

**Date de creation :** 2026-03-09
**Phase :** 0.4 — Validation rapide
**Statut :** Framework pret, resultats a completer apres collecte

---

## 1. Metriques de Validation et Seuils Cibles

### Metriques primaires

| Metrique | Description | Seuil cible | Methode de mesure |
|----------|-------------|-------------|-------------------|
| **Signup intent** | % de repondants qui s'inscriraient (Q20 questionnaire = "Oui") | >= 40% | Questionnaire Q20 |
| **Landing page conversion** | % visiteurs -> email waitlist | >= 8% | Analytics landing page |
| **Interview enthusiasm** | % d'interviewes avec intent "Oui franchement" (Q22 interview) | >= 50% | Grille interview |
| **WTP confirmation** | % de repondants prets a payer >= 9,90 euros/mois (Q14) | >= 30% | Questionnaire Q14 |
| **Problem-Solution Fit** | Score moyen des pain points >= 3/5 sur au moins 3 items (Q8) | >= 3.0 / 5 | Questionnaire Q8 |

### Metriques secondaires

| Metrique | Description | Seuil cible | Methode de mesure |
|----------|-------------|-------------|-------------------|
| **NPS intent** | NPS projete base sur les reactions interview | >= 30 | Interviews (estimation) |
| **Feature alignment** | Top 3 features interviewes = Top 3 features questionnaire | 2/3 match | Croisement Q10 + Q14 interview |
| **Referral intent** | % d'interviewes prets a recommander (Q23) | >= 60% | Interviews Q23 |
| **Churn risk actuel** | % insatisfaits de leur outil actuel (Q7 <= 3) | >= 40% | Questionnaire Q7 |
| **e-facture awareness** | % concernes par la reforme e-facture (Q12 = argument majeur/plus) | >= 50% | Questionnaire Q12 |

---

## 2. Volume de collecte cible

| Canal | Cible | Statut |
|-------|-------|--------|
| Interviews qualitatives | 12-15 interviews | NOT_STARTED |
| Questionnaire quantitatif | 100+ reponses | NOT_STARTED |
| Landing page waitlist | 200+ emails (sur 30 jours) | NOT_STARTED |

### Segmentation minimale requise

Pour que les resultats soient significatifs, il faut au minimum :
- **5+ micro-entrepreneurs** et **5+ EURL/SASU** dans les interviews
- **30+ devs/tech** et **30+ autres profils** dans le questionnaire
- **50+ reponses** avec CA > 50k euros

---

## 3. Criteres de Decision

### Criteres GO (tous doivent etre remplis)

Un signal GO requiert que **chaque critere** ci-dessous soit valide :

| # | Critere | Seuil | Statut |
|---|---------|-------|--------|
| G1 | Landing page conversion >= 8% | ___ % | [ ] |
| G2 | Signup intent >= 40% (questionnaire) | ___ % | [ ] |
| G3 | Au moins 30% des repondants prets a payer >= 9,90 euros/mois | ___ % | [ ] |
| G4 | Problem-Solution Fit score >= 3.0/5 sur min 3 pain points | ___ / 5 | [ ] |
| G5 | Au moins 50% des interviewes disent "Oui franchement" pour essayer | ___ % | [ ] |
| G6 | Les 3 features coeur (facture rapide, relances auto, e-facture) sont dans le Top 5 | Rang moy: ___ | [ ] |
| G7 | Aucun critere No-Go declenche | - | [ ] |

**Decision :** Si tous les criteres G1-G7 sont valides → **GO. Lancer la Phase 1.**

---

### Criteres NO-GO (un seul suffit)

Un signal NO-GO est declenche si **au moins un** critere ci-dessous est vrai :

| # | Critere | Seuil | Statut |
|---|---------|-------|--------|
| N1 | Landing page conversion < 3% | ___ % | [ ] |
| N2 | Signup intent < 20% | ___ % | [ ] |
| N3 | 0% des repondants prets a payer > 5 euros/mois | ___ % | [ ] |
| N4 | Problem-Solution Fit score < 2.0/5 sur tous les pain points | ___ / 5 | [ ] |
| N5 | Plus de 70% des interviewes "Probablement pas" ou "Non" pour essayer | ___ % | [ ] |
| N6 | Le marche gratuit (Tiime) est cite comme bloquant insurmontable par > 80% | ___ % | [ ] |
| N7 | Aucun differenciateur clair identifie par rapport a l'existant | - | [ ] |

**Decision :** Si un critere N1-N7 est declenche → **NO-GO. Pivoter radicalement ou abandonner.**

---

### Criteres PIVOT (ajuster et retester)

Un signal PIVOT est declenche si les criteres GO ne sont pas tous remplis MAIS aucun NO-GO n'est declenche :

| # | Critere | Action de pivot suggeree |
|---|---------|------------------------|
| P1 | Landing conversion entre 3% et 8% | Retravailler le messaging et la proposition de valeur |
| P2 | WTP faible (< 30% a 9,90 euros) mais intent fort (> 40%) | Revoir le pricing : baisser le Pro ou enrichir le plan gratuit |
| P3 | API-first ne resonne pas (> 60% "pas besoin") | Pivoter vers UX-first, garder l'API comme feature secondaire |
| P4 | e-facture ne motive pas (< 30% "argument majeur") | Trouver un autre differenciateur principal |
| P5 | Les features coeur ne matchent pas les attentes | Reprioriser le MVP autour des features les plus demandees |
| P6 | Fort interet mais uniquement sur un sous-segment | Nichez davantage sur ce segment (ex: devs uniquement) |

**Decision :** Si PIVOT → Ajuster la proposition, re-tester sur un cycle de 2 semaines.

---

## 4. Template de Resultats

*A remplir apres collecte des donnees.*

### 4.1 Resultats Landing Page

| Metrique | Valeur | Cible | Statut |
|----------|--------|-------|--------|
| Visiteurs uniques (30j) | ___ | 2500+ | |
| Emails collectes | ___ | 200+ | |
| Taux de conversion | ___ % | >= 8% | |
| Source #1 de trafic | ___ | - | |
| Source #2 de trafic | ___ | - | |
| Bounce rate | ___ % | < 60% | |

### 4.2 Resultats Questionnaire

| Metrique | Valeur | Cible | Statut |
|----------|--------|-------|--------|
| Nombre total de reponses | ___ | 100+ | |
| Taux de completion | ___ % | > 70% | |
| Signup intent (Q20 = Oui) | ___ % | >= 40% | |
| WTP >= 9,90 euros (Q14) | ___ % | >= 30% | |
| Satisfaction actuelle moy (Q7) | ___ / 5 | - | |
| Pain score moyen (Q8) | ___ / 5 | >= 3.0 | |

**Top 3 pain points (Q8, score moyen) :**
1. ___ : ___ / 5
2. ___ : ___ / 5
3. ___ : ___ / 5

**Top 3 features (Q10, rang moyen) :**
1. ___ : rang moy ___
2. ___ : rang moy ___
3. ___ : rang moy ___

**Plan choisi (Q15) :**
- Gratuit : ___ %
- Pro (9,90 euros) : ___ %
- Business (19,90 euros) : ___ %
- Aucun : ___ %

**API-first interest (Q11) :**
- Critere de choix : ___ %
- Pourrait etre utile : ___ %
- Pas besoin : ___ %

**e-facture comme argument (Q12) :**
- Argument majeur : ___ %
- C'est un plus : ___ %
- Pas concerne : ___ %

### 4.3 Resultats Interviews

| Metrique | Valeur | Cible | Statut |
|----------|--------|-------|--------|
| Nombre d'interviews realisees | ___ / 15 | 12-15 | |
| "Oui franchement" pour essayer | ___ % | >= 50% | |
| NPS intent estime | ___ | >= 30 | |
| Referral intent | ___ % | >= 60% | |

**Verbatims cles :**

> *Interviewe #__ :* "___"

> *Interviewe #__ :* "___"

> *Interviewe #__ :* "___"

**Patterns recurrents :**
1. ___
2. ___
3. ___

**Objections recurrentes :**
1. ___
2. ___
3. ___

### 4.4 Synthese

| Critere | Resultat | Verdict |
|---------|----------|---------|
| G1 — Landing conversion | ___ % | GO / NO |
| G2 — Signup intent | ___ % | GO / NO |
| G3 — WTP >= 9,90 euros | ___ % | GO / NO |
| G4 — Problem-Solution Fit | ___ / 5 | GO / NO |
| G5 — Interview enthusiasm | ___ % | GO / NO |
| G6 — Feature alignment | ___ / 3 match | GO / NO |
| G7 — Aucun No-Go | ___ | GO / NO |

### Decision finale

| | |
|---|---|
| **Decision** | **GO** / **NO-GO** / **PIVOT** |
| **Date** | ___ |
| **Justification** | ___ |
| **Actions suivantes** | ___ |
| **Decide par** | ___ |

---

## 5. Planning de Validation

| Semaine | Activite | Objectif |
|---------|----------|----------|
| S1 | Deploiement landing page + diffusion questionnaire | 50 reponses, landing live |
| S1-S2 | Interviews (3-4 par semaine) | 8 interviews |
| S2-S3 | Interviews suite + relances questionnaire | 12 interviews, 100+ reponses |
| S3 | Analyse + compilation resultats | Ce document complete |
| S3 | Decision Go/No-Go/Pivot | Decision prise |
| S4 | Si GO : lancement Phase 1 (Naming) | Phase 1 demarre |
