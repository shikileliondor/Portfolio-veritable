# CODEX.md — Beyam Studio

## 1. Projet

Tu travailles sur le site vitrine et portfolio officiel de **Beyam Studio**, une jeune startup digitale.

Slogan :

**« De l'idée à la production »**

Le site doit présenter Beyam Studio comme un studio moderne capable de transformer une idée en produit numérique concret.

L'objectif principal est de :

* présenter Beyam Studio ;
* présenter ses services ;
* mettre en valeur ses réalisations ;
* rassurer les prospects ;
* permettre à un client potentiel de prendre contact rapidement.

Ce n'est PAS un portfolio personnel de développeur.

---

## 2. Stack technique

Utiliser exclusivement :

* React
* Vite
* Tailwind CSS
* Motion for React
* Lucide React
* JavaScript
* Vercel pour le déploiement

Imports Motion :

```jsx
import { motion } from "motion/react";
```

Ne pas installer de bibliothèque supplémentaire sans nécessité réelle.

Ne pas ajouter de backend pour la V1.

---

## 3. Direction artistique

Le design doit être :

* moderne ;
* premium ;
* professionnel ;
* technologique ;
* minimaliste ;
* responsive ;
* fluide ;
* crédible pour une startup digitale.

Éviter absolument un rendu générique ressemblant à un template IA.

### Couleurs

L'identité du site doit reprendre les couleurs du logo Beyam Studio :

* Bleu nuit : couleur principale
* Jaune / doré : couleur d'accent principale
* Bleu turquoise : accent secondaire
* Blanc / blanc cassé : arrière-plans clairs
* Gris très léger : séparateurs et textes secondaires

Le jaune doit être utilisé avec modération.

Le bleu nuit doit rester dominant.

---

## 4. Logo

Le logo officiel Beyam Studio doit apparaître dans la navigation et éventuellement dans le footer.

Ne pas recréer ou modifier inutilement le logo.

Prévoir une taille adaptée desktop et mobile.

---

## 5. Typographie

Utiliser une typographie moderne et lisible.

Les titres doivent avoir beaucoup d'impact visuel.

Utiliser :

* gros titres ;
* bon contraste ;
* suffisamment d'espace blanc ;
* hiérarchie typographique claire.

Éviter les textes trop petits.

---

## 6. Structure du site

Créer un site one-page avec les sections suivantes :

### Navbar

Contenu :

* Logo Beyam Studio
* Accueil
* Services
* Réalisations
* À propos
* Contact

Ajouter un bouton CTA :

**Parler de votre projet**

Navbar responsive avec menu mobile.

La navbar peut devenir légèrement transparente / floutée pendant le scroll.

---

## 7. Hero

Le Hero doit immédiatement communiquer la proposition de valeur.

Titre principal :

**DE L'IDÉE À LA PRODUCTION.**

Texte possible :

**Nous transformons vos idées en expériences digitales modernes, performantes et utiles.**

CTA principal :

**Découvrir nos réalisations**

CTA secondaire :

**Parler de votre projet**

Le Hero doit être visuellement fort sans être surchargé.

Créer éventuellement un élément graphique inspiré :

* de la technologie ;
* des circuits électroniques ;
* de la créativité ;
* du concept d'idée qui devient produit.

Ne pas utiliser un gros stock photo générique.

---

## 8. Services

Créer une section :

**Nos expertises**

Services principaux :

### Développement Web

Sites vitrines, plateformes web et solutions professionnelles.

### Applications Mobile

Applications modernes et adaptées aux besoins des utilisateurs.

### UI / UX Design

Interfaces modernes, intuitives et centrées sur l'expérience utilisateur.

### Solutions sur mesure

Conception de solutions digitales adaptées aux besoins spécifiques des entreprises et organisations.

Afficher les services sous forme de cartes élégantes.

Utiliser Lucide React pour les icônes.

---

## 9. Réalisations

Créer une section :

**Réalisations sélectionnées**

Les projets doivent être au centre du portfolio.

Chaque projet doit pouvoir afficher :

* image ;
* nom ;
* courte description ;
* catégorie ;
* technologies ;
* lien vers le site ;
* éventuellement lien GitHub.

Les données doivent être séparées de l'interface.

Créer :

```text
src/data/projects.js
```

Ne pas coder directement tous les projets dans `Projects.jsx`.

Prévoir notamment des projets comme :

* IvoirCuisson
* RevApp
* RéviseToutCI
* autres projets Beyam Studio

Créer des cartes de projets modernes avec une grande image.

Au hover :

* légère augmentation de l'image ;
* apparition d'informations ;
* animation subtile.

Pas d'animations agressives.

---

## 10. Processus

Créer une section expliquant la méthode Beyam Studio.

Titre :

**De l'idée à la production**

Étapes :

1. Idée
2. Analyse
3. Conception
4. Design
5. Développement
6. Mise en production

Présenter cela sous forme de timeline ou de progression visuelle.

---

## 11. À propos

Créer une section courte expliquant Beyam Studio.

Idée de contenu :

Beyam Studio accompagne entrepreneurs, entreprises et organisations dans la conception et la réalisation de produits numériques modernes.

Mettre davantage l'accent sur :

* résolution de problèmes ;
* simplicité ;
* qualité ;
* performance ;
* innovation utile.

Éviter les grandes phrases prétentieuses comme :

« Nous sommes les meilleurs experts du digital ».

---

## 12. Technologies

Présenter quelques technologies utilisées par le studio.

Exemples :

* React
* Laravel
* Flutter
* Node.js
* Tailwind CSS
* MySQL
* Git
* GitHub

