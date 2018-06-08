function nb_aleatoire(min, max) {
    var nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
}

var nb = nb_aleatoire(1, 10);  // nb a deviner
var saisie;
var cpt = 0;    // nb de coups

do {
    saisie = prompt("Le nombre à deviner est compris entre 1 et 10.");
    cpt = cpt + 1;

    // message a afficher au prochain tour :

    if (saisie > nb)
        alert("C'est moins");

    else if (saisie < nb)
        alert("C'est plus");

} while (saisie != nb);

alert("Bravo, tu as gagné en " + cpt + " coups !");

