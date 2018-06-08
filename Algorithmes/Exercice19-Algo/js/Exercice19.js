var nbEssais = 0;

function loto() {

    var X = 6;
    var Y = prompt("Tapez un nombre entre 0 et 10 !");


    if (Y < X) {
        alert("Trop petit, voulez vous rejouer ?");
        nbEssais = nbEssais + 1;
        console.log(nbEssais);
        loto();
    }
    else if (Y > X) {
        alert("Trop grand, voulez vous rejouer ?");
        nbEssais = nbEssais + 1;
        console.log(nbEssais);
        loto();
    }
    else if (Y == X) {
        alert("Bravo, tu as gagné en " + nbEssais + " coups !");
        nbEssais = nbEssais + 1;
        console.log(nbEssais);
        
    }
}


function coups_minimal() {

    var min = 0;
    var max = 10;
    
    
    while {
        var milieu = (min + max) / 2;





    }
}