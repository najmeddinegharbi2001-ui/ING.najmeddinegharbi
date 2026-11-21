# Portfolio - Ingénieur Génie Civil

Site statique du portfolio de Najmeddine Gharbi. Ce dossier est autonome et reste séparé du portfolio déjà présent à la racine de `Portfolio-main`.

## Où modifier le site

- `index.html` : contenu des sections, titres, liens et cartes de projets.
- `css/styles.css` : styles CSS personnalisés.
- `js/tailwind.config.js` : couleurs et polices Tailwind.
- `js/project-data.js` : détails affichés dans les fenêtres des projets.
- `js/i18n.js` : traductions de l’interface et des détails de projets en français et en anglais.
- `js/main.js` : menu mobile, filtres, fenêtres modales, téléchargement du CV et formulaire.
- `assets/images/` : photos de profil, galerie, projets, illustrations et logos techniques.
- `assets/images/about-gallery/` : photos utilisées dans la galerie « À propos ».
- `assets/images/construction-background/` : illustrations décoratives du fonds du portfolio.
- `assets/images/software-logos/` : logos utilisés dans la section logiciels.
- `assets/cv.pdf` et `assets/cv-en.pdf` : versions française et anglaise du CV, choisies selon la langue du site.

Le thème visuel du portfolio est « Blueprint Classique » : fonds bleu ingénieur, accents jaune chantier, grilles de plan et bordures techniques pointillées.

Les textes français des cartes de projets sont dans `index.html`; les détails français des fenêtres modales sont dans `js/project-data.js`, et leurs traductions anglaises dans `js/i18n.js`.
La langue de la page, y compris les détails des projets, est choisie automatiquement selon les langues préférées du navigateur (anglais ou français; français par défaut). Le sélecteur FR/EN dans l’en-tête permet de la changer manuellement.

## Formulaire de contact

Le formulaire utilise FormSubmit pour envoyer les messages à `najmeddine.gharbi2001@gmail.com` depuis GitHub Pages. Au premier envoi, FormSubmit envoie un e-mail de confirmation à cette adresse; confirmez-le pour activer la réception des formulaires. Le service protège aussi le formulaire avec un champ anti-spam invisible.

## Prévisualiser

Ouvrir `index.html` avec l’extension **Live Server** de VS Code. Tailwind CSS et la police Inter sont chargés depuis Internet.
