var canvas = document.getElementById('demo');
            var contexte = canvas.getContext('2d');
            
            //Demi cercle vert inférieur
            contexte.beginPath();
            contexte.lineWidth = '5';
            contexte.strokeStyle = '#4C8';
            contexte.arc(75,100,50,0,Math.PI);
            contexte.stroke();
            //contexte.fill();

            //Cercle complet violet
            contexte.beginPath();
            contexte.lineWidth = '5';
            contexte.strokeStyle = '#A4A';
            contexte.arc(200,100,50,0,2*Math.PI);
            contexte.stroke();
            //contexte.fill();
            
            //Demi cercle bleu supérieur
            contexte.beginPath();
            contexte.lineWidth = '5';
            contexte.strokeStyle = '#48C';
            contexte.arc(325,100,50,Math.PI,2*Math.PI);
            contexte.stroke();
            //contexte.fill();

            
            