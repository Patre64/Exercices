$(function () {

    /* $("#start").click(function () {
        $("#carre").animate({ left: '600px' }, 3000, function () {
            $("#carre").hide(1000);
        });
    }); */


    /* $("#start").click(function () {
        $("#carre").animate({
            left: "600px",
            opacity: 0.5,
            width: "250px",
            height: "+=150px"
        }, 5000);
    }); */




    /* $("#start").click(function () {
        $("#carre").animate({ left: "600px" }, 3000);
        $("#carre").animate({ opacity: 0.5 }, 3000);
        $("#carre").animate({ width: "250px" }, 3000);
        $("#carre").animate({ height: "+=150px" }, 3000);
    }); */


    /* $("#stop").click(function () {
        $("#carre").stop(true);
    });     */


    /* $("#stop").click(function () {
        $("#carre").animate({ opacity: 1 }, 3000);
        $("#carre").animate({ width: "-=150px" }, 3000);
        $("#carre").animate({ height: "-=150px" }, 3000);
        $("#carre").animate({ right: "600px" }, 3000);
    }); */


    $("#start").click(function () {
        $("#carre").slideUp(5000).slideDown(5000);
    }); 


});




