# Pricing Strategy — Service de Facturation Freelances France

> **Module** : 0.3 (sous-tache 0.3.3)
> **Date** : 2026-03-09
> **Dependances** : 0.1 (Analyse de marche), 0.2 (Value Proposition) — COMPLETED
> **Marche** : France, B2B, freelances et micro-entreprises

---

## 1. Plans tarifaires

### 1.1 Plan Gratuit

**Objectif** : Acquisition massive. Devenir le reflexe des freelances qui demarrent ou qui cherchent un outil conforme e-facture 2026.

| Aspect | Detail |
|--------|--------|
| **Prix** | 0 EUR / pour toujours |
| **Factures** | 5 par mois |
| **Devis** | 5 par mois |
| **Clients** | 3 clients actifs |
| **Facturation electronique** | Conformite e-facture 2026 (reception et emission) incluse |
| **Mentions obligatoires** | Automatiques selon statut juridique |
| **Numerotation** | Sequentielle conforme |
| **Format** | PDF + Factur-X |
| **Templates** | 1 template de base, personnalisable (logo, couleurs) |
| **Envoi** | Par email avec suivi d'ouverture |
| **Export** | PDF et CSV |
| **Suivi paiements** | Tableau basique (emises / payees / en retard) |
| **Archivage** | Archivage legal 10 ans inclus |
| **Support** | Centre d'aide + email (reponse sous 48h) |
| **Limites** | Pas de relances auto, pas de paiement en ligne, pas d'export FEC, pas d'API, mention "Powered by [NOM]" sur les factures |

**Cible** : Manon (micro-entrepreneuse creative), freelances debutants, freelances a faible volume.

---

### 1.2 Plan Pro

**Objectif** : Monetisation principale. Cible les freelances actifs qui facturent regulierement et ont besoin d'automatisation.

| Aspect | Detail |
|--------|--------|
| **Prix** | 9,90 EUR/mois (ou 99 EUR/an — economie de 17%) |
| **Factures** | Illimitees |
| **Devis** | Illimites |
| **Clients** | Illimites |
| **Facturation electronique** | Conformite complete e-facture 2026 |
| **Templates** | 5 templates premium, personnalisation avancee (typo, marges, layout) |
| **Envoi** | Email avec suivi d'ouverture + rappels automatiques |
| **Relances automatiques** | 3 niveaux configurables (rappel amical, relance formelle, mise en demeure) |
| **Paiement en ligne** | Lien de paiement CB/virement sur chaque facture (via Stripe) |
| **Dashboard financier** | CA temps reel, factures en cours, tresorerie previsionnelle |
| **Alertes seuils** | Plafond micro-entreprise, franchise TVA, echeances URSSAF |
| **Gestion TVA** | Calcul automatique, preparation declaration trimestrielle |
| **Export comptable** | FEC automatique, CSV avance, envoi direct expert-comptable |
| **Rapprochement bancaire** | Connexion bancaire en lecture (Open Banking) |
| **Support** | Email (reponse sous 24h) + chat in-app |
| **Sans mention** | Pas de "Powered by" sur les factures |

**Cible** : Thomas (dev freelance), Karim (multi-statut), freelances actifs avec CA > 500 EUR/mois.

---

### 1.3 Plan Business

**Objectif** : Upsell et retention. Cible les freelances avances, consultants seniors et micro-agences.

| Aspect | Detail |
|--------|--------|
| **Prix** | 19,90 EUR/mois (ou 199 EUR/an — economie de 17%) |
| **Tout le plan Pro** | Inclus |
| **Multi-utilisateurs** | Jusqu'a 5 utilisateurs avec roles (admin, collaborateur, comptable read-only) |
| **API REST** | Acces complet, documentation OpenAPI, SDK TypeScript, 10 000 calls/mois inclus |
| **Webhooks** | Notifications en temps reel (facture creee, paiement recu, etc.) |
| **Integrations avancees** | Notion, Slack, Linear, Stripe, Zapier/Make |
| **Multi-entites** | Gestion de plusieurs structures juridiques dans un compte (micro + societe) |
| **Facturation par jalons** | Acomptes, jalons intermediaires, soldes lies a un devis |
| **Rentabilite par projet** | Suivi des marges, temps passe, cout sous-traitance |
| **Templates illimites** | Design studio complet, import de templates custom |
| **IA** | Categorisation intelligente des depenses, generation de libelles, previsionnel IA |
| **Export avance** | FEC enrichi, rapports mensuels automatises, export multi-format |
| **Marque blanche** | Domaine personnalise pour le portail client (factures.monagence.fr) |
| **Support** | Prioritaire (reponse sous 4h) + chat + appel |
| **Onboarding** | Call de setup assiste (30 min) |

