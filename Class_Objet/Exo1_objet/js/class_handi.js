class Handi extends Eleve {
    constructor(nom,prenom,age,sexe,job,passion,handicap) {
        super(nom,prenom,age,sexe,job,passion);
        this.handicap = handicap;
    }
}

var handi1 = new Handi("Priolet","Pascal","17","Male","rien","Anarchie","moteur");
var handi2 = new Handi("Lelievre","Antoine","16","Male","rien", "Informatique","cerebral")

console.log(handi1);
console.log(handi2);
