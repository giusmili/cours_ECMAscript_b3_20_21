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
});