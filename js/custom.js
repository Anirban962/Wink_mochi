
 // $(function () { var shrinkHeader = 2; $(window).scroll(function () { var scroll = getCurrentScroll(); if (scroll >= shrinkHeader) { $('header').addClass('shrink'); } else { $('header').removeClass('shrink'); } }); function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop; } });

$('.news_slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  appendArrows: '.inbtns_1',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.banner_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    fade: true,
    slidesToShow: 1,
    cssEase: 'linear'
});

// testimonial slider
$(".testimo_slider_inn").slick({
  centerMode: true,
  centerPadding: "130px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 421,
      settings: {
        slidesToShow: 1,
        centerPadding: "0",
      },
    },
  ],
});