$('#titre'); // Sélectionne notre balise mais ne fait rien.

alert($('#titre').html()); // Affiche le contenu "J'aime les frites."

$('#titre').html('Je mange une pomme'); // Remplace le contenu ("J'aime les frites.") par "Je mange une pomme".

$('#titre').html($('title').html()); // Remplace le contenu par le titre de la page (contenu dans la balise <title>)



// Ajoute du contenu après chaque balise textarea.

/*$('textarea').after('<p>Veuillez ne pas poster de commentaires injurieux.</p>');

// Ajoute "Voici le titre :" avant la balise ayant comme id "titre".

$('#titre').before('Voici le titre :');

// Ajoute "! Wahou !" après la balise ayant comme id "titre".

$('#titre').after('! Wahou !');*/


// Chainage des Methodes.
// Ajoute du contenu après chaque balise textarea.

$('textarea')

  .after('<p>Veuillez ne pas poster de commentaires injurieux.</p>')

  .after('<p><strong>Merci beaucoup.</strong></p>');

// Ajoute "Voici le titre :" avant et "! Wahou !" après la balise ayant comme id "titre".

$('#titre')

  .before('Voici le titre :')

  .after('! Wahou !');
