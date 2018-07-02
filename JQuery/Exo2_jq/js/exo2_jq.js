/*jQuery(document).ready(function ($) {
    // SHOW/HIDE
    $('#exemple-show span').hide();
    $('#exemple-show a').click(function (e) {
        $('#exemple-show span').show();
    });

    $('#exemple-hide a').click(function (e) {
        $('#exemple-hide span').hide();
    });

    // FADE
    $('#exemple-fadetoggle a').click(function (e) {
        $('#exemple-fadetoggle span').fadeToggle();
    });
});*/

jQuery(document).ready(function($){
    $('#handle').click(function(e){
        $('#carre').animate({
            left: '50px',
            top: '80px'
        });
    });
});