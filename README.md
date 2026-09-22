# TP2 — Canvas & animation (Webpack)

TP portant sur la manipulation du `<canvas>` HTML5 : dessin d'une balle et mise en place d'une animation, avec une chaîne de build **Webpack + Babel**.

## Structure du projet

```
tp2/
├── src/
│   ├── index.html
│   ├── scripts/
│   │   ├── main.js         # point d'entrée : initialise le canvas et les écouteurs
│   │   ├── ball.js         # classe Ball : dessin d'une balle sur le canvas
│   │   ├── animation.js    # classe Animation : boucle d'animation
│   │   └── assets/
│   ├── style/
│   │   └── style-canvas.css
│   ├── html/
│   │   └── exemple-canvas.html
│   └── images/
├── webpack.config.js
├── .babelrc
└── package.json
```

## Prérequis

- [Node.js](https://nodejs.org/) (version LTS recommandée) et npm

## Installation

Depuis le dossier `tp2/` :

```bash
npm install
```

## Commandes disponibles

| Commande | Effet |
|---|---|
| `npm run build` | Génère le bundle de production dans `dist/` |
| `npm run watch` | Reconstruit automatiquement le bundle à chaque modification |
| `npm run dev-server` | Lance un serveur de développement avec rechargement à chaud (**recommandé pendant le développement**) |

Exemple pour développer :

```bash
npm run dev-server
```

Puis ouvrez l'URL indiquée dans le terminal (par défaut `http://localhost:8080`).

> ⚠️ Le résultat ne se consulte **jamais** directement via `src/index.html`. Le code source est dans `src/`, mais c'est le bundle généré dans `dist/` (ou servi par `dev-server`) qui doit être ouvert. Le dossier `dist/` n'est pas versionné dans Git puisqu'il est régénérable à partir de `src/`.

## Contenu de l'exercice

- **`ball.js`** — classe représentant une balle et sa méthode `draw` pour la dessiner sur le canvas.
- **`animation.js`** — classe gérant une boucle d'animation (démarrage/arrêt) de la balle sur le canvas.
- **`main.js`** — point d'entrée : récupère le canvas, instancie `Ball`, et attache les écouteurs d'évènements sur le bouton de démarrage/arrêt.

## Vérifier que tout fonctionne

Après `npm run build` ou `npm run dev-server`, ouvrez la page générée et vérifiez dans la console (`Ctrl+Shift+K`) la présence du message :

```
le bundle a été généré
```
