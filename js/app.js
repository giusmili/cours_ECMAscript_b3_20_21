/* 
fonction principale js 
DOM (Document Object Model)=>document html
*/
//document = objet | addEventListener()=> fonction {}

document.addEventListener('DOMContentLoaded', () => {
    //fonction
    console.log("DOM Chargé");
    /* en ES le mot clé pour designer une variable est "let"*/
    let valeurIntier = Number(20); //intier
    valeurIntier = valeurIntier - 10;
    /* cela vaut combien? */
    console.log(`${valeurIntier} ${typeof valeurIntier}`);
    const version = 5.7; //reel ou double
    let bouton = Boolean(false); //booléan
    console.log(typeof bouton);
    let lang = "fr"; //string
    console.log(typeof lang);
    console.log(typeof parseFloat(version));
    console.log(lang.length);

    //comparer les types
    console.log(false || true);
    console.log("five" * 2); //affiche NaN Not an Number
    console.log(false == 0); //true
    let date = 2020;
    let age = 21;
    console.log(date === age); //affiche false
    console.log(date !== age); //affiche true
    /* 
    liste des opérateurs
    + additionner
    - sous
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
    let nombres = 10;
    console.log(nombres % 2); //résultat
    console.log(null == undefined);
    let nombre = 20;
    console.log(nombre);
    //calculer l'année de naissance
    nombre % 2 == 0 ? console.log("chiffre paire " + nombre) : console.log("chiffre impaire " + nombre);
    let annee = 2020;
    let ages = 53;
    console.log("Vous êtes né(e) " + annee - ages);
});