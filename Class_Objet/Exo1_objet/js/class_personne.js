class Personne {
    constructor(nom,prenom,age,sexe,job) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.sexe = sexe;
        this.job = job;
    }
}

var pepe = new Personne("Priolet","Pascal","52","Male","Developpeur");
console.log(pepe);
