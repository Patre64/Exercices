<?php

// Connexion à la base de données
require_once "cnxBDD.php";
 

// récupération des variables POST: 

  $name= isset($_POST['nom'])?$_POST['nom']:'';
  $prenom= isset($_POST['prenom'])?$_POST['prenom']:'';
  $date=  isset($_POST['date'])?$_POST['date']:'';
  $tel= isset($_POST['telephone'])?$_POST['telephone']:'';
  $email= isset($_POST['email'])?$_POST['email']:'';
  
   
// Requete :  

  $req = $bdd->prepare('INSERT INTO Contacts(nom, prenom, date, telephone, email) VALUES (:nom, :prenom, :date, :telephone, :email)');

  $req->execute(array( 
    "nom"=>$name,
    "prenom"=>$prenom,
    "date"=>$date,
    "telephone"=>$tel,
    "email"=>$email
  ));
  
?>