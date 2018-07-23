<?php

//Connection à la Base.

$user = "root";
$pass = "pangot";

$connect = new PDO("mysql:host=localhost;dbname=Chapitres", $user, $pass);

//Preparation de la requete.
$requete = "SELECT * FROM `Paragraphe`";
//Execute la requete SQL.
$resultat = $connect->query($requete);
// Transforme le jeu de resultat en tableau associatif.
$donnees = $resultat->fetchAll();
// Renvoie la struture de la variable, comme "console.dir".
//var_dump($donnees);
//Renvoie les données au format JSON au client.
echo json_encode($donnees);

