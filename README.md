# Installation et Utilisation

## Prérequis
- **Node.js** et **npm** doivent être installés sur votre système. [Télécharger Node.js](https://nodejs.org/)

## Étapes d'installation et de démarrage

### Étape 1 : Installation des dépendances
Installez les dépendances nécessaires en exécutant la commande suivante :
```bash
npm install
```

### Étape 2 : Installer Postcss si besoin

```bash
npm i postcss
```

### Étape 3 : Compilation du projet
Pour compiler le projet, utilisez la commande :

```bash
npm run build
```

Cela génère une version optimisée du projet, prête pour la production.

### Étape 3bis : Surveillance et compilation en continu
Pour surveiller les changements de fichiers et compiler automatiquement pendant le développement :

```bash
npm run watch
```

Cette commande est utile pour un développement actif, car elle reconstruit les fichiers à chaque modification.