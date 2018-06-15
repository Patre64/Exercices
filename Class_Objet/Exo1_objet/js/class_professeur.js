class Professeur extends Personne {
    constructor(nom,prenom,age,sexe,matiere) {
        super(nom,prenom,age,sexe,"prof");
        this.matiere = matiere;
    }
}

var profMath = new Professeur("Priolet","Pascal","52","Male","math");
var profFrancais = new Professeur("Lelievre","Antoine","20","male","francais")
var profPhysique = new Professeur("Einstein","Albert","90","male","physique")
console.log(profMath);
console.log(profFrancais);
console.log(profPhysique);