Ne pas utiliser de barres de compétences du type :

```text
React 95 %
PHP 90 %
CSS 87 %
```

Ces pourcentages n'ont aucune valeur réelle.

---

## 13. Contact

Créer une section CTA forte :

**Une idée en tête ?**

Sous-titre :

**Transformons-la en produit.**

Bouton principal :

**Démarrer un projet**

Prévoir les moyens de contact :

* WhatsApp
* Email
* LinkedIn
* GitHub

Pas besoin de backend pour la première version.

Le bouton WhatsApp peut utiliser un lien direct `wa.me`.

---

## 14. Footer

Afficher :

* logo ;
* navigation rapide ;
* réseaux sociaux ;
* slogan ;
* copyright dynamique.

Exemple :

```jsx
© {new Date().getFullYear()} Beyam Studio.
```

---

## 15. Architecture

Organiser le projet proprement.

```text
src/
├── assets/
│   ├── logo/
│   ├── projects/
│   └── images/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── ServiceCard.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Process.jsx
│   ├── About.jsx
│   ├── Technologies.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── data/
│   ├── projects.js
│   └── services.js
│
├── App.jsx
├── main.jsx
└── index.css
```

Créer des composants réutilisables.

Éviter les fichiers React énormes.

---

## 16. Responsive

Le site doit être parfaitement exploitable sur :

* smartphone ;
* tablette ;
* ordinateur portable ;
* grand écran.

Développer mobile-first.

Tester particulièrement :

* navbar ;
* Hero ;
* grille des services ;
* cartes projets ;
* grandes typographies ;
* footer.

Aucun scroll horizontal ne doit apparaître.

---

## 17. Animations

Utiliser Motion avec modération.

Animations autorisées :

* fade-in ;
* slide léger ;
* stagger ;
* apparition au scroll ;
* hover des cartes ;
* animation légère du Hero.

Exemple :

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

Respecter :

```css
prefers-reduced-motion
```

Éviter :

* éléments qui tournent constamment ;
* effets 3D inutiles ;
* particules partout ;
* curseurs personnalisés gênants ;
* animations trop longues.

---

## 18. Qualité du code

Le code doit être :

* lisible ;
* simple ;
* maintenable ;
* bien structuré ;
* sans duplication inutile.

Utiliser des noms explicites.

Exemple :

```jsx
<ProjectCard />
```

plutôt que :

```jsx
<Card1 />
```

Ne pas sur-engineerer l'application.

---

## 19. UX

Chaque section doit avoir une fonction.

Toujours se poser la question :

**Est-ce que cet élément aide réellement un visiteur à comprendre Beyam Studio ou à contacter le studio ?**

Si non, ne pas l'ajouter.

Les CTA doivent être visibles.

Le visiteur doit comprendre en moins de quelques secondes :

1. qui est Beyam Studio ;
2. ce que Beyam Studio réalise ;
3. quels projets ont déjà été réalisés ;
4. comment contacter le studio.

---

## 20. Performance

Optimiser :

* images ;
* animations ;
* chargement ;
* bundle JavaScript.

Utiliser WebP ou AVIF lorsque pertinent.

Ajouter `loading="lazy"` aux images qui ne sont pas immédiatement visibles.

Éviter les dépendances lourdes.

Le site doit obtenir de bons résultats Lighthouse.

---

## 21. SEO

Configurer correctement :

* `<title>`
* meta description
* Open Graph
* favicon
* langue française
* titres H1/H2/H3 cohérents
* textes alternatifs des images

Titre recommandé :

```text
Beyam Studio — De l'idée à la production
```

Description :

```text
Beyam Studio conçoit des sites web, applications et solutions digitales modernes pour entreprises, organisations et entrepreneurs.
```

---

## 22. Vercel

Le projet doit pouvoir être déployé directement sur Vercel.

Avant toute livraison :

```bash
npm run build
```

doit fonctionner sans erreur.

Ne jamais considérer une tâche comme terminée si le build échoue.

---

## 23. Git

Utiliser des commits clairs.

Exemples :

```text
feat: create hero section
feat: add projects section
feat: add responsive navbar
style: improve mobile layout
fix: resolve navigation issue
refactor: extract project card component
```

Ne pas faire un énorme commit contenant toute l'application lorsqu'il est possible de travailler progressivement.

---

## 24. Règles importantes pour Codex

Avant de modifier plusieurs fichiers :

1. analyser l'architecture existante ;
2. vérifier les dépendances déjà installées ;
3. réutiliser les composants existants lorsque pertinent ;
4. éviter les réécritures inutiles.

Ne pas :

* supprimer une fonctionnalité existante sans raison ;
* installer une dépendance sans justification ;
* inventer des informations sur Beyam Studio ;
* ajouter de faux clients ;
* ajouter de faux témoignages ;
* ajouter de fausses statistiques ;
* inventer des années d'expérience ;
* inventer des membres d'équipe.

Si une information métier manque, utiliser un placeholder clairement identifiable ou demander l'information.

---

## 25. Priorité de développement

Développer dans cet ordre :

1. Structure générale
2. Design system
3. Navbar
4. Hero
5. Services
6. Réalisations
7. Processus
8. À propos
9. Technologies
10. Contact
11. Footer
12. Responsive
13. Animations
14. SEO
15. Optimisation
16. Build final

L'objectif est d'obtenir un site professionnel rapidement, puis de l'améliorer progressivement.

---

## Principe directeur

Le portfolio Beyam Studio doit transmettre :

**Créativité + technologie + sérieux + capacité à livrer.**

Le design doit sembler conçu par un studio digital compétent, pas généré à partir d'un template générique.
