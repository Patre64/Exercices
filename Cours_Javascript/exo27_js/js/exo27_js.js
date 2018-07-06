var tableau = ['Lundi','Mardi','Mercredi','jeudi','Vendredi','Samedi','Dimanche'];
/* console.log(tableau);
console.log(typeof tableau);
console.log(tableau[0]+tableau[5]); */ 


/* for(let jour of tableau){
    console.log(jour); 
if (jour == "Mercredi"){
    console.log("ok");
break;
}
}
console.log("fin de boucle"); */

var jour = "Mercredi";
var j = 0;
while(tableau[j] !=jour){
console.log(tableau[j]);
j++;
}
