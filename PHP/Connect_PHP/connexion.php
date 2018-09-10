<?php

    session_start(); 

    // on vérifie que le champ "Login" n'est pas vide
    // empty vérifie à la fois si le champ est vide et si le champ existe belle et bien (is set)
    if(empty($_POST['login'])) {
        echo "Le champ Pseudo est vide.";
    }

    else if(empty($_POST['pwd'])){
        // on vérifie maintenant si le champ "Mot de passe" n'est pas vide"
        echo "Le champ Mot de passe est vide.";
        }

        else {
            // les champs sont bien postés et pas vides, on sécurise les données entrées par le membre:
            $Login = htmlentities($_POST['login'], ENT_QUOTES, "ISO-8859-1"); // le htmlentities() passera les guillemets en entités HTML, ce qui empêchera les injections SQL
            $MotDePasse = htmlentities($_POST['pwd'], ENT_QUOTES, "ISO-8859-1");
            $Remember = htmlentities($_POST['restConnect'], ENT_QUOTES, "ISO-8859-1") ? true : false;

            $Hote = 'localhost';
            $Nombd = 'identifier';
            $User = 'root';
            $Mdp = 'pangot';

                try {
                    $bdd = new PDO("mysql:host=$Hote;dbname=$Nombd", $User, $Mdp);//Connection à la base de donnée.
                } 

                catch(PDOException $e) { // Test connection et message d'erreur.
                    echo $e->getMessage();
                }

                //Requete:(SQL)
                $Requete = "SELECT nom, password 
                             FROM connect
                             WHERE nom = :nom AND password = :password";

                $Resultat = $bdd->prepare($Requete);

                //Comparaison des valaurs saisie avec celles de la base:
                $Resultat->bindParam(':nom',$Login);
                $Resultat->bindParam(':password',$MotDePasse);
                $Resultat->execute();
                //echo "remember > ".$Remember;
                
                $Resultat->rowCount()>0;

                if($Resultat->rowCount()>0){
                    
                    if ($Remember == true){
                        //echo 'coucou';
                        setcookie('auth', $Login, time()+3600, 'CONNECT_PHP', 'localhost', false, true);
                    }

                    $_SESSION['login'] = $Login;// on ouvre la session avec $_SESSION:

                    // header("Location: page.php");
                }

                else{
                    header("Location: index.php?q=msg");//Creation de "q" necessaire au message dans index.php.
                   }

                //$Resultat->closeCursor();
        }
?>
