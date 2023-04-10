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
 $('.exchange_img, .exchange_img img').click(function(event) {
  $('.hidden-bot').removeClass('active'); // закрываем второе меню
  $('.hidden').toggleClass("active"); // открываем первое меню
  $('.hidden_list-item.active').removeClass('active'); // удаляем класс active у текущего элемента
  $('.hidden_list-item:first').addClass('active'); // добавляем класс active к первому элементу по умолчанию
  event.stopPropagation();
});

$('.hidden_list-item').click(function() {
  $('.hidden_list-item.active').removeClass('active'); // удаляем класс active у текущего элемента
  $(this).addClass('active'); // добавляем класс active к выбранному элементу
});
  
  $('.exchange_img-bot, .exchange_img-bot img').click(function(event) {
    $('.hidden').removeClass('active'); // закрываем первое меню
    $('.hidden-bot').toggleClass("active"); // открываем второе меню
    event.stopPropagation();
  });
  
  $(document).click(function(event) {
    var target = event.target;
    if (!$(target).closest('.hidden').length && !$(target).is('.exchange_img') && !$(target).closest('.hidden-bot').length && !$(target).is('.exchange_img-bot')) {
      $('.hidden').removeClass('active');
      $('.hidden-bot').removeClass('active');
    }
  });
  $('.hidden_choose-link').on('click', function() {
    var filter = $(this).data('filter');
    
    $('.hidden_list-item').each(function() {
      var categories = $(this).data('category');
      
      if (categories.indexOf(filter) > -1 || filter === 'all') {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});

