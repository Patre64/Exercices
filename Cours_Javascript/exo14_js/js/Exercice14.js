document.getElementById("texte1").style.color="blue";
document.getElementById("texte2").style.color="blue";
/*document.getElementById("texte1").style.textAlign="right";*/


var text1 = document.getElementById("texte1");
var text2 = document.getElementById("texte2");
var contenu1 = text1.textContent
var contenu2 = text2.textContent
alert(contenu1);
alert(contenu2);
function intervTxt(){
document.getElementById("texte1").textContent = contenu2;
document .getElementById("texte2").textContent = contenu1;
}



var x = 0;
var y = 0;
function deplacer(dx, dy)
{
   var bloc = document.getElementById("test");
   // on enregistre la nouvelle position
   x += dx;
   y += dy;
   // on place le bloc
   bloc.style.marginLeft = x + "px";
   bloc.style.marginTop = y + "px";
}



