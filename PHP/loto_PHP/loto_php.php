<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<?php

set_time_limit ( 600 );

    function afficher(){ 

        $combi = array (19, 6, 11, 48, 34);// Combinaison de 5 chiffres.

        foreach ($combi as $affich) { //Afficher les 5 chiffres dans le HTML.
            echo $affich;
            echo "-";
        }

        echo "<br><br>";
        echo "Tirages :";
        echo "<br><br>";

        $stat=[];

        $tableau = array(); //$tableau = range(1,49).

        for($i=1; $i<50; $i++) { 
            $tableau[] = $i;
        }

        for($i=1; $i<11; $i++) { //10 tirages:
            shuffle($tableau);

            $tirage = array_slice($tableau, 0, 5);

            $stat = array_merge($stat, $tirage);

            /* echo(implode("",$tirage));//Afficher les 10 tirages dans le HTML, premiere methode.
            echo "-";
            echo "<br>"; */
            
            foreach ($tirage as $tirageElement) { //Afficher les 10 tirages dans le HTML, deuxieme methode.
                echo $tirageElement;
                echo "-";
            }
            
            echo "<br>";

            $compar = array_intersect($combi, $tirage);
            //var_dump($compar);
            //echo gettype($compar), "\n";

            if (count($compar) < 5) {
                echo "Perdu !";
                echo "<br><br>";
            }
            else {
                echo "Gagné !!!";
                echo "<br><br>";
            
            }
        }
            
        $compt = array_count_values($stat);
        var_dump($compt);
            
    }
    afficher();  
?>

    
</body>

</html>
