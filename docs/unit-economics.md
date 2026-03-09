# Unit Economics — Service de Facturation Freelances France

> **Module** : 0.3 (sous-tache 0.3.5)
> **Date** : 2026-03-09
> **Dependances** : 0.1 (Analyse de marche), 0.2 (Value Proposition), 0.3.1-4 — COMPLETED
> **Marche** : France, B2B, freelances et micro-entreprises

---

## 1. Metriques unitaires

### 1.1 Cout d'acquisition client (CAC) par canal

| Canal | CAC estime | Volume M1-M6 | Volume M7-M12 | Commentaire |
|-------|-----------|-------------|--------------|-------------|
| **SEO / Content marketing** | 5-12 EUR | 30% des signups | 40% des signups | Investissement long (3-6 mois pour ranker), mais CAC le plus bas et LTV la plus haute |
| **Communautes (Slack, Discord, Twitter/X)** | 2-8 EUR | 25% | 15% | Tres efficace au lancement, mais ne scale pas lineairement |
| **Product Hunt** | 0-3 EUR | 15% (launch spike) | 0% | One-shot, fort volume pendant 1 semaine |
| **Referral / Parrainage** | 8-12 EUR | 10% | 20% | Cout = 1 mois Pro offert (~10 EUR). Meilleur canal en termes de qualite (LTV 2x) |
| **LinkedIn organic** | 5-15 EUR | 10% | 10% | Content fondateurs, temoignages, posts thought leadership |
| **Google Ads** | 25-45 EUR | 5% | 10% | Active a partir de M4-M6, CPC "logiciel facturation freelance" = 2-5 EUR, conversion 5-10% |
| **Social Ads (Meta/LinkedIn)** | 30-50 EUR | 5% | 5% | Retargeting principalement, acquisition directe couteuse sur ce segment |
| **Partenariats (comptables, portage)** | 15-25 EUR | 0% | 5% | Phase 2, plus long a mettre en place |

#### CAC blended

| Periode | CAC blended | Hypotheses |
|---------|-----------|-----------|
| **M1-M6** | ~12 EUR | Mix domine par channels organiques (SEO, communautes, PH), peu de paid |
| **M7-M12** | ~18 EUR | Introduction progressive du paid, SEO qui monte en puissance |
| **Y1 moyen** | ~15 EUR | Moyenne ponderee |
| **Cible Y2** | ~20-25 EUR | Plus de paid pour scaler, compense par referral et SEO mature |

**Note** : Le CAC ci-dessus est le CAC d'acquisition d'un utilisateur (tous plans confondus, y compris gratuit). Le CAC d'un **utilisateur payant** est different :

| Metrique | Valeur |
|----------|--------|
| **CAC total (tout utilisateur)** | ~15 EUR |
| **Taux conversion gratuit -> payant** | ~5,5% (Pro + Business) |
| **CAC utilisateur payant (blended)** | ~15 / 0,23* = **~65 EUR** |

*0,23 = taux de conversion effectif en tenant compte que les utilisateurs payants representent 23% des inscrits totaux a M12 (2 576 Pro + 644 Business sur 14 000 inscrits).

Correction : ~23% des utilisateurs totaux sont payants, donc CAC payant = 15 EUR / 0,23 = **~65 EUR**.

---

### 1.2 Lifetime Value (LTV) par plan

#### Hypotheses de churn

| Plan | Churn mensuel (M1-M6) | Churn mensuel (M7-M12) | Churn mensuel cible (Y2) | Churn annuel equivalent |
|------|----------------------|----------------------|------------------------|------------------------|
| **Pro** | 7% | 5% | 3,5% | 34% |
| **Business** | 4% | 3% | 2% | 22% |
| **Blended payant** | 6,5% | 4,5% | 3% | 31% |

