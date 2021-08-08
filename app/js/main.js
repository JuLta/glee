$ (function(){

  $(".star").rateYo({
    starWidth: "12px",
    readOnly: true,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "6px",
  });

  $(".shop-content__star").rateYo({
    starWidth: "20px",
    readOnly: true,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
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


  
  