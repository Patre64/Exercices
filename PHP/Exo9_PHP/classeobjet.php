<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
</head>

<body>

<?php

class etudiant {

        public $etudie = true;    
        public $nom;
        public $age;
        public $notes;

        public function __construct($nom1, $age1, $notes1){

            $this->nom = $nom1;
            $this->age = $age1;
            $this->notes = $notes1;
        }

        public function sePresente(){

            if($this->etudie){
                echo "Je m'apelle $this->nom et j'ai $this->age ans <br>";
        
            foreach($this->notes as $matiere => $note){
                echo "En $matiere, j'ai obtenu :$note/20 <br>";
            }

        }    
    
    }
}

$notesJohn = array("Maths"=>17, "Francais"=>9, "Anglais"=>12);
$john = new etudiant("John", "31", $notesJohn);
$john->sePresente();


?>

</body>

</html> 