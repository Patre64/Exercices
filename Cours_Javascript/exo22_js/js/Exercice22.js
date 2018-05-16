//La variable espace stocke... un espace
var prenom = 'Pierre', espace = ' ', nom = 'Giraud';
        
/*On peut concaténer et stocker le résultat dans
 *une nouvelle variable*/
var moi = prenom + espace + nom;

//On peut également concaténer des valeurs entre elles
var toi = 'Victor' + ' ' + 'Durand';

//On peut encore concaténer des variables et des valeurs;
var sport = 'courir';
var hobbie = "J'aime " + sport;

/*On utilise également la concaténation pour tout afficher
 *au sein d'une même instruciton alert :*/
alert("Variable moi : " + moi +
      "\nVariable toi : " + toi +
      "\nVariable hobbie : " + hobbie);