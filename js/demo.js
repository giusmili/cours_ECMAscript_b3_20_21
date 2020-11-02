document.addEventListener("DOMContentLoaded", () => {
    /*function générale*/
    console.log("hello");
    //window.alert("hello");
    // type de variable
    let nom, code, fonction;
    nom = String("Javascript");
    /*nom = String("test")*/
    console.log(typeof nom, `la chaine ${nom}`);
    code = 999;
    console.log(typeof code);
    fonction = new Boolean(true); //variable = valeur
    console.log(typeof fonction);
    let tab = ["html", "css", 2019];
    let dict = [{}];
    console.table(tab);
    console.log(typeof tab);
    console.log(dict);
    let version = 1.5555555555555555555555555555555555555555;
    console.log(typeof version);
    console.log(version.toFixed(4)); //parseInt,parseFlaot,toFixed
    /*
        addition +
        sous -
        mult *
        =
        ? opérateur conditionnel
        -= décrementer
        += ajouter
        ++ +1
        --
        <
        >
        <=
        >=
        !=
        !
        &&
        ||
        ==
        ===
        //condition if else if else
        condition ternaire
        test ? message : autre message
        if(valeur){
            ok 
                else 
            ko
        }
    
    
    */
    !isNaN(code) ? console.log("vrai") : console.log("faux");
    let el = document.querySelector('head > title');
    console.log(el.childNodes[0].nodeValue);
    let parent = document.getElementsByTagName("head");
    console.log(parent[0].childNodes);
    let bodyElement = document.querySelectorAll("body");
    console.log(bodyElement[0].childNodes.length);
    let titre = " Javascript and html";
    el.innerText += titre;
    let titrePricipale = document.querySelector("h1");
    titrePricipale.innerHTML += " <span>Hello</span>";
    let elementScript = document.querySelector("script");

    console.log(elementScript.getAttribute('src'));

    /*event*/
    document.addEventListener("click", () => {
        alert(document.contentType);
        elementScript.setAttribute('src', './js/demo.js');
    });
    let texte = document.querySelector("code");
    texte.addEventListener("click", event => {
        event.stopPropagation();
        texte.style.backgroundColor = "red";
    });
    /* function */
    // function all(){
    //     /*inst*/
    // }
    let all = n => {
        return n * n;
    };
    let result = all(4);
    console.log(result);
});