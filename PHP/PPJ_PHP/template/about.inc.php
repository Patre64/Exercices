<?php

    //$page = $_GET["page"];

    //if($page="about"){
        //afficherAbout();
    //}
    //else{
    //echo 'Error 404 !';
    //}


    //function afficherAbout(){

        require_once DOSSIER_TEMPLATE.'/doctype.inc.php';


        //Second Container

        echo "<div class='container-fluid bg-2 text-center'>";

            echo "<h3 class='margin'>What Am I?</h3>";

            echo "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>";

            echo "<a href='#' class='btn btn-default btn-lg'>";

            echo "<span class='glyphicon glyphicon-search'></span> Search </a>";

        echo "</div>";

        //Third Container (Grid)

        echo "<div class='container-fluid bg-3 text-center'>";

            echo "<h3 class='margin'>Where To Find Me?</h3>";

            echo "<br>";

            echo "<div class='row'>";

                echo "<div class='col-sm-4'>";

                    echo "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>";
                    echo "<img src='<?= DOSSIER_IMG?>/birds1.jpg' class='img-responsive margin' style='width:100%' alt='Image'>";

                echo "</div>";

                echo "div class='col-sm-4'>";

                    echo "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>";
                    echo "<img src='<?= DOSSIER_IMG?>/birds2.jpg' class='img-responsive margin' style='width:100%' alt='Image'>";

                echo "</div>";

                echo "<div class='col-sm-4'>";

                    echo "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua.</p>";
                    echo "<img src='<?= DOSSIER_IMG?>/birds3.jpg' class='img-responsive margin' style='width:100%' alt='Image'>";

                echo "</div>";
                
            echo "</div>";

        echo "</div>";
   
    //}
?>