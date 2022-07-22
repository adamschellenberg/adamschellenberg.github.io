$(function() {
    $("#about-me-img").hover(
        function() {
            $(this).attr("src", "assets/img/htph-gif.gif");
        },
        function() {
            $(this).attr("src", "assets/img/htph-001.jpg");
        }
    );
});