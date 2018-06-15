//Créer un dégradé radial dans le canvas:

var canvas = document.getElementById('canvas1');
            var contexte = canvas.getContext('2d');
            
            //On crée un dégradé radial
            var radial = contexte.createRadialGradient(200,100,20,200,100,75);
            
            //Définition des couleurs stop
            radial.addColorStop(0,'#4C8');
            radial.addColorStop(0.25, '#48C');
            radial.addColorStop(1, '#A4A');
            
            //On crée un cercle qu'on remplit avec notre dégradé
            contexte.beginPath();
            contexte.fillStyle = radial;
            contexte.arc(200,100,75,0,2*Math.PI);
            contexte.fill();
