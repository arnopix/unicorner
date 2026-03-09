# Value Proposition Design — Facturation Freelances France (B2B)

> **Module** : 0.2 (sous-taches 0.2.1 a 0.2.4)
> **Date** : 2026-03-09
> **Dependance** : 0.1 (Analyse de marche) — COMPLETED
> **Positionnement** : Outil moderne, API-first, pense pour le freelance tech/consultant B2B, conformite e-facture native, UX premium

---

## 1. Value Proposition Canvas

### 1.1 Customer Profile

#### Jobs (ce que les freelances essaient de faire)

**Jobs fonctionnels**

| # | Job | Frequence | Personas concernees |
|---|-----|-----------|-------------------|
| J1 | Creer et envoyer des factures conformes a la legislation francaise | Hebdo/mensuel | Tous |
| J2 | Suivre les paiements recus et en retard | Continu | Tous |
| J3 | Relancer les clients qui n'ont pas paye | Quand necessaire | Tous |
| J4 | Gerer les devis et les convertir en factures | Hebdo | Tous |
| J5 | Exporter les donnees pour l'expert-comptable (FEC, CSV) | Trimestriel/annuel | Sandrine, Karim, Lucie & Romain |
| J6 | Suivre son CA en temps reel par rapport aux seuils (plafond micro, TVA) | Continu | Thomas, Manon, Karim |
| J7 | Gerer la TVA (collecte, declaration, acomptes) | Trimestriel | Sandrine, Lucie & Romain |
| J8 | Facturer des acomptes, jalons et soldes sur des projets longs | Par projet | Sandrine, Lucie & Romain |
| J9 | Se conformer a la facturation electronique obligatoire (PDP, Factur-X) | Reglementaire | Tous |
| J10 | Consolider la vision financiere multi-activites / multi-statuts | Continu | Karim |

**Jobs emotionnels**

| # | Job | Personas concernees |
|---|-----|-------------------|
| E1 | Se sentir en securite et en conformite avec les obligations legales et fiscales | Tous |
| E2 | Ne pas stresser a l'approche des echeances fiscales et des declarations | Tous |
| E3 | Ressentir de la fierte en envoyant des factures professionnelles et soignees | Manon, Sandrine |
| E4 | Avoir le sentiment de maitriser sa situation financiere et de piloter son activite | Thomas, Karim, Sandrine |
| E5 | Etre serein sur sa tresorerie et ses paiements a venir | Tous |

**Jobs sociaux**

