$(document).ready(function(){
  $('.slider_content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.slide_prev'),
        nextArrow: $('.slide_next'),
  });

  $('.burger').click(function() {
    $('.header_nav_menu').toggleClass("active")
    $('.overlay').toggleClass("active")
    $('.burger').toggleClass("active")
    $('.body').toggleClass("active")
    
  })
});

