class Eleve extends Personne {
    constructor(nom,prenom,age,sexe,job,passion) {
        super(nom,prenom,age,sexe,job);
        this.passion = passion;
    }
}

var eleve1 = new Eleve("Priolet","Pascal","17","Male","rien","Anarchie");
var eleve2 = new Eleve("Lelievre","Antoine","16","Male","rien", "Informatique")

console.log(eleve1);
console.log(eleve2);