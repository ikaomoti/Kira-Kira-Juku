$(function () {
    //tab
    $('.tab').on('click', function () {
        $('.tab, .panel').removeClass('active');
        $(this).addClass('active');
        var index = $('.tab').index(this);
        $('.panel').eq(index).addClass('active');
    });

    //hamburger
    $('.hamburger-btn').on('click', function () {
        $('.gnav').toggleClass('open');
    });
    $(".gnav__link").on("click", function () {
        $('.gnav').removeClass('open');
    });
    $(window).resize(function () {
        $('.gnav').removeClass('open');
    });
});

