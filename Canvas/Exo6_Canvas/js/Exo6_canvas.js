//Créer un dégradé linéaire dans le canvas:

var canvas = document.getElementById('canvas1');
var contexte = canvas.getContext('2d');

//On crée un dégradé linéaire
var lineaire = contexte.createLinearGradient(100,50,300,150);

/*Notre dégradé va du vert vers le violet en passant par le
 *bleu de façon uniforme (couleurs stop à 0, 0.5 et 1)*/
lineaire.addColorStop(0,'#4C8');
lineaire.addColorStop(0.5, '#48C');
lineaire.addColorStop(1, '#A4A');

//On crée un rectangle, on le remplit avec notre dégradé
contexte.fillStyle = lineaire;
contexte.fillRect(100,50,200,100);