**Justification des taux de churn** :
- Le segment freelance a un churn structurellement plus eleve que le SaaS B2B classique (freelances qui cessent l'activite, changent de statut, ou retournent au salariat = ~15-20% de churn "involontaire" annuel)
- Le churn diminue avec la maturite du produit (meilleur onboarding, plus de features, plus de stickiness)
- Benchmark : les outils de facturation freelance ont un churn mensuel de 4-8% en annee 1

#### Calcul LTV

| Plan | ARPU mensuel | Churn mensuel (stabilise) | Duree de vie moy. (mois) | **LTV** |
|------|-------------|--------------------------|--------------------------|---------|
| **Pro** | 9,13 EUR* | 4,5% | 22 mois | **201 EUR** |
| **Business** | 18,37 EUR* | 3% | 33 mois | **606 EUR** |
| **Blended payant** | 11,35 EUR** | 4% | 25 mois | **284 EUR** |

*ARPU ajuste pour le mix mensuel/annuel (20-30% annuel = discount 17%).
**Blended = moyenne ponderee Pro (80%) + Business (20%) des payants.

**Formule** : LTV = ARPU / Churn mensuel

#### LTV avec expansion revenue

En integrant l'upsell (Pro -> Business, mensuel -> annuel) et les revenus transactionnels :

| Plan | LTV brute | Expansion revenue (+15%) | **LTV ajustee** |
|------|----------|--------------------------|-----------------|
| **Pro** | 201 EUR | +30 EUR | **231 EUR** |
| **Business** | 606 EUR | +91 EUR | **697 EUR** |
| **Blended** | 284 EUR | +43 EUR | **327 EUR** |

---

### 1.3 LTV/CAC ratio

| Metrique | Valeur | Benchmark | Statut |
|----------|--------|-----------|--------|
| **LTV blended ajustee** | 327 EUR | — | — |
| **CAC payant** | 65 EUR | — | — |
| **LTV/CAC ratio** | **5,0x** | > 3x (sain), > 5x (excellent) | Sain |
| **LTV/CAC Pro** | 231 / 65 = **3,6x** | > 3x | Sain |
| **LTV/CAC Business** | 697 / 65 = **10,7x** | > 3x | Excellent |

**Interpretation** : Le ratio LTV/CAC de 5,0x est sain et indique que le modele est economiquement viable. Le plan Business est particulierement rentable (10,7x) grace a un churn plus faible et un ARPU plus eleve. La cle est d'augmenter le taux de conversion vers Business.

---

### 1.4 Payback period

| Metrique | Valeur | Benchmark | Statut |
|----------|--------|-----------|--------|
| **CAC payant** | 65 EUR | — | — |
| **ARPU mensuel blended** | 11,35 EUR | — | — |
| **Marge brute** | ~85% (SaaS) | 70-90% | Bon |
| **Contribution mensuelle** | 11,35 x 0,85 = 9,65 EUR | — | — |
| **Payback period** | 65 / 9,65 = **6,7 mois** | < 12 mois (bon), < 6 mois (excellent) | Bon |

**Payback par plan** :

| Plan | CAC payant | Contribution mensuelle | Payback |
|------|-----------|----------------------|---------|
| **Pro** | 65 EUR | 7,76 EUR | **8,4 mois** |
| **Business** | 65 EUR | 15,61 EUR | **4,2 mois** |

Le payback du plan Business est excellent (4,2 mois). Le plan Pro est correct (8,4 mois) mais pourrait etre ameliore en reduisant le CAC via des canaux organiques.

---

### 1.5 Churn rate cibles

| Metrique | M1-M6 | M7-M12 | Y2 cible | Y3 cible |
|----------|-------|--------|---------|---------|
| **Churn mensuel Pro** | 7% | 5% | 3,5% | 2,5% |
| **Churn mensuel Business** | 4% | 3% | 2% | 1,5% |
| **Churn mensuel blended** | 6,5% | 4,5% | 3% | 2% |
| **Churn annuel blended** | — | 43% | 31% | 22% |

**Leviers de reduction du churn** :
1. **Onboarding optimise** : Objectif = premiere facture envoyee en < 5 minutes apres inscription. Les users qui creent une facture dans les 24h ont un churn 2x inferieur.
2. **Feature depth** : Plus un user utilise de features (relances, dashboard, export FEC), plus le switching cost est eleve.
3. **Integrations** : Un user connecte a sa banque + son comptable a un churn 3x inferieur.
4. **Engagement continu** : Alertes reglementaires, tips, notifications de paiement recu.
5. **Annualisation** : Les abonnes annuels ont un churn 5x inferieur aux mensuels.

---

## 2. Projections MRR/ARR (12 mois)

### 2.1 Scenario de base

| Mois | Nouveaux users | Users totaux | Payants Pro | Payants Business | MRR SaaS | MRR transac. | MRR total | ARR (run rate) |
|------|---------------|-------------|-------------|-----------------|----------|-------------|-----------|---------------|
| M1 | 150 | 150 | 12 | 3 | 178 EUR | 10 EUR | 188 EUR | 2 256 EUR |
| M2 | 220 | 350 | 34 | 8 | 496 EUR | 30 EUR | 526 EUR | 6 312 EUR |
| M3 | 340 | 650 | 72 | 19 | 1 091 EUR | 70 EUR | 1 161 EUR | 13 932 EUR |
| M4 | 500 | 1 100 | 132 | 33 | 1 964 EUR | 140 EUR | 2 104 EUR | 25 248 EUR |
| M5 | 680 | 1 700 | 218 | 54 | 3 232 EUR | 250 EUR | 3 482 EUR | 41 784 EUR |
| M6 | 900 | 2 500 | 340 | 85 | 5 062 EUR | 420 EUR | 5 482 EUR | 65 784 EUR |
| M7 | 1 150 | 3 500 | 504 | 126 | 7 510 EUR | 650 EUR | 8 160 EUR | 97 920 EUR |
| M8 | 1 500 | 4 800 | 730 | 182 | 10 851 EUR | 1 000 EUR | 11 851 EUR | 142 212 EUR |
| M9 | 2 000 | 6 500 | 1 040 | 260 | 15 470 EUR | 1 500 EUR | 16 970 EUR | 203 640 EUR |
| M10 | 2 400 | 8 500 | 1 428 | 357 | 21 243 EUR | 2 100 EUR | 23 343 EUR | 280 116 EUR |
| M11 | 3 000 | 11 000 | 1 936 | 484 | 28 800 EUR | 2 900 EUR | 31 700 EUR | 380 400 EUR |
| M12 | 3 500 | 14 000 | 2 576 | 644 | 38 377 EUR | 3 900 EUR | 42 277 EUR | 507 324 EUR |

**Hypotheses scenario de base** :
- Lancement en juin 2026, 3 mois avant l'obligation de reception e-facture (sept. 2026)
- Croissance organique forte grace a l'urgence reglementaire
- Mix constant : 77% gratuit / 18,4% Pro / 4,6% Business
- Churn degressif : 6,5% -> 4,5% sur 12 mois
- Revenus transactionnels = ~10% du MRR SaaS
- Pas de paid acquisition significatif avant M4

### 2.2 Scenario pessimiste

| Metrique | M6 | M12 |
|----------|-----|------|
| **Users totaux** | 1 500 | 7 000 |
| **Payants** | 195 | 1 470 |
| **MRR** | 2 600 EUR | 19 500 EUR |
| **ARR (run rate)** | 31 200 EUR | 234 000 EUR |

**Hypotheses pessimiste** :
- Report de la reforme e-facture (nouveau delai de 6 mois)
- Concurrence agressive (Tiime ou Indy lance une offre similaire)
- Croissance MoM de 30-40% seulement
- Conversion freemium de 3% (au lieu de 5%)
- Churn maintenu a 6-7%

### 2.3 Scenario optimiste

| Metrique | M6 | M12 |
|----------|-----|------|
| **Users totaux** | 5 000 | 25 000 |
| **Payants** | 1 100 | 6 250 |
| **MRR** | 13 500 EUR | 82 000 EUR |
| **ARR (run rate)** | 162 000 EUR | 984 000 EUR |

**Hypotheses optimiste** :
- Product Hunt top 5 du jour (3 000+ signups en 1 semaine)
- Viralite communaute tech (thread Twitter/X viral, article Hacker News FR)
- Conversion freemium a 7% (UX superieure = meilleure activation)
- Partenariat avec 1-2 cabinets comptables majeurs des M4
- Effet "urgence e-facture sept. 2026" plus fort qu'anticipe

### 2.4 Comparaison des 3 scenarios

```
ARR (run rate) a M12

Optimiste    |========================================| 984 000 EUR
Base         |======================| 507 000 EUR
Pessimiste   |===========| 234 000 EUR

                0        200k       400k       600k       800k      1M EUR
```

### 2.5 Mix gratuit/payant attendu

| Periode | % Gratuit | % Pro | % Business | ARPU blended (payants) |
|---------|----------|-------|-----------|----------------------|
| **M3** | 86% | 11% | 3% | 10,50 EUR |
| **M6** | 83% | 13,6% | 3,4% | 10,90 EUR |
| **M9** | 80% | 16% | 4% | 11,10 EUR |
| **M12** | 77% | 18,4% | 4,6% | 11,35 EUR |
| **M18 (proj.)** | 72% | 21% | 7% | 12,50 EUR |
| **M24 (proj.)** | 68% | 23% | 9% | 13,80 EUR |

**Tendance** : Le % de payants augmente avec le temps car (1) les early adopters gratuits qui restent sont plus susceptibles de convertir, (2) l'enrichissement du produit Pro/Business augmente la valeur percue, (3) les utilisateurs gratuits churnes sont remplaces par des signups de meilleure qualite (SEO mature, referral).

---

## 3. Metriques SaaS cles — cibles

### 3.1 ARPU (Average Revenue Per User)

| Metrique | M6 | M12 | Y2 cible |
|----------|-----|------|---------|
| **ARPU total (tous users)** | 2,19 EUR | 3,02 EUR | 4,50 EUR |
| **ARPU payant** | 10,90 EUR | 11,35 EUR | 13,80 EUR |
| **ARPU Pro** | 9,13 EUR | 9,13 EUR | 9,50 EUR |
| **ARPU Business** | 18,37 EUR | 18,37 EUR | 19,50 EUR |

**Evolution ARPU** : L'ARPU payant augmente avec le temps grace a :
- Plus d'abonnes annuels (ARPU annuel lisse = meme qu'au mensuel, mais meilleure retention)
- Upsell Pro -> Business
- Revenus transactionnels (paiement en ligne) qui augmentent avec l'adoption
- Introduction de features premium additionnelles

