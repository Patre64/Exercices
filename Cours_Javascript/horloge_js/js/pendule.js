var secondes = 0;
var minutes = 0;
var heures = 0;
// Les éléments du DOM
var aiguilleSecondes = document.querySelector("#secondes");
var aiguilleMinutes = document.querySelector("#minutes");
var aiguilleHeures = document.querySelector("#heures");
// Chrono déclenché dans le setInterval
function chrono(){
    secondes ++;
    aiguilleSecondes.style.transform = 'rotate('+secondes*6+'deg)';
    // Utilisation du modulo pour maîtriser le passage des minutes et heures
    if(secondes % 60 == 0){
        minutes ++;
        aiguilleMinutes.style.transform = 'rotate('+minutes*6+'deg)';
    }
    if(secondes % 360 == 0){
        heures++;
        aiguilleHeures.style.transform = 'rotate('+heures*6+'deg)';
    }
}
// Lancement de l'horloge
var interval = setInterval(chrono, 1000);