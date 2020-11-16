# Cours ECMAScript et installation de l'environnement de travail **Babel**


1. vérifier la version npm
2. puis npm init
3. npm install --save-dev babel-cli babel-preset-env

Ajouter dans le fichier jSon la ligne de code qui suit : 
**"build": "babel --no-babelrc src -w -d js --preset=env"**

Puis cibler le dossier "SRC" et commande :npm run build

Nota bene : pour installer le CLI faire d'abord **npm init** pour le package.json

---
## Les opérateurs en programmation
```js
     /* 
    liste des opérateurs
    + additionner
    - soustraire
    ++ incrementer
    -- décrementer
    / diviser
    == strictement égale
    = affectation de valeur
    += ajouter une valeur
    -= enlever
    || ou
    && et
    >
    <
    >=
    <=
    % modulo
    */
```
## Exemple js
```js
    let nombres = 10;
   console.log(nombres%2) //résultat
   console.log(null == undefined)
   let nombre= 20
   console.log(nombre)
   //calculer l'année de naissance
   nombre%2 == 0 ? console.log(`chiffre paire ${nombre}`) :        console.log(`chiffre impaire ${nombre}`)
   let annee = 2020
   let ages = 53
   console.log(`Vous êtes né(e) ${annee - ages}`)
```
