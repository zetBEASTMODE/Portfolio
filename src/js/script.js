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
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите минимум {0} символа")
        },
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Введите адрес своей почты example@gmail.com"
        }
      }
    });
}

validateForms('#contacts-form');


