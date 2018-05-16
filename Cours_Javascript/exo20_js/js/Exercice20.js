document.querySelector("h1").onmouseenter = function(){
	this.style.color = "red";
};

document.querySelector("h1").onmouseleave = function(){
	this.style.color = "black";
};

document.querySelector("h1").onclick = function(){
	document.querySelector("h1").innerHTML = "mouse"
};


