$(function () {

    /* $("#p1").hover(function(){
        $("#p5").hide();
    },
    function(){
        $("#p5").show();
    });
    
    }); */


    /* $("#p1").on({
            mouseenter: function () {
                $("#p5").hide("slow");
            },
            mouseleave: function () {
                $("#p5").show("fast");
            },
            click: function () {
                $("#p3").hide();
            }
    
        });
    }); */


    //Fonction Callback..
    /* $("#p1").click(function () {
        $("#p2").hide(1005, function () {
            $("#p3").hide(1000, function () {
                $("#p4").hide(1000, function () {
                    $("#p5").hide(1000); 
                });   
            });   
        });
    });
}); */



    $("#p1").click(function () {
        $("#p2").toggle(1000, function () {
            $("#p3").fadeOut(1000, function () {
                $("#p4").fadeIn(1000, function () {
                    $("#p5").fadeToggle(1000, function () {
                        $("#p6").fadeTo(3000, 0.5);
                    });
                });
            });
        });
    });
});   


