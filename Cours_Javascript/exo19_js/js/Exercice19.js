var myImg = new Image();

myImg.src = 'Images/spongebob2.jpeg';

document.body.appendChild(myImg); // L'image est ajoutée au DOM

console.log(myImg);

var b = document.body;
var monImg = b.childNodes[2];
monImg.id = 'bob';
document.getElementById('bob').src = 'Images/spongebob3.png';

