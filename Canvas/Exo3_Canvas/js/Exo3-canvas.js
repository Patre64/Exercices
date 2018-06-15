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


function pie(pinceau, w, h, datalist)
{

var radius = h / 2 - 5;
  var centerx = w / 2;
  var centery = h / 2;
  var total = 0;

  for(x=0; x < datalist.length; x++) { total += datalist[x]; }; 
  var lastend=0;
  var offset = Math.PI / 2;

  for(x=0; x < datalist.length; x++) {
    var thispart = datalist[x]; 
    pinceau.beginPath();
    pinceau.fillStyle = colist[x];
    pinceau.moveTo(centerx,centery);
    var arcsector = Math.PI * (2 * thispart / total);
    pinceau.arc(centerx, centery, radius, lastend - offset, lastend + arcsector - offset, false);
    pinceau.lineTo(centerx, centery);
    pinceau.fill();
    pinceau.closePath();		
    lastend += arcsector;
    
}
}
var datalist= new Array(35, 25, 20, 12, 7, 1); 
var colist = new Array('blue', 'red', 'green', 'orange', 'gray', 'yellow');

pie(pinceau, c1.width, c1.height, datalist); 