**Cible** : Sandrine (consultante), Lucie & Romain (micro-agence), freelances tech avances, consultants seniors.

---

### 1.4 Plan Enterprise (sur devis)

**Objectif** : Adresser les cabinets comptables et grandes structures de portage. Phase 2 (a partir de M9-M12).

| Aspect | Detail |
|--------|--------|
| **Prix** | Sur devis (a partir de 49 EUR/mois par cabinet, ou par nombre de clients geres) |
| **Portail multi-clients** | Gestion de dizaines/centaines de clients freelances depuis un dashboard centralise |
| **API illimitee** | Calls illimites, SLA garanti (99,9%), webhook haute frequence |
| **SSO SAML/OIDC** | Authentification entreprise |
| **SLA contractuel** | Temps de reponse garanti, uptime 99,9% |
| **Account manager dedie** | Interlocuteur unique, revue trimestrielle |
| **Formation** | Sessions de formation pour l'equipe du cabinet |
| **Custom integrations** | Integrations sur mesure avec les logiciels comptables du cabinet |
| **Audit log** | Journal complet des actions pour conformite |

**Cible** : Cabinets comptables (15 000 en France), societes de portage (300+), groupements de freelances.

---

## 2. Feature Matrix detaillee

| Fonctionnalite | Gratuit | Pro (9,90 EUR) | Business (19,90 EUR) | Enterprise |
|---------------|---------|---------------|---------------------|-----------|
| **Facturation** | | | | |
| Factures conformes | 5/mois | Illimitees | Illimitees | Illimitees |
| Devis | 5/mois | Illimites | Illimites | Illimites |
| Clients actifs | 3 | Illimites | Illimites | Illimites |
| Conversion devis -> facture | Oui | Oui | Oui | Oui |
| Factures d'acompte/jalons | Non | Non | Oui | Oui |
| Factures recurrentes | Non | Oui | Oui | Oui |
| Avoirs / notes de credit | Non | Oui | Oui | Oui |
| **Conformite** | | | | |
| E-facture 2026 (PDP/PPF) | Oui | Oui | Oui | Oui |
| Mentions obligatoires auto | Oui | Oui | Oui | Oui |
| Numerotation sequentielle | Oui | Oui | Oui | Oui |
| Format Factur-X | Oui | Oui | Oui | Oui |
| Archivage legal 10 ans | Oui | Oui | Oui | Oui |
| **Personnalisation** | | | | |
| Templates | 1 | 5 | Illimites | Custom |
| Logo et couleurs | Oui | Oui | Oui | Oui |
| Typographie et layout | Non | Oui | Oui | Oui |
| Design studio complet | Non | Non | Oui | Oui |
| Marque blanche | Non | Non | Oui | Oui |
| Mention "Powered by" | Oui | Non | Non | Non |
| **Paiements et relances** | | | | |
| Suivi paiements basique | Oui | Oui | Oui | Oui |
| Relances automatiques | Non | 3 niveaux | 3 niveaux | Personnalisees |
| Paiement en ligne (CB) | Non | Oui | Oui | Oui |
| Suivi d'ouverture email | Oui | Oui | Oui | Oui |
| **Finance et comptabilite** | | | | |
| Dashboard CA temps reel | Non | Oui | Oui | Oui |
| Alertes seuils (micro, TVA) | Non | Oui | Oui | Oui |
| Gestion TVA | Non | Oui | Oui | Oui |
| Rapprochement bancaire | Non | Oui | Oui | Oui |
| Previsionnel tresorerie | Non | Basique | Avance (IA) | Avance |
| Export FEC | Non | Oui | Oui | Oui |
| Export CSV/PDF | Oui (PDF) | Oui | Oui | Oui |
| Rapports mensuels auto | Non | Non | Oui | Oui |
| **Multi / Collaboration** | | | | |
| Utilisateurs | 1 | 1 | 5 | Illimites |
| Multi-entites | Non | Non | Oui | Oui |
| Roles et permissions | Non | Non | Admin, Collab, Comptable | Custom |
| Acces expert-comptable | Non | Lecture seule | Lecture + export | Complet |
| Portail multi-clients | Non | Non | Non | Oui |
| **Technique** | | | | |
| API REST | Non | Non | 10k calls/mois | Illimite |
| Webhooks | Non | Non | Oui | Oui |
| SDK TypeScript | Non | Non | Oui | Oui |
| Integrations (Notion, Slack...) | Non | Non | Oui | Custom |
| Zapier / Make | Non | Non | Oui | Oui |
| SSO SAML/OIDC | Non | Non | Non | Oui |
| **IA** | | | | |
| Categorisation depenses | Non | Non | Oui | Oui |
| Generation de libelles | Non | Non | Oui | Oui |
| Previsionnel IA | Non | Non | Oui | Oui |
| **Support** | | | | |
| Centre d'aide | Oui | Oui | Oui | Oui |
| Email | 48h | 24h | 4h | 1h + SLA |
| Chat in-app | Non | Oui | Oui | Oui |
| Appel / visio | Non | Non | Oui | Oui |
| Onboarding assiste | Non | Non | 30 min | Dedie |
| Account manager | Non | Non | Non | Oui |

