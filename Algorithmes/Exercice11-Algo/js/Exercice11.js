//variables
var tableau = [15, 3, 56, 1, 25];

var somme = 0;

var valeurMax = tableau[0];
var valeurMin = tableau[0];

// somme
for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
}

console.log("Somme : "+somme);

//plus grande valeur (max)
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > valeurMax) {
        valeurMax = tableau[i];
    }
}

console.log("Valeur Max : "+valeurMax);

//plus petite valeur (min)
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < valeurMin) {
        valeurMin = tableau[i];
    }
}

console.log("Valeur Min : "+valeurMin);