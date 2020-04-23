$(function(){
  $('.users').click(function(){
      let testimonial = $('.users__text', this).text();
      let signature = $('.hidden', this).text();
      let clearDots = testimonial.replace('...', '');
      let clearReturns = clearDots.replace(/\r?\n/g, " ");
      let clean = clearReturns.trim();

    $('.testimonial-info__box').html("<p class='testimonial-info__box--main-content'>" + clean + '</p>');
    $('.testimonial-info__box').append("<p class='testimonial-info__box--sig'>" + signature + '</p>');

    $(this).addClass('users__selected').siblings().removeClass('users__selected');
  });
});