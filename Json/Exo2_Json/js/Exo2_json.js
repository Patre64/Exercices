var requestURL = "json/Exo2_json.json";
var xmlhttp = new XMLHttpRequest();
xmlhttp.responseType = 'json';
xmlhttp.open("GET", requestURL, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {

if (this.readyState == this.DONE && this.status == 200) {

    var catalogue = this.response;
    
    for (let i in catalogue) {  

    var myArticle = document.createElement('article');

    var myPara = document.createElement('p');
    myPara.textContent = catalogue[i].nom;
    myArticle.appendChild(myPara);

    var myParaImg = document.createElement('p');
    myArticle.appendChild(myParaImg);


    function etoile () {
    
    var mPath = "url(img/fromages.jpg) no-repeat";
        
        switch (catalogue[i].classement) {
    
    case 1 :
    myParaImg.style.background = mPath; 
    myParaImg.style.width = "20px";
    myParaImg.style.height = "20px";
    break;
    case 2 :
    myParaImg.style.background = mPath; 
    myParaImg.style.width = "40px";
    myParaImg.style.height = "20px";        
    break;
    case 3 :
    myParaImg.style.background = mPath; 
    myParaImg.style.width = "60px";
    myParaImg.style.height = "20px";
    break;
    case 4 :
    myParaImg.style.background = mPath; 
    myParaImg.style.width = "80px";
    myParaImg.style.height = "20px";
    break;
    case 5 :
    myParaImg.style.background = mPath; 
    myParaImg.style.width = "100px";
    myParaImg.style.height = "20px";
    break;
    case 6 :
    myParaImg.style.background = mPath; 
    myParaImg.style.width = "150px";
    myParaImg.style.height = "20px";
    break;
        }
    };
    etoile();

    var myPara = document.createElement('p');
    myPara.textContent = "Type: " + catalogue[i].type + " / Pays: " + catalogue[i].pays;
    myArticle.appendChild(myPara);

    document.querySelector('div').appendChild(myArticle);
    }
}
};

