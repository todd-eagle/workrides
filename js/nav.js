$(document).ready(function(){
    $('.page-nav__nav-button').click(function(){
        $('.page-nav').removeClass('page-nav__hide').addClass('page-nav__show');
      //  $('body').addClass('overlay');
    });

    $('.nav__item--close-button').click(function(){
        $('.page-nav').removeClass('page-nav__show').addClass('page-nav__hide');
      //  $('body').removeClass('overlay');
    });

    $('.page-nav').click(function(){
        $(this).removeClass('page-nav__show').addClass('page-nav__hide');
      //  $('body').removeClass('overlay');
    });

    $('.home').click(function(){
        newFunction().removeClass('page-nav__show').addClass('page-nav__hide');
    });

    $(function(){
        if ($(window).width() < 882 ){
            $('.home').addClass('page-nav');
        }
    });

    $(window).resize(function() {
        if ($(window).width() < 881 ){
            $('.page-nav').removeClass('page-nav__display-none');
        }

        if ($(window).width() < 882 ){
            $('.home').addClass('page-nav');
            $('.page-nav').removeClass('page-nav__show').addClass('page-nav__hide');
        }

        if ($(window).width() > 883 ){
            $('.home').removeClass('page-nav');
            $('.page-nav').addClass('page-nav__display-none');
        }
    });
});
function newFunction() {
    return $(this);
}

