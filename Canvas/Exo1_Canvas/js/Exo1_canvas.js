//Pour commencer à dessiner dans notre canvas, il faut récupérer son contexte de dessin 2D :

var canvas = document.getElementById("demo");
var ctx = canvas.getContext("2d");

// Puis utiliser les fonctions de dessins de l'objet ainsi obtenu. Par exemple pour dessiner un rectangle, on pourra écrire le code suivant : //

ctx.fillRect(
    50,    // Coordonnée x du rectangle
    50,    // Coordonnée y du rectangle
    100,   // Largeur du rectangle
    30     // Hauteur du rectangle
);

// Le code précédent nous a permis de dessiner un rectangle rempli de couleur noire. Il est possible de changer sa couleur en modifiant le style de remplissage : 

ctx.fillStyle = "red";

ctx.fillRect(
    60,    // Coordonnée x du rectangle
    40,    // Coordonnée y du rectangle
    30,    // Largeur du rectangle
    100    // Hauteur du rectangle
);

// Il est également possible de ne dessiner que les contours du rectangle en utilisant cette fois la fonction strokeRect :

ctx.strokeStyle = "#0000ff";  // ligne de couleur bleue
ctx.lineWidth = 2;            // épaisseur de la ligne (2px)

ctx.strokeRect(
    100,   // Coordonnée x du rectangle
    100,   // Coordonnée y du rectangle
    50,    // Largeur du rectangle
    50     // Hauteur du rectangle
);

// Carrés en transparence.

ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 200, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 230, 50, 50);

// Carrés imbriqués;

ctx.fillRect(25, 125, 300, 100);
    ctx.clearRect(45, 345, 60, 60);
    ctx.strokeRect(50, 350, 50, 50);
