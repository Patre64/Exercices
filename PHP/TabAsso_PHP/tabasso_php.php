<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
</head>
<body>
    
<?php

/* $array = array(
    "foo" => "bar",
    42    => 24,
    "multi" => array(
         "dimensional" => array(
             "array" => "foo"
         )
    )
);

var_dump($array["foo"]);
var_dump($array[42]);
var_dump($array["multi"] ["dimensional"] ["array"]); */



//Tableau à deux dimensions:
/* $activites = array("Lundi"=>"Php","Mardi"=>"Javascript", "Mercredi"=>"Typescript","Jeudi"=>"Angular","Vendredi"=>"SQL","Samedi"=>"Python","Dimanche"=>"Tout");

$activites["Dimanche"] = "Dodo";

var_dump($activites); */


//Tableau multi-dimensionnel:

$pierre = array("1"=>"Php","2"=>"Javascript","3"=>"Python");
$paul = array("1"=>"Javascript","2"=>"Css","3"=>"Php");
$jacques = array("1"=>"Java","2"=>"Php","3"=>"Javascript");

$preferences = array_merge($pierre, $paul, $jacques);
//$preferences = array_merge_recursive($pierre, $paul, $jacques);

var_dump(array_count_values($preferences));


/* $preferences = array(
    "pierre" => array("1"=>"Php","2"=>"Javascript","3"=>"Python"),
    "paul" => array("1"=>"Javascript","2"=>"Css","3"=>"Php"),
    "jacques" => array("1"=>"Java","2"=>"Php","3"=>"Javascript")
);

var_dump($preferences); */



?>


</body>
</html>