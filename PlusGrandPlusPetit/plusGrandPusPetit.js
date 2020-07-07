function jeu() {
    let tentatives = 0;
    let min = +prompt("insérer une valeur min");
    let max = +prompt("insérer une valeur max");
    let nbrAleatoire = Math.round(Math.random() * (max - min) + min);
    let tentative = +prompt(
        "choisis un nombre allant de " + min + " à " + max
    );

    while (tentative !== nbrAleatoire) {
        if (tentative < nbrAleatoire) {
            tentatives += 1;
            tentative = +prompt("C'est plus grand, ré-essayes");
        } else {
            tentatives += 1;
            tentative = +prompt("C'est plus petit, ré-essayes");
        }
    }
    tentatives += 1;
    alert(
        "félicitations, le nombre à deviner était le " +
        nbrAleatoire +
        " tu as réussi à le deviner en " +
        tentatives +
        " tentatives"
    );
}