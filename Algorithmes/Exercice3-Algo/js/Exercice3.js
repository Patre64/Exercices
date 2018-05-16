var age = 19;
var statu = "jeune";

var rep = prompt("Tu bois ?")

while (statu=="jeune") {

    if (rep == "oui" ) {
        age += 2;
        statu = "jeune";
    }else if(rep == "non" ) {
        age++;
        statu = "jeune";
    }

    if (age <= 25) {
        document.write ("Tu est jeune");
    }

    else {
        statu = "vieux";
        document.write  ("Tu est vieux");
    }
}