var activites = [];
activites["Lundi"] = ["Piscine", "Randonnée"];
activites["Mardi"] = ["Foot", "Ping-pong"];
activites["Mercredi"] = ["Rugby", "Piano"];
activites["Jeudi"] = ["Guitare", "Sieste"];
activites["Vendredi"] = ["Velo", "Marche"];
activites["Samedi"] = ["Mini-golf", "Tour de France"];
activites["Dimanche"] = ["Belote", "repas de famille"];

console.log(activites);

/* for(let jour in activites){
    let h1 = document.createElement("h1");
    h1.innerHTML = jour; 
    document.body.appendChild(h1);
        for(let activite of activites[jour]){
           let article = document.createElement("article");
           article.innerHTML = activite;
           document.body.appendChild(article);
        }

} */

for(let jour in activites){
    afficherJour(jour);
    for(let activite of activites[jour]){
       afficherActivite(activite);
    }

}

function afficherJour(day){
    let h1 = document.createElement("h1");
    h1.innerHTML = day;
    document.body.appendChild(h1).style.color = "red";

}

function afficherActivite(act){
    let article = document.createElement("article");
    article.innerHTML = act;
    document.body.appendChild(article);

}   