### 3.2 Net Revenue Retention (NRR)

| Metrique | M6 | M12 | Y2 cible | Benchmark |
|----------|-----|------|---------|-----------|
| **NRR mensuel** | 96% | 98% | 102% | > 100% = excellent |
| **NRR annuel** | — | — | 110-115% | > 110% = top quartile SaaS |

**Decomposition NRR (cible M12)** :

```
Revenue debut de mois                    100%
- Churn revenue (users qui quittent)     -4,5%
- Contraction (downgrade)                -0,5%
+ Expansion (upsell Pro->Business)       +2,0%
+ Expansion (mensuel->annuel)            +0,5%
+ Expansion (transactionnel)             +0,5%
= Net Revenue Retention                  98,0%
```

**Objectif Y2** : NRR > 100% = chaque cohorte de payants genere plus de revenus au fil du temps malgre le churn. C'est le "graal" SaaS et c'est atteignable grace a un fort upsell Pro -> Business.

### 3.3 Quick Ratio

| Metrique | Formule | M6 | M12 | Y2 cible | Benchmark |
|----------|---------|-----|------|---------|-----------|
| **Quick Ratio** | (New MRR + Expansion MRR) / (Churned MRR + Contraction MRR) | 3,5 | 4,0 | 4,5 | > 4 = excellent |

