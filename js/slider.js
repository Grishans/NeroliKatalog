$(document).ready(function () {
  $(".mainSlider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    draggable: false,
    swipe: false,
    dots: true,
    centerMode: true,
    prevArrow:
      "<button id='prev' type='button' class='btn btnPrev'><img src='img/sliderArrLeft.svg' alt=''></button>",
    nextArrow:
      "<button id='next' type='button' class='btn btnNext'><img src='img/sliderArrRight.svg' alt=''></button>",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
          swipe: true,
          infinite: false,
          dots: false,
        },
      },
    ],
  });
  $(".objectSlides").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    draggable: false,
    swipe: false,
    dots: true,
    centerMode: true,
    prevArrow:
      "<button id='prev' type='button' class='btn btnPrev'><img src='img/sliderArrLeft.svg' alt=''></button>",
    nextArrow:
      "<button id='next' type='button' class='btn btnNext'><img src='img/sliderArrRight.svg' alt=''></button>",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
          swipe: true,
          infinite: false,
          dots: false,
        },
      },
    ],
  });
});