| # | Job | Personas concernees |
|---|-----|-------------------|
| S1 | Projeter une image professionnelle et credible aupres de ses clients B2B | Tous |
| S2 | Satisfaire les attentes de son expert-comptable (FEC propre, ecritures correctes) | Sandrine, Karim, Lucie & Romain |
| S3 | Faire partie d'une communaute de freelances modernes et structures | Thomas, Karim |
| S4 | Montrer qu'on est a la pointe sur les obligations legales (e-facture 2026) | Tous |
| S5 | Rassurer ses clients grands comptes sur sa conformite (appels d'offres, audits) | Sandrine, Lucie & Romain |

---

#### Pains (frustrations, obstacles, risques)

| # | Pain | Severite | Personas | Frequence |
|---|------|----------|----------|-----------|
| P1 | **Complexite reglementaire** : les mentions obligatoires changent selon le statut (micro, EURL, SAS), la TVA, le secteur, et la reforme e-facture ajoute une couche | Critique | Tous | Permanente |
| P2 | **Impayes et retards de paiement** : 30% des freelances subissent des retards, delai moyen 45-60 jours en B2B grands comptes | Elevee | Tous | Reguliere |
| P3 | **Temps perdu sur l'admin** : 4 a 8h/mois en moyenne sur la facturation et la comptabilite, temps non facturable | Elevee | Tous | Mensuelle |
| P4 | **Peur de la non-conformite** : risque d'amende (15 EUR/facture non conforme), rejet de factures par les clients, stress a chaque evolution reglementaire | Elevee | Tous | Permanente |
| P5 | **Outils fragmentes** : jonglage entre Excel, Google Sheets, un logiciel de facturation basique, la banque, et le dossier de l'expert-comptable | Moderee | Thomas, Karim, Lucie & Romain | Permanente |
| P6 | **Absence de visibilite financiere** : pas de dashboard consolide, pas de previsionnel, pas de suivi des seuils en temps reel | Moderee | Thomas, Karim, Manon | Permanente |
| P7 | **Relances manuelles et genantes** : relancer un client est inconfortable, et le faire a la main prend du temps | Moderee | Tous | Reguliere |
| P8 | **Interface datee ou complexe** des outils existants : trop "comptable", pas assez "produit" | Moderee | Thomas, Manon | Au choix de l'outil |
| P9 | **Pas d'API** pour automatiser ou integrer avec son workflow technique | Moderee | Thomas | Permanente |
| P10 | **Difficulte de gestion multi-statut** (portage + micro, transition vers SASU) : aucun outil ne gere bien les scenarii hybrides | Elevee | Karim | Permanente |
| P11 | **Manque de personnalisation visuelle** des factures : templates rigides, pas a la hauteur d'un freelance creatif | Faible-Moderee | Manon | A chaque facture |
| P12 | **Export comptable penible** : pas de FEC automatique, donnees a retravailler manuellement avant envoi au comptable | Moderee | Sandrine, Lucie & Romain | Trimestrielle |

---

#### Gains (resultats souhaites, benefices)

| # | Gain | Importance | Personas |
|---|------|------------|----------|
| G1 | **Facturation en moins de 2 minutes** : creer et envoyer une facture conforme en quelques clics | Critique | Tous |
| G2 | **Conformite automatique** : les mentions obligatoires, la numerotation sequentielle, le format e-facture sont geres sans intervention | Critique | Tous |
| G3 | **Zero impaye** : relances automatiques, paiement en ligne integre, suivi temps reel | Elevee | Tous |
| G4 | **Dashboard financier en temps reel** : CA, tresorerie, seuils, previsionnel, le tout en un coup d'oeil | Elevee | Thomas, Karim, Sandrine |
| G5 | **Export comptable en 1 clic** : FEC, CSV, envoi direct a l'expert-comptable | Moderee | Sandrine, Karim, Lucie & Romain |
| G6 | **Automatisation URSSAF** : declaration pre-remplie, rappels d'echeances, calcul des cotisations | Moderee | Thomas, Manon, Karim |
| G7 | **API et integrations** : connecter la facturation a son stack technique (Notion, Linear, Slack, Stripe, banque) | Elevee | Thomas, Lucie & Romain |
| G8 | **Factures au design premium** : templates modernes, personnalisables, qui refletent la marque du freelance | Moderee | Manon, Sandrine |
| G9 | **Gestion multi-projet, multi-utilisateur** : suivi par client/projet, facturation par jalons, acces equipe | Elevee | Lucie & Romain |
| G10 | **Vision consolidee multi-statut** : aggreger portage + micro + societe dans un seul tableau de bord | Elevee | Karim |
| G11 | **Tranquillite d'esprit** : savoir que tout est conforme, a jour, et sous controle | Critique | Tous |
| G12 | **Accompagnement a la transition** : aide au passage micro → EURL/SASU, gestion du changement de regime | Moderee | Thomas, Karim |

---

### 1.2 Value Map

#### Products & Services

| Categorie | Service / Feature | Plan |
|-----------|------------------|------|
| **Facturation core** | Creation de factures et devis conformes (mentions auto, numerotation sequentielle, Factur-X) | Gratuit |
| **Facturation core** | Conversion devis → facture en 1 clic | Gratuit |
| **Facturation core** | Templates personnalisables (couleurs, logo, typo, layout) | Gratuit |
| **Facturation core** | Envoi par email avec suivi d'ouverture | Gratuit |
| **Conformite** | Conformite e-facture 2026/2027 native (PDP integree ou connecteur PPF) | Gratuit |
| **Conformite** | Mentions obligatoires automatiques selon statut juridique | Gratuit |
| **Conformite** | Archivage legal 10 ans conforme | Gratuit |
| **Suivi paiements** | Tableau de suivi des factures (emises, en attente, en retard, payees) | Gratuit |
| **Suivi paiements** | Relances automatiques personnalisables (email, timing, escalade) | Pro |
| **Suivi paiements** | Lien de paiement en ligne sur chaque facture (CB, virement) | Pro |
| **Finance** | Dashboard CA temps reel avec alertes seuils (plafond micro, TVA, URSSAF) | Pro |
| **Finance** | Previsionnel de tresorerie | Pro |
| **Finance** | Rapprochement bancaire automatique (Open Banking) | Pro |
| **Comptabilite** | Export FEC, CSV, PDF en 1 clic | Pro |
| **Comptabilite** | Gestion TVA integree (collecte, calcul, preparation declaration) | Pro |
| **Comptabilite** | Declaration URSSAF pre-remplie | Pro |
| **Tech** | API REST complete et documentee | Business |
| **Tech** | Webhooks pour automatisation | Business |
| **Tech** | Integrations natives (Notion, Linear, Slack, Stripe, banques) | Business |
| **Multi** | Multi-activites / multi-statuts dans un seul compte | Business |
| **Multi** | Multi-utilisateurs avec roles (admin, collaborateur, comptable) | Business |
| **Multi** | Gestion par projet/client avec facturation par jalons | Business |
| **IA** | Categorisation intelligente des depenses | Business |
| **IA** | Generation automatique de libelles et descriptions | Business |
| **IA** | Suggestions de previsionnel bases sur l'historique | Business |

---

#### Pain Relievers

| Pain adresse | Pain Reliever | Comment ca fonctionne |
|-------------|---------------|----------------------|
| P1 — Complexite reglementaire | **Conformite automatique contextuelle** | L'utilisateur saisit son statut juridique une seule fois. Le systeme adapte automatiquement toutes les mentions legales, le format de numerotation, les regles de TVA et le format e-facture. Zero configuration manuelle. |
| P2 — Impayes et retards | **Systeme de relance intelligent** | Sequences de relance automatiques avec escalade progressive (rappel amical J+3, relance formelle J+15, mise en demeure J+30). Lien de paiement en ligne sur chaque facture pour reduire les frictions. |
| P3 — Temps perdu sur l'admin | **Facturation en 90 secondes** | Templates pre-configures, auto-completion des clients recurrents, conversion devis → facture en 1 clic, duplication de factures. Objectif : < 2 minutes par facture. |
| P4 — Peur de la non-conformite | **Validation en temps reel** | Chaque facture est verifiee avant envoi (mentions obligatoires, format, numerotation). Alertes proactives lors de changements reglementaires. Conformite e-facture 2026 native, pas de migration necessaire. |
| P5 — Outils fragmentes | **Plateforme unifiee** | Facturation + suivi paiements + comptabilite + declarations dans un seul outil. Integrations bidirectionnelles avec les banques, l'expert-comptable, et les outils du quotidien. |
| P6 — Absence de visibilite | **Dashboard financier temps reel** | Vue consolidee du CA, des factures en cours, de la tresorerie, avec alertes intelligentes sur les seuils (plafond micro, franchise TVA, cotisations URSSAF). |
| P7 — Relances genantes | **Relances professionnelles automatisees** | L'outil relance a la place du freelance, avec des emails professionnels et personnalises. Le freelance n'a plus a "faire le mechant". |
| P8 — Interface datee | **UX premium moderne** | Interface inspiree des meilleurs produits SaaS (Linear, Notion, Stripe). Design system soigne, dark mode, animations fluides, experience mobile native. |
| P9 — Pas d'API | **API-first architecture** | API REST complete avec documentation interactive (OpenAPI/Swagger), SDK TypeScript, webhooks, rate limiting transparent. Pensee pour les developpeurs. |
| P10 — Multi-statut difficile | **Gestion multi-entites** | Un seul compte pour gerer micro-entreprise + portage + societe. Dashboard consolide avec ventilation par entite. Accompagnement a la transition de statut. |
| P11 — Personnalisation limitee | **Design studio integre** | Editeur de templates avec controle complet (couleurs, typo, logo, layout, marges). Export PDF pixel-perfect. |
| P12 — Export comptable penible | **Export FEC automatique** | Generation automatique du FEC conforme a la norme. Envoi direct a l'expert-comptable par lien securise ou integration avec les outils comptables (Pennylane, ACD, Cegid). |

---

#### Gain Creators

| Gain adresse | Gain Creator | Valeur delivree |
|-------------|-------------|-----------------|
| G1 — Facturation rapide | **Workflow de facturation optimise** | Reduire le temps de facturation de 15-20 min a moins de 2 min par facture. Sur 5 factures/mois, c'est 1h30 recuperee. |
| G2 — Conformite auto | **Moteur de conformite temps reel** | Zero risque de non-conformite. Le freelance se concentre sur le contenu de sa facture, pas sur les regles. Mise a jour automatique lors des changements reglementaires. |
| G3 — Zero impaye | **Suite de recouvrement integree** | Reduction du DSO (Days Sales Outstanding) de 45 jours a 15 jours en moyenne. Paiement en ligne pour encaisser en 24-48h. Taux de recouvrement > 95%. |
| G4 — Dashboard financier | **Intelligence financiere** | Le freelance voit en temps reel ou il en est. Previsionnel a 3 mois. Alertes proactives. Pas de surprise en fin d'annee. |
| G5 — Export 1 clic | **Pont comptable natif** | L'expert-comptable recoit un FEC propre sans intervention du freelance. Gain de temps des deux cotes. Reduction des allers-retours. |
| G6 — Auto URSSAF | **Assistant declarations** | Pre-remplissage automatique de la declaration URSSAF a partir des factures encaissees. Rappels d'echeances. Simulation des cotisations. |
| G7 — API & integrations | **Ecosysteme ouvert** | Le freelance tech integre la facturation dans son workflow existant (Notion pour les projets, Slack pour les notifications, Stripe pour les paiements). Automatisations sur mesure via Zapier/Make ou API directe. |
| G8 — Design premium | **Identite visuelle sur chaque facture** | Le freelance envoie des factures qui refletent son niveau de professionnalisme. Premiere impression positive aupres des nouveaux clients. |
| G9 — Multi-projet | **Centre de commande projet** | Vue consolidee de la rentabilite par projet. Facturation par jalons avec suivi d'avancement. Gestion de la sous-traitance. |
| G10 — Vision consolidee | **Agregateur multi-entites** | Un seul endroit pour voir tout son CA, quel que soit le statut juridique. Indispensable pour les freelances en transition. |
| G11 — Tranquillite | **Pilote automatique** | Le freelance parametre une fois, l'outil tourne tout seul. Relances, conformite, declarations, archivage : tout est gere. |
| G12 — Accompagnement transition | **Guide de transition intelligent** | Simulateur micro → EURL/SASU avec impact financier. Checklist de transition. Migration automatique des donnees lors du changement de statut. |

---

### 1.3 Fit Analysis

#### Matrice de Fit (Problem-Solution Fit)

| Customer Job / Pain | Notre reponse | Force du fit | Couvert par la concurrence ? |
|---------------------|---------------|-------------|------------------------------|
| Conformite e-facture 2026 (J9, P1, P4) | PDP native des le jour 1, format Factur-X auto | **Fort** | Partiellement (Tiime, Indy sont PDP ; beaucoup d'autres non confirmes) |
| Facturation rapide et conforme (J1, P3, G1) | Workflow < 2 min, mentions auto | **Fort** | Oui, mais UX inegale |
| Relances et recouvrement (J3, P2, P7, G3) | Suite de relance auto + paiement en ligne | **Fort** | Basique chez la plupart ; Henrri et Abby ont des relances auto |
| API et integrations (P9, G7) | API REST complete, webhooks, SDK | **Tres fort (differenciateur)** | Quasi-absent du marche freelance FR. Aucun concurrent ne propose d'API publique robuste |
| Multi-statut / multi-entites (J10, P10, G10) | Gestion portage + micro + societe unifiee | **Tres fort (differenciateur)** | Non couvert. Aucun outil ne gere le scenario hybride portage/micro |
| Dashboard financier intelligent (P6, G4) | Dashboard temps reel avec alertes seuils | **Fort** | Freebe et Indy ont des dashboards, mais sans alertes seuils |
| Design premium des factures (P8, P11, G8) | Templates modernes + design studio | **Moyen-Fort** | Correct chez Freebe ; faible chez les autres |
| Export comptable FEC (P12, G5) | FEC automatique + envoi direct comptable | **Fort** | Indy et Tiime le font, pas les petits acteurs |
| Multi-projet multi-users (J8, G9) | Facturation par jalons, RBAC, sous-traitance | **Fort** | Sellsy le fait mais a 39 EUR/mois/user. Absent du segment freelance |
| Gestion URSSAF (G6) | Declaration pre-remplie, rappels | **Moyen** | Freebe et Abby le font deja bien |

#### Synthese du Fit

**Product-Market Fit hypothesis :**

Notre proposition de valeur se distingue sur **3 axes differenciateurs forts** que la concurrence ne couvre pas ou mal :

1. **API-first** : Aucun acteur du marche freelance FR ne propose une API publique complete. C'est un avantage concurrentiel net aupres des freelances tech (persona Thomas, ~400k freelances IT en France).

2. **Multi-statut natif** : Le scenario portage + micro + societe n'est gere par personne. C'est un pain point reel pour un segment en croissance (persona Karim, freelances en transition).

3. **UX premium + conformite native** : Combiner une experience utilisateur de niveau Stripe/Linear avec la conformite e-facture 2026 des le jour 1, le tout en freemium, cree une proposition unique sur le marche.

Les jobs de base (facturation, devis, TVA) sont bien couverts par les concurrents mais representent un **prerequis** (table stakes), pas un differenciateur. Notre valeur ajoutee reside dans la **couche superieure** : automatisation, intelligence, ouverture.

---

## 2. Jobs-to-be-done (JTBD)

### 2.1 Jobs fonctionnels

Hierarchises par importance (poids = frequence x impact x nombre de personas concernees).

| Rang | Job | Enonce JTBD | Poids |
|------|-----|-------------|-------|
| 1 | **Creer des factures conformes** | "Quand j'ai termine une mission ou un jalon, je veux creer et envoyer une facture conforme en moins de 2 minutes, pour etre paye rapidement sans risque legal." | 10/10 |
| 2 | **Etre conforme a la reforme e-facture 2026** | "Quand la reglementation impose la facturation electronique, je veux que mon outil soit nativement conforme (PDP/PPF), pour ne pas avoir a migrer ni a m'en occuper." | 9/10 |
| 3 | **Suivre mes paiements en temps reel** | "Quand j'ai des factures en cours, je veux voir instantanement lesquelles sont payees, en attente ou en retard, pour savoir exactement ou en est ma tresorerie." | 9/10 |
| 4 | **Relancer automatiquement les clients en retard** | "Quand un client n'a pas paye a l'echeance, je veux que le systeme le relance automatiquement avec des messages professionnels, pour que je n'aie pas a le faire moi-meme." | 8/10 |
| 5 | **Exporter mes donnees pour mon expert-comptable** | "Quand c'est la periode des declarations, je veux generer un FEC ou un export conforme en 1 clic, pour que mon comptable ait tout ce qu'il lui faut sans aller-retour." | 7/10 |
| 6 | **Suivre mon CA par rapport aux seuils legaux** | "Quand je suis en micro-entreprise, je veux voir en temps reel ou j'en suis par rapport au plafond de CA et au seuil de TVA, pour anticiper un changement de regime." | 7/10 |
| 7 | **Gerer mes devis et les convertir en factures** | "Quand un client accepte mon devis, je veux le transformer en facture en 1 clic, pour ne pas re-saisir les informations." | 7/10 |
| 8 | **Gerer la TVA** | "Quand je suis assujetti a la TVA, je veux que mon outil calcule automatiquement la TVA collectee et deductible, pour simplifier mes declarations trimestrielles." | 6/10 |
| 9 | **Facturer par jalons (acomptes/solde)** | "Quand j'ai un projet long, je veux creer facilement des factures d'acompte, de jalon et de solde liees au meme devis, pour fluidifier ma tresorerie." | 6/10 |
| 10 | **Integrer la facturation dans mon workflow existant** | "Quand j'utilise deja Notion/Linear/Slack au quotidien, je veux connecter mon outil de facturation via API ou integration, pour ne pas avoir a changer de contexte." | 5/10 |

### 2.2 Jobs emotionnels

| Rang | Job | Enonce JTBD | Poids |
|------|-----|-------------|-------|
| 1 | **Se sentir en securite juridique** | "Je veux etre certain que chaque facture que j'envoie est 100% conforme, pour ne jamais avoir peur d'un controle fiscal ou d'un rejet client." | 9/10 |
| 2 | **Ressentir le controle sur sa situation financiere** | "Je veux avoir une vision claire et instantanee de ma sante financiere, pour me sentir maitre de mon activite et pas subir." | 8/10 |
| 3 | **Eliminer le stress administratif** | "Je veux que l'admin tourne en pilote automatique, pour me concentrer sur ce que j'aime faire : mon metier." | 8/10 |
| 4 | **Etre fier de son image professionnelle** | "Je veux que mes factures et devis refletent la qualite de mon travail, pour que mes clients percoivent mon serieux." | 6/10 |
| 5 | **Gagner en confiance pour negocier** | "Quand je connais exactement mes chiffres (CA, marge, previsionnel), je veux me sentir legitime pour negocier mes tarifs ou refuser des missions." | 5/10 |

### 2.3 Jobs sociaux

| Rang | Job | Enonce JTBD | Poids |
|------|-----|-------------|-------|
| 1 | **Projeter une image professionnelle** | "Je veux que mes clients percoivent que je suis structure et fiable, pour gagner leur confiance et decrocher des missions recurrentes." | 8/10 |
| 2 | **Satisfaire les exigences de l'expert-comptable** | "Je veux que mon comptable soit satisfait de la qualite de mes donnees, pour que notre collaboration soit fluide et pour eviter les remarques." | 7/10 |
| 3 | **Etre conforme aux attentes des grands comptes** | "Quand je travaille avec des ETI ou des grands groupes, je veux etre compatible avec leurs exigences (e-facture, Chorus Pro, formats specifiques), pour ne pas perdre le client." | 6/10 |
| 4 | **Appartenir a une communaute de freelances modernes** | "Je veux utiliser un outil reconnu dans ma communaute, pour faire partie des freelances qui ont une gestion professionnelle." | 5/10 |
| 5 | **Se differencier des amateurs** | "Je veux que mes processus de facturation montrent que je suis un professionnel serieux, pas un freelance improvise." | 5/10 |

---

## 3. Pain Points / Gains Mapping

### 3.1 Pain Points classes par severite

| Severite | Pain Point | Description | % de freelances touches (estim.) | Feature(s) qui adressent ce pain |
|----------|-----------|-------------|--------------------------------|--------------------------------|
| **CRITIQUE** | Non-conformite e-facture 2026 | La majorite des freelances ne sont pas encore equipes pour la facturation electronique obligatoire. Risque d'amende et de rejet de factures. | 70% | Conformite PDP native, format Factur-X auto, archivage legal |
| **CRITIQUE** | Mentions obligatoires incorrectes | Erreurs frequentes (oubli mention "EI", mauvais numero TVA, numerotation non sequentielle). Risque : 15 EUR d'amende par mention manquante. | 50% | Moteur de mentions auto selon statut juridique, validation avant envoi |
| **ELEVEE** | Impayes et retards de paiement | Delai moyen de paiement B2B : 44 jours. 30% des freelances subissent des impayes. Impact direct sur la tresorerie. | 30-50% | Relances automatiques, paiement en ligne, suivi temps reel |
| **ELEVEE** | Temps perdu sur la facturation | 4 a 8h/mois sur l'admin facturation/compta. Temps non facturable. A 50 EUR/h, c'est 200-400 EUR/mois de manque a gagner. | 80% | Workflow < 2 min, auto-completion, devis → facture 1 clic |
| **ELEVEE** | Gestion multi-statut impossible | Aucun outil ne permet de gerer portage + micro + societe. Le freelance en transition est force de bricoler. | 10-15% | Multi-entites unifiees, dashboard consolide |
| **MODEREE** | Outils fragmentes | Jonglage entre 3-5 outils (facturation, banque, compta, tableur, email). Perte de temps, erreurs de saisie. | 60% | Plateforme unifiee, integrations natives |
| **MODEREE** | Absence de visibilite financiere | Pas de dashboard consolide. Decouverte du CA reel en fin d'annee. Mauvaises decisions de gestion. | 50% | Dashboard temps reel, alertes seuils, previsionnel |
| **MODEREE** | Pas d'API disponible | Les freelances tech ne peuvent pas automatiser leur facturation ni l'integrer dans leurs outils. | 15-20% | API REST publique, webhooks, SDK |
| **MODEREE** | Export comptable laborieux | Donnees a retravailler avant envoi au comptable. Allers-retours chronophages. | 40% | Export FEC automatique, envoi direct comptable |
| **FAIBLE** | Design des factures rigide | Templates basiques, pas de personnalisation. Factures qui ne refletent pas l'identite du freelance. | 25% | Design studio, templates premium |

### 3.2 Gains attendus classes par importance

| Importance | Gain | Description | Impact business mesurable | Feature(s) qui creent ce gain |
|-----------|------|-------------|--------------------------|------------------------------|
| **CRITIQUE** | Conformite sans effort | Etre en regle avec la loi sans avoir a comprendre la loi. | Evite amendes (jusqu'a 15 EUR/facture). Evite rejet de factures. | PDP native, mentions auto, validation temps reel |
| **CRITIQUE** | Temps recupere | Reduire l'admin de 6h/mois a 1h/mois. | +5h facturables/mois = +250-350 EUR/mois de CA potentiel | Workflow rapide, automatisations, pilote automatique |
| **ELEVEE** | Tresorerie amelioree | Etre paye plus vite, avoir moins d'impayes. | Reduction DSO de 44j a 15j. Tresorerie +30%. | Relances auto, paiement en ligne, suivi temps reel |
| **ELEVEE** | Pilotage financier | Voir en temps reel sa situation financiere et anticiper. | Decisions eclairees (augmentation TJM, refus mission, changement statut). | Dashboard, alertes seuils, previsionnel |
| **MODEREE** | Relation comptable fluide | Collaboration transparente avec l'expert-comptable. | Reduction des allers-retours de 80%. Gain de temps comptable. | Export FEC auto, acces comptable, integrations |
| **MODEREE** | Integrations techniques | Connecter la facturation au reste de son stack. | Automatisation end-to-end. Gain de 2-3h/mois. | API, webhooks, integrations natives |
| **MODEREE** | Image professionnelle | Factures qui impressionnent les clients. | Meilleure perception de professionnalisme. Conversion +10%. | Design studio, templates premium, branding |
| **FAIBLE** | Communaute et support | Ne pas etre seul face aux galeres admin. | Retention, engagement, NPS. | Communaute, chat support, guides interactifs |

### 3.3 Feature-Pain-Gain Matrix

```
FEATURE                           PAIN(S) ADRESSE(S)    GAIN(S) CREE(S)       PRIORITE MVP
-------------------------------------------------------------------------------------------
Conformite e-facture PDP native   P1, P4                G2, G11               MUST-HAVE
Mentions auto selon statut        P1, P4                G2                    MUST-HAVE
Facturation < 2 min               P3                    G1                    MUST-HAVE
Devis → facture 1 clic            P3                    G1                    MUST-HAVE
Suivi paiements temps reel        P2, P6                G3, G4               MUST-HAVE
Relances automatiques             P2, P7                G3                    SHOULD-HAVE
Paiement en ligne integre         P2                    G3                    SHOULD-HAVE
Dashboard CA + seuils             P6                    G4, G6               SHOULD-HAVE
Export FEC automatique             P12                   G5                    SHOULD-HAVE
Templates design premium          P8, P11               G8                    SHOULD-HAVE
API REST publique                  P9                    G7                    SHOULD-HAVE
Gestion TVA integree               P1                    G4                    SHOULD-HAVE
Multi-entites / multi-statut      P5, P10               G10, G12             COULD-HAVE (v2)
Multi-utilisateurs + RBAC         P5                    G9                    COULD-HAVE (v2)
Facturation par jalons             -                     G9                    COULD-HAVE (v2)
Integrations (Notion, Slack...)   P5                    G7                    COULD-HAVE (v2)
Declaration URSSAF assistee       P1                    G6                    COULD-HAVE (v2)
IA categorisation/previsions       P6                    G4                    WON'T-HAVE (v1)
Rapprochement bancaire            P5                    G4                    WON'T-HAVE (v1)
```

---

## 4. USP (Unique Selling Proposition)

### 4.1 USP en une phrase

> **"La facturation API-first pensee pour les freelances tech en France : conforme e-facture 2026 des le jour 1, en moins de 2 minutes, avec une UX que vous n'attendiez pas d'un outil de facturation."**

Version courte (tagline) :

> **"La facturation des freelances qui codent."**

Version alternative (plus large) :

> **"Facturez en 90 secondes. Conforme, intelligent, ouvert."**

### 4.2 Trois differenciateurs cles

#### Differenciateur 1 : API-first, par et pour les devs

**Quoi** : Une API REST complete, documentee en OpenAPI, avec SDK TypeScript, webhooks, et rate limiting transparent. La seule API publique de facturation freelance en France.

**Pourquoi c'est unique** : Aucun concurrent du segment freelance FR ne propose d'API publique. Indy, Tiime, Freebe, Abby, Henrri : zero API. Les freelances tech qui veulent automatiser (ex: "quand je merge un PR, facture automatiquement 1 jour") n'ont aucune option aujourd'hui.

**Proof points** :
- ~400 000 freelances IT/tech actifs en France (30% du marche freelance)
- Les developpeurs sont les premiers a recommander des outils dans leurs communautes (effet viral)
- Stripe a construit un empire en etant "l'outil que les devs recommandent"
- Potentiel de devenir la reference dans les communautes Slack/Discord de devs freelances

#### Differenciateur 2 : Conformite e-facture 2026 native et gratuite

**Quoi** : Conformite PDP (Plateforme de Dematerialisation Partenaire) ou connecteur PPF integre des le lancement. Format Factur-X automatique. Archivage legal 10 ans. Tout ca dans le plan gratuit.

**Pourquoi c'est unique** : La plupart des outils doivent ajouter la conformite e-facture comme un patch. Nous la construisons comme fondation. Et surtout : on l'offre gratuitement, la ou certains concurrents la reservent aux plans payants ou n'ont pas encore le statut PDP.

**Proof points** :
- Obligation reception e-facture : sept. 2026 (dans 6 mois)
- Obligation emission micro : sept. 2027 (dans 18 mois)
- 70% des micro-entrepreneurs ne sont pas encore equipes (source : BPI France)
- QuickBooks a quitte la France fin 2023, laissant un vide
- 101 PDP agreees mais tres peu orientees freelance

#### Differenciateur 3 : UX premium, pas UX comptable

**Quoi** : Une experience utilisateur au niveau des meilleurs produits SaaS modernes (Linear, Notion, Vercel). Dark mode. Raccourcis clavier. Animations fluides. Design system soigne. Experience mobile native. Onboarding en 60 secondes.

**Pourquoi c'est unique** : Les outils de facturation existants ont soit une UX "annees 2010" (Henrri, Evoliz, Facture.net), soit une UX correcte mais pensee "comptabilite" (Indy, Tiime, Pennylane). Aucun n'offre une experience "developer tool" a la hauteur des attentes des freelances tech et creatifs.

**Proof points** :
- Persona Thomas : "Les outils existants sont soit trop basiques (pas d'API), soit trop comptable (interface lourde)"
- Persona Manon : "Dealbreaker : interface moche ou complexe"
- Le design est un critere de decision majeur pour les freelances creatifs et tech
- Freebe est le seul a avoir une bonne UX, mais n'a pas d'API ni de plan gratuit
- Opportunite de positionner la marque comme "le Stripe de la facturation freelance"

### 4.3 Matrice de positionnement vs concurrence

```
                    UX PREMIUM / MODERNE
                          ^
                          |
            [NOUS]        |
              ●           |    Freebe
                          |
                          |
  API-FIRST  -------------+------------- NO API
  OUVERT                  |              FERME
                          |
              Indy        |    Abby
              Tiime       |    Henrri
                          |
                          |    Facture.net
                          |    Evoliz
                          |
                    UX TRADITIONNELLE
```

### 4.4 Pourquoi nous et pas eux ?

| "Pourquoi pas..." | Notre reponse |
|-------------------|---------------|
| **Tiime** (gratuit, 200k users) | Tiime est construit pour alimenter son reseau de cabinets comptables. Pas d'API. UX correcte mais pas premium. Zero focus tech/dev. |
| **Indy** (tout-en-un, 90k users) | Indy veut etre la banque + compta + facturation. C'est beaucoup de choses moyennes. Pas d'API. Interface dense. Prix eleve en societe (59 EUR/mois). |
| **Freebe** (bonne UX, specialise freelance) | Freebe a une bonne UX mais pas de plan gratuit (15 EUR/mois), pas d'API, et des ressources limitees (pas de levee de fonds). Ne peut pas suivre sur le terrain de l'API et de l'ecosysteme. |
| **Abby** (micro-entrepreneurs, URSSAF) | Abby est bien pour les micro-entrepreneurs simples. Pas de vision multi-statut. Pas d'API. Plan gratuit tres limite. |
| **Pennylane** (licorne, complet) | Pennylane vise les PME et les cabinets. Trop cher (14-79 EUR/mois) et trop complexe pour un freelance solo. Pas le meme segment. |

---

## Synthese strategique

### La proposition de valeur en 3 niveaux

**Niveau 1 — Table stakes (plan Gratuit)** : Facturation conforme, devis, e-facture 2026 native, export PDF/CSV. Cible : acquisition massive, tous freelances.

**Niveau 2 — Valeur ajoutee (plan Pro a 9,90 EUR/mois)** : Relances auto, paiement en ligne, dashboard financier, alertes seuils, export FEC, gestion TVA. Cible : freelances actifs qui facturent > 500 EUR/mois.

**Niveau 3 — Differenciateur (plan Business a 19,90 EUR/mois)** : API REST, webhooks, integrations, multi-entites, multi-utilisateurs, IA, facturation par jalons. Cible : freelances tech, consultants seniors, micro-agences.

### Metriques de validation de la proposition de valeur

| Metrique | Cible a 6 mois | Comment mesurer |
|----------|----------------|-----------------|
| Inscription (plan gratuit) | > 5 000 | Analytics signup |
| Conversion gratuit → Pro | > 5% | Cohorte mensuelle |
| Conversion Pro → Business | > 10% des Pro | Cohorte mensuelle |
| NPS | > 50 | Survey in-app trimestrielle |
| Temps moyen par facture | < 120 secondes | Telemetrie produit |
| DSO moyen des utilisateurs Pro | < 20 jours | Donnees paiements |
| Taux de churn mensuel Pro | < 4% | Stripe metrics |

---

*Document produit le 2026-03-09 — Module 0.2 (sous-taches 0.2.1 a 0.2.4)*
*Sources : docs/market-analysis.md, docs/competitors.md, docs/personas.md*
