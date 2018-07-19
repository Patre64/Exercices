var xhr = new XMLHttpRequest();

xhr.open("GET", "json/fromages.json");
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);

        let from = JSON.parse(this.responseText);


    }
}
xhr.send();


