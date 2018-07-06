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
                $("#p5").hide();
            },
            mouseleave: function () {
                $("#p5").show();
            },
            click: function () {
                $("#p3").hide();
            }
    
        });
    }); */


    $("#p1").click(function () {
        $("#p2").hide(1005, function () {
            $("#p3").hide(1000, function () {
                $("#p4").hide(1000, function () {
                    $("#p5").hide(1000); 
                });   
            });   
        });
    });
});