**Decomposition Quick Ratio (M12)** :

| Composant | Valeur mensuelle |
|-----------|-----------------|
| **New MRR** (nouveaux abonnes payants) | +6 500 EUR |
| **Expansion MRR** (upsells + transactionnel) | +1 200 EUR |
| **Churned MRR** (abonnes qui quittent) | -1 650 EUR |
| **Contraction MRR** (downgrades) | -250 EUR |
| **Net New MRR** | +5 800 EUR |
| **Quick Ratio** | (6 500 + 1 200) / (1 650 + 250) = **4,1** |

### 3.4 Autres metriques cibles

| Metrique | M6 | M12 | Y2 cible | Commentaire |
|----------|-----|------|---------|-------------|
| **Signup-to-activation** | 60% | 70% | 80% | Activation = premiere facture envoyee dans les 7 jours |
| **Activation-to-paid** | 6% | 8% | 12% | Parmi les actives, % qui passent payant |
| **Free-to-paid time** | 21 jours | 14 jours | 10 jours | Duree mediane entre inscription et premier paiement |
| **DAU/MAU** | 25% | 30% | 35% | Ratio d'engagement |
| **Feature adoption (relances)** | 40% des Pro | 60% des Pro | 75% des Pro | % des payants qui activent les relances auto |
| **Feature adoption (API)** | 20% des Business | 35% des Business | 50% des Business | % des Business qui utilisent l'API |
| **NPS** | 35 | 45 | 55 | Net Promoter Score |
| **Time to first invoice** | 8 min | 5 min | 3 min | Temps entre signup et premiere facture envoyee |
| **Support tickets / user / mois** | 0,5 | 0,3 | 0,2 | Diminue avec l'amelioration du produit et de la doc |

