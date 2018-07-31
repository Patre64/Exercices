<?php
if (isset ( $_POST["nom"] ) == true && isset ( $_POST["email"] ) == true){
echo "Je ;,m'appelle ". $_POST["nom"]." et voici mon Email ".$_POST["email"]. "!";
}
?>