---

## 3. Strategie freemium

### 3.1 Pourquoi un plan gratuit

| Raison | Explication |
|--------|------------|
| **Pre-requis de marche** | Tiime (200k users) et Indy (90k users) offrent la facturation gratuite. Ne pas proposer de plan gratuit = se couper de 80% du marche freelance entry-level. |
| **Cout marginal quasi-nul** | Avec Vercel + Supabase, un utilisateur gratuit coute < 0,15 EUR/mois a servir. Le plan gratuit est economiquement viable. |
| **Acquisition virale** | Les factures envoyees par les utilisateurs gratuits portent la mention "Powered by [NOM]" = canal d'acquisition gratuit. Sur 5 factures/mois/user x 10 000 users gratuits = 50 000 impressions/mois. |
| **Conformite e-facture comme cheval de Troie** | Offrir la conformite e-facture 2026 gratuitement positionne le produit comme la solution "par defaut" pour les freelances qui doivent se mettre en conformite. Acquisition massive entre sept. 2026 et sept. 2027. |
| **Pipeline d'upsell** | Chaque utilisateur gratuit qui atteint les limites (6e facture, 4e client, besoin de relances) est un prospect qualifie pour le plan Pro. |

### 3.2 Limites du plan gratuit — design intentionnel

Les limites sont choisies pour maximiser l'activation tout en creant une friction naturelle vers le Pro :

| Limite | Valeur | Raison |
|--------|--------|--------|
| 5 factures/mois | Suffisant pour un freelance debutant (1-2 clients, 3-4 factures). Insuffisant des que l'activite decolle. | Le passage a 6+ factures/mois correspond au moment ou le freelance a besoin de professionnaliser sa gestion. |
| 3 clients actifs | Permet de gerer 2-3 missions recurrentes. Force l'upgrade quand le carnet se remplit. | Les freelances actifs ont 4-8 clients actifs en moyenne. |
| Pas de relances auto | Le suivi basique montre les retards, mais pas d'action automatique. | Cree le besoin d'automatisation quand les impayes arrivent (douleur forte). |
| Pas d'export FEC | Export PDF/CSV basique seulement. | Le besoin FEC arrive avec l'expert-comptable = signal de maturite = pret a payer. |
| Mention "Powered by" | Logo/lien sur les factures PDF. | Canal d'acquisition viral + incentive a upgrader (image pro). |

### 3.3 Taux de conversion attendus

| Conversion | Cible M6 | Cible M12 | Benchmark SaaS freemium |
|-----------|---------|---------|------------------------|
| **Gratuit -> Pro** | 4% | 5% | 2-5% (Slack : 30%, Dropbox : 4%, Canva : 4%) |
| **Pro -> Business** | 15% | 25% | 10-30% des payants qui upsell |
| **Mensuel -> Annuel** | 15% | 30% | 20-40% pour les SaaS B2B |
| **Trial-to-paid (si trial Pro 14j)** | 15% | 20% | 10-25% |

### 3.4 Monetisation de la base gratuite (indirecte)

Meme les utilisateurs gratuits generent de la valeur :

