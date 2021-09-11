$ (function(){
  $('.user-nav__link-list').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.shop__filter-btn').on('click', function () {
    $('.shop__filters').slideToggle();
  });

  // $('.shop-content__links--active').on('click', function (e) {
  //   e.preventDefault();
  //   $('.shop__add-cart').toggle(function () {
  //     $("#slide").hide("slide", { direction: "left" }, 1000);
  //     },
  //       function () {
  //       $("#slide").show("slide", { direction: "left" }, 500);
  //     } 
  //   );
  // });

  $('.footer-top__title-js').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('footer-top__item--active')
  });

  $('.review-tabs__top-item').on('click', function(e) {
    e.preventDefault();
    $('.review-tabs__top-item').removeClass('review-tabs__top-item--active');
    $(this).addClass('review-tabs__top-item--active');

    $('.review-tabs__content-item').removeClass('review-tabs__content-item--active');
    $($(this).attr('href')).addClass('review-tabs__content-item--active');
  });

  $('.detalis-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }); 

  $('.detalis-slide__thumb').slick({
    asNavFor: '.detalis-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.detalis-slide__big').slick({
    asNavFor: '.detalis-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsie: [
      {
        breakpoint: 1200,
        settings: {
          draggable: true,
        }
      },
    ]
  });

  $(".star").rateYo({
    starWidth: "12px",
    readOnly: true,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "6px",
    starSvg: ' <?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="18pt"height="16pt" viewBox="0 0 18 16" version="1.1" ><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>',
  });

  $(".shop-content__star, .detalis-item__star").rateYo({
    starWidth: "20px",
    readOnly: true,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
    starSvg: ' <?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="18pt"height="16pt" viewBox="0 0 18 16" version="1.1" ><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>',
  });
  
  
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.slider-top__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.detalis-item__form-num').styler();
  


  var containerEL1 = document.querySelector('[data-ref="products-1"]');
  var containerEL2 = document.querySelector('[data-ref="design-1"]');

  var config = {
    controls : {
      scope: 'local'
    }
  };
  var mixer1 = mixitup(containerEL1, config);
  var mixer2 = mixitup(containerEL2, config);

  
  
});


  
  