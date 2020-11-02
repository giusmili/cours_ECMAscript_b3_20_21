# Cours ECMAScript et installation de l'environnement de travail **Babel**


1. vérifier la version npm
2. puis npm init
3. npm install --save-dev babel-cli babel-preset-env

Ajouter dans le fichier jSon la ligne de code qui suit : 
**"build": "babel --no-babelrc src -w -d js --preset=env"**

Puis cibler le dossier "SRC" et commande :npm run build

Nota bene : pour installer le CLI faire d'abord **npm init** pour le package.json

