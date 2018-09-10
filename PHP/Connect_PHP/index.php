<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <link rel= "stylesheet" type= "text/css" href= "css/connexion.css">
</head>

<body>
    
    <?php

    if(isset($_GET["q"])){//je recupere "q" du fichier connexion.php.
        echo "Votre Login et/ou votre mot de passe sont incorrects..";
    }

    ?>


<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Connexion</button>

<div id="id01" class="modal">
  
    <form class="modal-content animate" action="connexion.php" method="post">
            <!-- Les balises <form> sert à dire que c'est un formulaire
            on lui demande de faire fonctionner la page connexion.php une fois le bouton "Connexion" cliqué
            on lui dit également que c'est un formulaire de type "POST"-->

        <div class="imgcontainer">

            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="img/img_avatar2.png" alt="Avatar" class="avatar">

        </div>

        <div class="container">

            <label for="login"><b>Pseudo</b></label>
            <input type="text" placeholder="Enter Username" name="login" required>
            <!--Les balises <input> sont les champs de formulaire
                type="text" sera du texte
                name="nom de l'input" sert à recuperer la valeur saisie (dans un array, clef/valeur) une fois le bouton submit cliqué, pour le script "connexion.php" -->"

            <label for="pwd"><b>Mot de passe</b></label>
            <input type="password" placeholder="Enter Password" name="pwd" required>
            <!-- type="password" sera des petits points noir (texte caché) -->

            <button type="submit" class="connexion">Connexion</button>

            <label><input type="checkbox" checked="checked" name="restConnect">Rester connecté</label>

        </div>

        <div class="container" style="background-color:#f1f1f1">

            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            <span class="pwd">Forgot <a href="#">password?</a></span>

        </div>

    </form>

</div>

<script src="js/connexion.js"></script>

</body>

</html>
