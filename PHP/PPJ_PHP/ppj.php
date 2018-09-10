<?php

require_once 'template/vars.inc.php';

?>      

<body>

    <!-- Inclusion de code Html -->
    <?php
      
        require_once DOSSIER_TEMPLATE.'/titre.inc.php';

        require_once DOSSIER_TEMPLATE.'/menu.inc.php';

        include DOSSIER_TEMPLATE.'/slider.inc.php';

        include DOSSIER_TEMPLATE.'/about.inc.php';

        include DOSSIER_TEMPLATE.'/produits.inc.php';

        include DOSSIER_TEMPLATE.'/blog.inc.php';
      
        include DOSSIER_TEMPLATE.'/contact.inc.php';
       
        include DOSSIER_TEMPLATE.'/footer.inc.php';
      
       
    ?>

    <!-- Inclusion de code Php -->
    <?php

        //include DOSSIER_TEMPLATE.'/fonctions.inc.php';
        //echo uneFonction();
        //echo "<br>";
        //echo uneAutreFonction();

    ?>

</body>
</html>