const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__progress-item_text_subtitle'),
      lines = document.querySelectorAll('.skills__progress-item_line span');  

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 1300) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#up']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();


  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Введите своё имя",
          minlength: jQuery.validator.format("Введите минимум {0} символа")
        },
        email: {
          required: "Введите свою почту",
          email: "Введите адрес своей почты example@gmail.com"
        }
      }
    });
};

validateForms('#contacts-form');


$('#order').on('click', function() {
  $('.overlay, #thanks').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #thanks').fadeOut('slow');
});


$('form').submit(function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('#order').fadeOut();
    $('.overlay, #thanks').fadeIn('slow');
    $('form').trigger('reset');
  });
  return false;
});



const slider = tns({
  container: '.portfolio__carousel',
  items: 3,
  slideBy: 1,
  autoplay: true,
  autoplayButton: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  controls: false,
  responsive: {
      320: {
          nav: true,
          navPosition: "bottom"
      },
      1100: {
          nav: false
      }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});




/* $('input').on('blur keyup', function() {
  if ($("#contacts-form").valid()) {
    $('#order').prop('disabled', false);  
  } else {
      $('#order').prop('disabled', 'disabled');
  }
}); */