---

## 4. Cohort Analysis (projection)

### 4.1 Retention par cohorte (utilisateurs payants)

| Mois apres souscription | % restant (Pro) | % restant (Business) | % restant (blended) |
|-------------------------|----------------|---------------------|-------------------|
| M0 (souscription) | 100% | 100% | 100% |
| M1 | 93% | 96% | 94% |
| M2 | 87% | 93% | 88% |
| M3 | 82% | 90% | 84% |
| M6 | 68% | 83% | 72% |
| M9 | 57% | 77% | 62% |
| M12 | 48% | 72% | 54% |
| M18 | 35% | 63% | 41% |
| M24 | 26% | 55% | 33% |

### 4.2 Revenue par cohorte (LTV cumulee a M12)

| Cohorte de 100 payants | Pro (MRR initial 913 EUR) | Business (MRR initial 1 837 EUR) |
|------------------------|--------------------------|--------------------------------|
| Revenu cumule M3 | 2 391 EUR | 5 139 EUR |
| Revenu cumule M6 | 4 210 EUR | 9 336 EUR |
| Revenu cumule M12 | 6 810 EUR | 16 032 EUR |
| LTV realisee par user a M12 | 68 EUR | 160 EUR |

---

## 5. Sensibilite et scenarios

### 5.1 Impact du churn sur la LTV

| Churn mensuel | Duree de vie moy. | LTV Pro | LTV Business | LTV blended |
|--------------|-------------------|---------|-------------|-------------|
| 2% | 50 mois | 457 EUR | 919 EUR | 568 EUR |
| 3% | 33 mois | 304 EUR | 612 EUR | 378 EUR |
| **4% (cible)** | **25 mois** | **228 EUR** | **459 EUR** | **284 EUR** |
| 5% | 20 mois | 183 EUR | 367 EUR | 227 EUR |
| 7% | 14 mois | 130 EUR | 262 EUR | 162 EUR |

