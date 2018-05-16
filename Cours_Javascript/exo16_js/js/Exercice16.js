function changer() {

var id1 = document.getElementById("txt1").textContent;
var id2 = document.getElementById("txt2").textContent;

document.getElementById("txt1").innerHTML = id2;
document.getElementById("txt2").innerHTML = id1;
}



