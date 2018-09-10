<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >

<head>
    <title>Envoi de paramètres dans l'URL</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body>
<p>

<?php

include '/var/www/html/PHP/URL_PHP/index.php';

// 1 :

//if (isset($_GET['prenom']) AND isset($_GET['nom'])) // On a le nom et le prénom
//{
	//echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !';
//}
//else // Il manque des paramètres, on avertit le visiteur
//{
	//echo 'Il faut renseigner un nom et un prénom !';
//}

// 2 :

//if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter']))
//{
	//for ($i = 0 ; $i < $_GET['repeter'] ; $i++)
	//{
		//echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !<br />';
	//}
//}
//else
//{
   //echo 'Il faut renseigner un nom, un prénom et un nombre de répétitions !';
//}

// 3 :

if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter']))
{
	// 1 : On force la conversion en nombre entier
	$_GET['repeter'] = (int) $_GET['repeter'];

	// 2 : Le nombre doit être compris entre 1 et 100
	if ($_GET['repeter'] >= 1 AND $_GET['repeter'] <= 100) 
	{	
		for ($i = 0 ; $i < $_GET['repeter'] ; $i++)
		{
			echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !<br />';
		}
	}
}
else
{
   echo 'Il faut renseigner un nom, un prénom et un nombre de répétitions !';
}
?>


</p>

</body>

</html>