| Levier | Valeur estimee |
|--------|---------------|
| **Viralite factures** | Mention "Powered by" = ~50k impressions/mois (10k users x 5 factures) |
| **Referral partenaires** | Recommandation vers experts-comptables/neobanques = 30-50 EUR/referral |
| **Data anonymisee** | Insights de marche (volumes de facturation, saisonnalite, delais de paiement) pour content marketing |
| **Effet reseau** | Plus d'utilisateurs = plus de legitimite = meilleur SEO = plus d'utilisateurs |

---

## 4. Discounts et offres speciales

### 4.1 Discount annuel

| Plan | Mensuel | Annuel | Economie | Equivalent mensuel |
|------|---------|--------|----------|-------------------|
| **Pro** | 9,90 EUR/mois | 99 EUR/an | -17% (2 mois offerts) | 8,25 EUR/mois |
| **Business** | 19,90 EUR/mois | 199 EUR/an | -17% (2 mois offerts) | 16,58 EUR/mois |

**Rationale** : 17% de discount est le standard SaaS. Incentive l'engagement sans devaloriser le produit. L'annuel reduit le churn (engagement 12 mois) et ameliore la tresorerie (paiement upfront).

### 4.2 Early bird (lancement)

| Offre | Detail | Duree |
|-------|--------|-------|
| **Founder's Plan** | Pro a 6,90 EUR/mois (ou 69 EUR/an) a vie pour les 500 premiers inscrits | 3 premiers mois post-lancement |
| **Lifetime deal** | Business a 299 EUR a vie (one-shot) pour les 100 premiers (limite) | Premiere semaine de lancement |

**Rationale** : Les early birds servent de base d'utilisateurs engages pour le feedback produit et le bouche-a-oreille. Le cout est absorbable (500 x 69 EUR = 34 500 EUR ARR garanti, 100 x 299 EUR = 29 900 EUR de cash upfront).

### 4.3 Discount etudiant / jeune entrepreneur

