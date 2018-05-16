//On crée un élément de type p
var newPara1 = document.createElement('p');
           
//On ajoute un attribut id à notre paragraphe
newPara1.id = 'nouv1';

//On crée un noeud de type texte
var texte1 = document.createTextNode('Blalalalalalallalalaallalalala');

//On insère le texte dans notre paragraphe
newPara1.appendChild(texte1);

/*On insère finalement notre élément en tant que
 *dernier enfant de body (auquel on accède directement
 *avec "document.body", tout simplement)*/
document.body.appendChild(newPara1);


// Deuxieme paragraphe//
var newPara2 = document.createElement('p');
newPara2.id = 'nouv2';
var texte2 = document.createTextNode('Blilililililililililililililili');
newPara2.appendChild(texte2);
document.body.appendChild(newPara2);


console.log(newPara1);
console.log(newPara2);


document.querySelectorAll("p")[0].style.color = "blue";
document.querySelectorAll("p")[1].style.color = "red";

document.querySelectorAll("p")[0].style.fontSize = "40px";
document.querySelectorAll("p")[1].style.fontSize = "40px";

