class Fromages {
    constructor(nom, type, pays, classement) {
        this.nom = nom;
        this.type = type;
        this.pays = pays;
        this.classement = classement;
    }

    afficher() {
        let maDiv = document.createElement("div");
        let monNom = document.createElement("h1");
        let monClass = document.createElement("p");
        let monType = document.createElement("p");
        let monPays = document.createElement("p");

        monNom.innerText = this.nom;
        monClass.innerText = this.classement;
        monType.innerText = this.type;
        monPays.innerText = this.pays;

        maDiv.classList.add("container");
        monNom.classList.add("nom");
        monClass.classList.add("etoile");
        monType.classList.add("type");
        monPays.classList.add("pays"),

        maDiv.appendChild(monNom);
        maDiv.appendChild(monClass);
        maDiv.appendChild(monType);
        maDiv.appendChild(monPays);

        return maDiv;

    }
    
}



var xhr = new XMLHttpRequest();
xhr.open("GET", "json/fromages.json");
xhr.responseType = "json";
xhr.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        //console.log("ok");
        let reponseJson = this.response;
        //console.log(reponseJson);
        let article = document.createElement("article");
        for (let element of reponseJson) {
            //console.log(element);
            let fromage = new Fromages(element.nom, element.classement, element.type, element.pays);
            article.appendChild(fromage.afficher());
        }
        document.body.appendChild(article);
    }

};

xhr.send();
