$(document).ready(function() {
    $(".circle").click(function() {
        $(".circle").fadeOut("fast");
    });

    $(".circle").click(function() {
        $(".pacman").fadeIn("slow");
        $(".pacman").delay(1000).animate({left: "2000px"}, 500);
    });

});

