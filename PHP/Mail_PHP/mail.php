<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml"
  xml:lang="fr" lang="fr">

<head>

  <meta http-equiv="Content-Type"
    content="text/html; charset=iso-8859-1" />

  <title>INCLUDE</title>

  <link type="text/css" rel="stylesheet" href="styles.css" title="styles" />
  <link type="text/css" rel="alternate stylesheet" href="stylesbig.css" title="stylesbig" />
  <link type="text/css" rel="stylesheet" href="print.css" media="print" />
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  <script type="text/javascript" src="styleswitcher.js"></script>

</head>

<body>

<?php

//Header:

//Déclaration de l'expéditeur:

$header = "From: \"EXPEDITEUR\"<ADRESSE_EXPEDITEUR>".$passage_ligne;

//Déclaration de l'adresse de retour:

$header.= "Reply-to: \"RETOUR\" <ADRESSE_RETOUR>".$passage_ligne;

//Déclaration de la version de MIME:

$header.= "MIME-Version: 1.0".$passage_ligne;

// Déclaration du content-type: (multipart/alternative permet au programme qui reçoit l'e-mail de choisir d'afficher soit la partie HTML, soit la partie texte.)

$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;

//Déclaration de type: (HTML/Texte + charset + Content-Transfer-Encoding).

$message = "...";
$message .= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_ligne;
$message .= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message .= "...";

//Boundary permet de séparer les différentes parties de notre e-mail (super-balise).
//Fonction rand() permet d'obtenir un nombre aléatoire, puis la fonction md5() permet de hacher une chaîne (ici, nous hacherons ce que la fonction rand() nous sortira).

$boundary = "-----=".md5(rand());

?>


<!--Exemple complet:-->

<?php

$mail = 'weaponsb@mail.fr'; // Déclaration de l'adresse de destination.
if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail)) // On filtre les serveurs qui présentent des bogues.
{
	$passage_ligne = "\r\n";
}
else
{
	$passage_ligne = "\n";
}
//=====Déclaration des messages au format texte et au format HTML.
$message_txt = "Salut à tous, voici un e-mail envoyé par un script PHP.";
$message_html = "<html><head></head><body><b>Salut à tous</b>, voici un e-mail envoyé par un <i>script PHP</i>.</body></html>";
//==========
 
//=====Lecture et mise en forme de la pièce jointe.
$fichier   = fopen("image.jpg", "r");
$attachement = fread($fichier, filesize("image.jpg"));
$attachement = chunk_split(base64_encode($attachement));
fclose($fichier);
//==========
 
//=====Création de la boundary.
$boundary = "-----=".md5(rand());
$boundary_alt = "-----=".md5(rand());
//==========
 
//=====Définition du sujet.
$sujet = "Hey mon ami !";
//=========
 
//=====Création du header de l'e-mail.
$header = "From: \"WeaponsB\"<weaponsb@mail.fr>".$passage_ligne;
$header.= "Reply-to: \"WeaponsB\" <weaponsb@mail.fr>".$passage_ligne;
$header.= "MIME-Version: 1.0".$passage_ligne;
$header .= "X-Priority: 3".$passage_ligne;
$header.= "Content-Type: multipart/mixed;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
//==========
 
//=====Création du message.
$message = $passage_ligne."--".$boundary.$passage_ligne;
$message.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary_alt\"".$passage_ligne;
$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;

//=====Ajout du message au format texte.
$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_txt.$passage_ligne;
//==========
 
$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;
 
//=====Ajout du message au format HTML.
$message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_html.$passage_ligne;
//==========
 
//=====On ferme la boundary alternative.
$message.= $passage_ligne."--".$boundary_alt."--".$passage_ligne;
//==========
 
$message.= $passage_ligne."--".$boundary.$passage_ligne;
 
//=====Ajout de la pièce jointe.
$message.= "Content-Type: image/jpeg; name=\"image.jpg\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: base64".$passage_ligne;
$message.= "Content-Disposition: attachment; filename=\"image.jpg\"".$passage_ligne;
$message.= $passage_ligne.$attachement.$passage_ligne.$passage_ligne;
$message.= $passage_ligne."--".$boundary."--".$passage_ligne; 
//========== 

//=====Envoi de l'e-mail.
mail($mail,$sujet,$message,$header);
//==========

?>

</body>

</html>