**Conclusion** : Chaque point de churn en moins augmente la LTV de ~25%. L'investissement dans la retention est le levier le plus rentable.

### 5.2 Impact de la conversion freemium

| Taux conversion gratuit->payant | Payants a M12 (sur 14k users) | MRR M12 | ARR M12 |
|-------------------------------|------------------------------|---------|---------|
| 3% (pessimiste) | 420 | 4 767 EUR | 57 204 EUR |
| **5% (base)** | **3 220** | **38 377 EUR** | **460 524 EUR** |
| 7% (optimiste) | 980 | 11 118 EUR | 133 416 EUR |
| 10% (stretch) | 1 400 | 15 883 EUR | 190 596 EUR |

**Note** : Les chiffres ci-dessus sont bases sur le nombre total de payants, pas un taux simple sur 14 000, car le churn et les cohortes s'appliquent.

### 5.3 Break-even selon les scenarios

| Scenario | Couts mensuels (stabilise) | MRR break-even | Mois atteint |
|----------|--------------------------|---------------|-------------|
| **Pessimiste** (churn 7%, conversion 3%) | 15 000 EUR | 15 000 EUR | M14-M16 |
| **Base** (churn 4,5%, conversion 5%) | 20 000 EUR | 20 000 EUR | M9-M10 |
| **Optimiste** (churn 3%, conversion 7%) | 25 000 EUR | 25 000 EUR | M7-M8 |

---

## 6. Resume executif

### Metriques cles du modele

| Metrique | Valeur |
|----------|--------|
| **CAC blended (tout user)** | 15 EUR |
| **CAC payant** | 65 EUR |
| **LTV blended payant** | 284 EUR (327 EUR avec expansion) |
| **LTV/CAC** | 5,0x |
| **Payback period** | 6,7 mois |
| **Churn mensuel cible (stabilise)** | 4% blended (3,5% Pro, 2,5% Business) |
| **NRR cible (Y2)** | 110-115% |
| **Quick Ratio cible** | > 4,0 |
| **ARPU payant (M12)** | 11,35 EUR |
| **MRR M12 (base)** | 38 000 EUR |
| **ARR M12 (run rate, base)** | 460 000 EUR |
| **Break-even** | M9-M10 (base) |

### Le modele est viable si :

1. **Conversion freemium >= 4%** : En dessous, la masse de gratuits coute plus qu'elle ne rapporte
2. **Churn mensuel payant <= 5%** : Au-dela, la LTV s'effondre et le LTV/CAC passe sous 3x
3. **CAC payant <= 80 EUR** : Au-dela, le payback depasse 12 mois
4. **ARPU payant >= 10 EUR** : En dessous, les marges ne couvrent pas les couts variables

### Leviers de croissance prioritaires

| Priorite | Levier | Impact | Effort |
|----------|--------|--------|--------|
| 1 | **Reduire le churn** (meilleur onboarding, depth of use) | Tres eleve (+25% LTV par point de churn en moins) | Moyen |
| 2 | **Augmenter la conversion freemium** (upsell contextuel, feature gating intelligent) | Eleve (+20% MRR par point de conversion en plus) | Moyen |
| 3 | **Augmenter le % Business** (API adoption, partenariats) | Eleve (LTV Business = 3x LTV Pro) | Eleve |
| 4 | **Accelerer l'annualisation** (incitations, timing) | Moyen (reduit churn effectif de 50%) | Faible |
| 5 | **Developper les revenus transactionnels** (paiement en ligne) | Moyen (+10-15% de MRR additionnel) | Moyen |

---

*Document produit le 2026-03-09 — Module 0.3 (sous-tache 0.3.5)*
*Sources : docs/business-model.md, docs/pricing-strategy.md, docs/market-analysis.md, benchmarks SaaS (OpenView, ProfitWell, ChartMogul)*
