class Chapitre {
    constructor(titre, texte) {
        this.titre = titre;
        this.texte = texte;

    }
    afficher() {
        let maDiv = document.createElement("div");
        let monTitre = document.createElement("h1");
        let monParagraphe = document.createElement("p");
        monTitre.innerText = this.titre;
        monParagraphe.innerText = this.texte;
        maDiv.appendChild(monTitre);
        maDiv.appendChild(monParagraphe);
        document.body.appendChild(maDiv);
    }
}


var xhr = new XMLHttpRequest();
xhr.open("GET", "php/fonctions.php");
xhr.responseType = "json";
xhr.onreadystatechange = function(){
    
    if(this.readyState == 4 && this.status == 200){
        console.log("ok");
        let reponseJson = this.response;
        //console.log(reponseJson);
        for(let element of reponseJson){
            console.log(element);
            let chapitre = new Chapitre(element.titre, element.texte);
            chapitre.afficher();
        }
    }

};

xhr.send();

//Class ES6:

/* class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `Hi I'm ${this.name} and I'm ${this.age} years old!`;
    }
}

let p = new Person("John", 18);
console.log(p.toString());
// Hi I'm John and I'm 18 years old


class Developer extends Person {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }

    toString() {
        return super.toString() + ` :: I'm a Developer who likes ${this.language}`;
    }
}

let d = new Developer("Yannick", 29, "JavaScript");
console.log(d.toString()); */
//  Hi I'm Yannick and I'm 29 years old :: I'm a Developer who likes JavaScript
