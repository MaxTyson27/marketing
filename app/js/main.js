$(function () {

  var mixer = mixitup('.portfolio__inner');


  $('.slider__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" alt=""></button>',
  });

});