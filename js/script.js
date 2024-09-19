$(function () {

    /* top */
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('aside').fadeIn();
        } else {
            $('aside').fadeOut();
        }
    });

});