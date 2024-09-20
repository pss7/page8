$(function () {

    /* section14-slick */
    $('#section01 .slick').slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
    });

});

$(window).on('load resize', function () {

    var resizeWidth = $(this).width();

    if (resizeWidth < 1025) {

        /* section02-slick */
        $('#section02 .slickWrap .slick').slick({
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            dots: false,
            arrows: true,
            prevArrow: $('#section02 .control .prev'),
            nextArrow: $('#section02 .control .next'),
        });

    }

})