| Offre | Detail | Conditions |
|-------|--------|-----------|
| **-50% sur Pro** | 4,95 EUR/mois pour les etudiants et jeunes entrepreneurs (< 26 ans ou < 1 an d'activite) | Justificatif etudiant ou extrait Kbis < 1 an |

**Rationale** : Capter les futurs freelances des l'ecole/le debut d'activite. Faible cout (ARPU deja bas), investissement dans la retention long terme.

### 4.4 Discount ONG / association

| Offre | Detail |
|-------|--------|
| **Gratuit** | Plan Pro gratuit pour les associations loi 1901 et ONG |

### 4.5 Referral program

| Parrain | Filleul |
|---------|---------|
| 1 mois de Pro offert (ou credit de 9,90 EUR) | 1 mois de Pro offert (au lieu du plan gratuit) |

**Cap** : 12 mois maximum de credits par parrain (= Pro gratuit pendant 1 an pour un super-ambassadeur).

---

## 5. Comparaison prix vs concurrence

### 5.1 Tableau comparatif (plan payant le plus bas)

| Acteur | Plan gratuit | Prix min payant | E-facture 2026 incl. | API | Multi-users | Notre positionnement |
|--------|-------------|-----------------|---------------------|-----|-------------|---------------------|
| **Nous (Pro)** | Oui (5 fact/mois) | **9,90 EUR/mois** | Oui (meme gratuit) | Business | Business | **Prix agressif + conformite gratuite** |
| **Tiime** | Oui (illimite) | 14,99 EUR/mois | Oui | Non | Non | Gratuit plus genereux, mais pas d'API, UX comptable |
| **Indy** | Oui (illimite) | 16 EUR HT/mois | Oui | Non | Non | Gratuit plus genereux, mais cher en payant, pas d'API |
| **Abby** | Oui (limite) | 11 EUR HT/mois | Oui | Non | Pro (39 EUR) | Prix similaire, mais pas d'API ni de design premium |
| **Freebe** | Non | 15 EUR TTC/mois | A verifier | Non | Non | Pas de gratuit, plus cher, pas d'API |
| **Henrri** | Oui (genereux) | 17 EUR HT/mois | Oui | Non | VIP (59 EUR) | Gratuit genereux mais UX datee, payant cher |
| **Shine** | Oui (3 fact) | 11 EUR HT/mois | Oui | Non | Business (80 EUR) | Neobanque, facturation secondaire |
| **Pennylane** | Non | 14 EUR/mois | Oui | Partielle | Oui | Trop cher et complexe pour freelances solo |
| **Sellsy** | Non | 39 EUR HT/mois | Oui | Oui | Oui | Hors budget freelance, cible PME |

### 5.2 Positionnement prix

```
PRIX MENSUEL (plan payant min)

Sellsy          |=========================| 39 EUR
Pennylane       |==================| 14-24 EUR
Henrri          |=================| 17 EUR
Indy            |================| 16 EUR
Freebe          |===============| 15 EUR
Tiime           |===============| 14,99 EUR
Shine           |===========| 11 EUR
Abby            |===========| 11 EUR
>> NOUS (Pro)   |==========| 9,90 EUR  <-- Moins cher que tous sauf Tiime/Indy gratuit
```

### 5.3 Valeur percue vs prix

```
                    VALEUR PERCUE ELEVEE
                          ^
                          |
              [NOUS]      |    Pennylane
              Business    |
                          |
              [NOUS]      |    Indy
              Pro         |    Tiime
                          |
  PRIX BAS  -------------+------------- PRIX ELEVE
                          |
              Facture.net |    Freebe
              Henrri      |    Abby
              [NOUS]      |
              Gratuit     |    Sellsy
                          |
                    VALEUR PERCUE FAIBLE
```

**Notre strategie** : Se positionner comme le meilleur ratio valeur/prix du marche. Gratuit = conformite e-facture (unique). Pro = moins cher que tous les concurrents payants avec plus de fonctionnalites. Business = prix d'un plan Pro concurrent mais avec API, multi-users et IA.

---

## 6. Logique de feature gating

### 6.1 Principes de gating

| Principe | Description |
|----------|------------|
| **La conformite est gratuite** | E-facture 2026, mentions obligatoires, numerotation, archivage = gratuit. C'est un droit, pas un premium. |
| **L'automatisation est Pro** | Relances, rapprochement bancaire, alertes, export FEC = payant. C'est de l'efficacite, ca vaut de l'argent. |
| **L'integration est Business** | API, webhooks, multi-users, multi-entites = Business. C'est de la puissance pour les utilisateurs avances. |
| **Les limites sont generatives** | 5 factures/mois gratuit = suffisant pour demarrer, insuffisant pour rester. La limite cree le besoin. |

### 6.2 Triggers d'upsell (moments cles)

| Trigger | De -> Vers | Message |
|---------|-----------|---------|
| 5e facture du mois | Gratuit -> Pro | "Vous avez atteint la limite du plan gratuit. Passez a Pro pour des factures illimitees a 9,90 EUR/mois." |
| 4e client | Gratuit -> Pro | "Votre activite grandit ! Gerez tous vos clients avec le plan Pro." |
| Premiere facture en retard | Gratuit -> Pro | "Cette facture est en retard de 7 jours. Avec le plan Pro, vos relances sont automatiques." |
| Demande d'export FEC | Gratuit -> Pro | "L'export FEC est disponible dans le plan Pro. Votre comptable vous remerciera." |
| Demande API | Pro -> Business | "L'acces API est inclus dans le plan Business. Automatisez votre facturation." |
| Invitation d'un collegue | Pro -> Business | "Le multi-utilisateurs est disponible dans le plan Business." |
| Ajout d'une 2e entite | Pro -> Business | "Gerez vos multiples structures dans le plan Business." |

---

## 7. Projections de revenus par plan

### Mix attendu a M12

| Metrique | Gratuit | Pro | Business | Total |
|----------|---------|-----|----------|-------|
| **Utilisateurs** | 10 780 (77%) | 2 576 (18,4%) | 644 (4,6%) | 14 000 |
| **ARPU** | 0 EUR | 9,13 EUR* | 18,37 EUR* | — |
| **MRR** | 0 EUR | 23 519 EUR | 11 830 EUR | 35 349 EUR** |
| **% du MRR** | 0% | 67% | 33% | 100% |

*ARPU ajuste : tient compte du mix mensuel/annuel (30% annuel a M12 = discount 17%).
**MRR SaaS pur. Le MRR total incluant transactionnel et marketplace est de ~38 000 EUR (cf. business-model.md).

---

*Document produit le 2026-03-09 — Module 0.3 (sous-tache 0.3.3)*
*Sources : docs/market-analysis.md, docs/competitors.md, docs/personas.md, docs/value-proposition.md*
