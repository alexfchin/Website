$(document).ready(function () {
    $('.home').css('opacity', '0.0');
    $('.home').fadeTo(1000, 1.0);

    //load variables prevents repeated dom manipulation
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);
});

function in_view(){
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop(); //gives top pos
    var window_bottom_position = (window_top_position + window_height);
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        // apply effects and animations
    }
});
