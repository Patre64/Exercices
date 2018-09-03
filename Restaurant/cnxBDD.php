<?php

// Fichier cnxBDD.php
// Connexion à la base de données

  try{
   $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
   $bdd = new PDO('mysql:host=localhost;dbname=Restaurant', 'root', 'pangot',
   $pdo_options);
  }catch(Exception $e){
    die('Erreur de connexion a la BDD: '.$e->getMessage());
  }

  ?>