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
        if (!$('#section02 .slickWrap .slick').hasClass('slick-initialized')) {
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
    } else {
        // 넓은 화면에서 슬라이더 초기화 해제
        if ($('#section02 .slickWrap .slick').hasClass('slick-initialized')) {
            $('#section02 .slickWrap .slick').slick('unslick');
        }
    }
});