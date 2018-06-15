var angle = 0;
var delay; 

function drawAngle(ctxa)
{
  ctxa.arc(250, 150, 70, angle, angle);
  ctxa.stroke();
  angle+=0.1;
  if(angle > 2 * Math.PI) {clearInterval(delay);return;}
  document.getElementById("angle").value = Math.round(angle * 100)/100;
}  

function setAngle()
{
  angle=0;
  var canvas = document.getElementById("demo");
  var ctxa = canvas.getContext("2d");
  ctxa.lineWidth="3";
  ctxa.beginPath();	 
  delay = setInterval(function(){ drawAngle(ctxa); }, 100);
}
setAngle();