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
## Exemple js. Opérateurs utilisés:  _=, ==, - and %_
```js
    let nombres = 10;
   console.log(nombres%2) //résultat
   console.log(null == undefined)
   let nombre= 20
   console.log(nombre)

   //calculer l'année de naissance
   nombre%2 == 0 ? console.log(`chiffre paire ${nombre}`) : console.log(`chiffre impaire ${nombre}`)
   //condition ternaire
   let annee = 2020
   let ages = 53
   console.log(`Vous êtes né(e) ${annee - ages}`)
```
---
## Les tableaux
* Tableaux de base
* Concept de tableaux d'objet
* Tableaux multidimensionnels

## Exemple en code:

```js
    let lang = ["html", "css", 2020] //array base

    let ensemble = [...lang,...dates] //spread operator

    ensemble.push(x)//add table element
    console.table(ensemble) // print out

    // iteration init, condition and test

    let put_print = String("") //ref variable in for
    for(i = 0; i < ensemble.length; i++){ 
        console.log(`${i} : ${ensemble[i]}`)
        //elements.innerHTML+=`<li>${ensemble[i]}</li>`
        put_print += `<li>${ensemble[i]}</li>`
    }
    elements.innerHTML=put_print 
  
   

    //while method
    let compt = 0
        while(compt < ensemble.length){
           
            console.log(ensemble[compt])
            compt ++
           
        }

    //foreach method
    ensemble.forEach((cle, valeur) =>{
        console.log(valeur+" "+cle )
    })

    //array x,y
    const persons =[
            {
                nom : "Berner Lee",
                prenom : "Tim"
            },
            {
                nom : "Each",
                prenom: "Branden"
            }
        ]
    console.table(persons[1].prenom)
    
    for(i = 0; i < persons.length; i++){
        console.log(`${persons[i].nom} ${persons[i].prenom}`)
    }
    persons.forEach((cle) =>{
        console.log(cle.nom+' '+cle.prenom)
    })

    for(let key in persons){
        console.log(key+' '+persons[key].nom)
    }

})
```
## Utilisation logique des vh vw
* VH : 1/100e de la hauteur du viewport
* VW : 1/100e de la largeur du viewport