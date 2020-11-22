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
    let nombre = 20; //Number(prompt("saisir un chiffre"))
    console.log(nombre);

    //calculer l'année de naissance
    //condition ternaire
    nombre % 2 == 0 ? console.log(`chiffre paire ${nombre}`) : console.log(`chiffre impaire ${nombre}`);
    let annee = 2020;
    let ages = 53;
    console.log(`Vous êtes né(e) ${annee - ages}`);

    /* exemple dynamique */

    /*
        condition  si sinon alors
        si code alors afficher code ou sinon message
    */

    let user = String(prompt("Saisissez votre prénom")); //méthode => fonction
    //console.log(user)
    let code = parseInt(prompt("Saisir le code"));
    let result = document.querySelectorAll("p"); //dom
    //document.getElementsByTagName("p")[0], document.getElementsByClassName(".name")[0], document.getElementById("#region"), document.getElementsByName("user")[0]
    console.log(result);

    if (isNaN(code) || !code || code === undefined) {
        alert('Saisissez un chiffre ou remplir le champs');
        document.location.reload();
    } else if (!user || !isNaN(user)) {
        alert('Saisissez des lettres ou remplir le champs');
        document.location.reload();
    } else {
        console.log(`Votre code ${code} Votre ${user}`);
        result[0].innerHTML += `Votre code est ${code}<br>Votre prénom est ${user}`;
    }
    console.log(result[0].childNodes[0].nodeValue); //result[0].innerText

});