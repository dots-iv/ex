$(document).ready(function(){
  $('.slider_content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.slide_prev'),
    nextArrow: $('.slide_next'),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.burger').click(function() {
    $('.header_nav_menu').toggleClass("active")
    $('.overlay').toggleClass("active")
    $('.burger').toggleClass("active")
    $('.body').toggleClass("active")
    
  })
});

