var jours = ['Lundi','Mardi','Mercredi','jeudi','Vendredi','Samedi','Dimanche'];

for(let element of jours){
let div = document.createElement("div");
div.innerHTML = element;
console.dir(div);
document.body.appendChild(div);
}

