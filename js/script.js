$(document).ready(function(){
 $("#1, #one").click(function(){
     $(".walrus-hidden1").toggle();
     $("#one").toggle();
 });
});

$(document).ready(function(){
    $("#2, #two").click(function(){
        $(".walrus-hidden2").toggle();
        $("#two").toggle();

    });
});
$(document).ready(function(){
    $("#3, #three").click(function(){
        $(".walrus-hidden3").toggle();
        $("#three").toggle();

    });
});

// $(function(){
//     $('#img1').hover(function(){
//         $(this).width(1.25 * $(this).width());
//         $(this).height(1.25 * $(this).height());
//     },
//     function(){
//         $(this).width(0.8 * $(this).width());
//         $(this).height(0.8 * $(this).height());

//     });

// });