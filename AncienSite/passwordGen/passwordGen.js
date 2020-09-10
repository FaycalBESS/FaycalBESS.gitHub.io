let champDeSaisie;

function generatePassword() {
    champDeSaisie = document.getElementById("password"); // initialiser la variable déclarée avec un élément du DOM
    let char = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN1234567890!@#$%^&*()_+?<>:()[]";
    let pwdLength = prompt("Quelle longueur pour votre mot de passe");
    pwdLength = parseInt(pwdLength); // au cas ou qqn s'amuse à mettre un nombre décimal 👍
    let password = "";
    for (let i = 0; i < pwdLength; i++) { // boucle pour predndre aléatoirement des caractères de la variable char
        let nbrAleatoire = Math.floor(Math.random() * char.length);
        password += char.substring(nbrAleatoire, nbrAleatoire + 1);
    }
    champDeSaisie.value = password; // remplir le contenu du champ ave la valeur de la variable password
}

function cpyPassword() {
    champDeSaisie.focus(); // pour aller dans le champs input et mettre le cursor à l'intérieur
    champDeSaisie.select(); // pour sélectionner son contenu
    champDeSaisie.setSelectionRange(0, 999); // comme j'ai défini la propriété user-select à none, il faut lui dire quoi selectionner 
    document.execCommand('copy'); // pour copier le contenu

}