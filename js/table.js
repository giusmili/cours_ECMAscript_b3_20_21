document.addEventListener("DOMContentLoaded", () => {
    console.log('loaded!!!');
    //array x,y
    let table_classement, dates, print_out;
    const classement = [{
        id_classement: 1,
        language: "Python",
        type: "Web application"

    }, {
        id_classement: 2,
        language: "C++",
        type: "Application"

    }, {
        id_classement: 3,
        language: "Python",
        type: "Web application"

    }, {
        id_classement: 4,
        language: "PHP",
        type: "Web application"

    }, {
        id_classement: 5,
        language: "C",
        type: "Application"

    }];
    console.table(classement);
    table_classement = document.querySelector("table > tbody");
    classement.forEach(element => {
        // test d'affichage
        console.log(`
                    ${element.id_classement}
                    ${element.language}
                    ${element.type}
                    `);
        table_classement.innerHTML += `
                                    <tr>
                                        <td>
                                            ${element.id_classement}
                                        </td>
                                        <td>
                                            ${element.language}
                                        </td>
                                        <td>
                                            ${element.type}
                                        </td>
                                    </tr>
                                    `;
    });
    /* la date du copy */
    dates = new Date();
    console.log(dates.getFullYear());
    print_out = document.querySelector("footer > p");
    console.log(print_out.innerText);
    print_out.innerText += ` ${dates.getFullYear()}`;
});