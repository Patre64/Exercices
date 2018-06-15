//Ecrire du texte dans un canvas:

var canvas = document.getElementById('canvas1');
            var contexte = canvas.getContext('2d');
            
            //Texte creux (à gauche)
            contexte.font = "bold 20px Verdana, Arial, serif";
            contexte.strokeStyle = '#48B';
            contexte.strokeText('Texte creux', 25, 100);
            
            //Texte plein (à droite)
            contexte.font = "bold 20px Verdana, Arial, serif";
            contexte.fillStyle = '#48B';
            contexte.fillText('Texte plein', 225, 100);

            