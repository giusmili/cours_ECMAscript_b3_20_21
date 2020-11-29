document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    /* tableaux */
    let x = 0;
    let lang = ["html", "css", 2020]; //tab base
    console.table(lang);
    //les itérations dans un tableau
    let dates = [1990, 1998, "année"];

    let ensemble = [...lang, ...dates]; //spread opérateur

    ensemble.push(x); //ajouter un élément
    console.table(ensemble);

    // itération init, condition et un test

    let i;
    let elements = document.querySelector("ul");

    let put_print = String(""); //variable de référence

    for (i = 0; i < ensemble.length; i++) {
        //méthode for
        console.log(`${i} : ${ensemble[i]}`);
        //elements.innerHTML+=`<li>${ensemble[i]}</li>`
        put_print += `<li>${ensemble[i]}</li>`;
    }

    elements.innerHTML = put_print; //variable de référence


    //méthode while
    let compt = 0;
    while (compt < ensemble.length) {

        console.log(ensemble[compt]);
        compt++;
    }

    //méthode foreach
    ensemble.forEach((cle, valeur) => {
        console.log(valeur + " " + cle);
    });

    //tableau multidimensionnel
    const persons = [{
        nom: "Berner Lee",
        prenom: "Tim"
    }, {
        nom: "Each",
        prenom: "Branden"
    }];
    console.table(persons[1].prenom);

    for (i = 0; i < persons.length; i++) {
        console.log(`${persons[i].nom} ${persons[i].prenom}`);
    }
    persons.forEach(cle => {
        console.log(cle.nom + ' ' + cle.prenom);
    });

    for (let key in persons) {
        console.log(key + ' ' + persons[key].nom);
    }
});