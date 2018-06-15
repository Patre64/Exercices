// Placer le quadrillage en fond:

var c1=document.getElementById("demo");

var pinceau=c1.getContext("2d");

var ecart = 5; //largeur d'un côté des cases

//lignes
for(var h = ecart ; h < c1.height ; h += ecart) {
   pinceau.moveTo(0, h); //déplacer le pinceau à (x,y) sans tracer
   pinceau.lineTo(c1.width, h); //tracer jusqu'à (x,y)
   pinceau.lineWidth = 0.2;
}
//colonnes
for(var w = ecart ; w < c1.width ; w += ecart) {
   pinceau.moveTo(w, 0);
   pinceau.lineTo(w, c1.height);
   pinceau.lineWidth = 0.2;
}
pinceau.stroke();

pinceau.beginPath();
pinceau.moveTo(5, 5);
pinceau.lineTo(70, 5);
pinceau.lineTo(5, 70);
pinceau.fill();


pinceau.beginPath();
pinceau.moveTo(495, 5);
pinceau.lineTo(495, 70);
pinceau.lineTo(430, 5);
pinceau.fill();


pinceau.beginPath();
pinceau.moveTo(495, 495);
pinceau.lineTo(495, 430);
pinceau.lineTo(430, 495);
pinceau.fill();


pinceau.beginPath();
pinceau.moveTo(5, 495);
pinceau.lineTo(5, 430);
pinceau.lineTo(70, 495);
pinceau.fill();


pinceau.beginPath();
pinceau.lineTo(255, 5);
pinceau.lineTo(255, 495);
pinceau.stroke();
pinceau.lineWidth = 0.6;


pinceau.beginPath();
pinceau.lineTo(5, 255);
pinceau.lineTo(495, 255);
pinceau.stroke();
pinceau.lineWidth = 0.5;


pinceau.beginPath();
pinceau.arc(255, 255, 100, 0, 2 * Math.PI);
pinceau.fillStyle="#FF4422"
pinceau.fill();
pinceau.stroke();


pinceau.arc(250, 35, 80, 0, Math.PI, false);

pinceau.arc(250, 355, 80, 0, Math.PI, true);
