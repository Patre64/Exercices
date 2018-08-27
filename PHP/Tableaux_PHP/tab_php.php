<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
</head>
<body>

<?php

$tab = array(15,22);
$tabCrochets = [15,22];
var_dump($tab);
var_dump($tabCrochets);


$jours = array("Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
echo $jours[2];

$jours[6] = "Dimanche";// Ceci ajoute un nouvel élément au tableau avec la clé "x"
var_dump($jours);

unset($jours[5]); // Ceci efface l'élément du tableau avec la clé "x"
var_dump($jours);


foreach ($jours as $jour) {
    echo "Nous sommes: $jour";
    echo "</br>";
}


//La fonction array_shift () supprime le premier élément d'un tableau et renvoie la valeur de l'élément supprimé.
$a=array("a"=>"red","b"=>"green","c"=>"blue");
echo array_shift($a)."<br>";
print_r ($a);

//Commencez la tranche à partir du troisième élément de tableau et renvoyez le reste des éléments dans le tableau:
$a=array("red","green","blue","yellow","brown");
print_r(array_slice($a,2));

//Commencez la tranche à partir du deuxième élément de tableau et ne renvoyez que deux éléments:
$a=array("red","green","blue","yellow","brown");
print_r(array_slice($a,1,2));

//Supprimez des éléments d'un tableau et remplacez-le par de nouveaux éléments:
$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("a"=>"purple","b"=>"orange");
array_splice($a1,0,2,$a2);
print_r($a1);

//sort(): trie les tableaux dans l'ordre croissant et rsort():trie les tableaux dans l'ordre décroissant.
$numbers = array(4, 6, 2, 22, 11);
sort($numbers);

//asort():trie les tableaux associatifs dans l'ordre croissant, en fonction de la valeur.
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
asort($age);
//ksort():trie les tableaux associatifs dans l'ordre croissant, selon la clé.
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
ksort($age);

//arsort():trie les tableaux associatifs dans l'ordre décroissant, en fonction de la valeur.
//krsort():trie les tableaux associatifs dans l'ordre décroissant, en fonction de la clé.

?>

</body>
</html>