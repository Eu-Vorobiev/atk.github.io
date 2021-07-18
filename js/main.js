$(document).ready(function () {
  let anchors = $("a[href*='#']");
  let headerOffset = $(".header").offset().top;

  $(window).scroll(function () {
    let header = $(".header");
    let scroll = $(window).scrollTop();
    if (scroll >= headerOffset) {
      header.addClass("header--fixed")
    } else {
      header.removeClass("header--fixed")
    }
  });

  // if ( (!$(evt.target) === $(".logo")) && (!$(evt.target) === $(".btn-login")) && (!$(evt.target) === $(".menu-btn")) && (!$(evt.target) === $(".nav__list li a")) && (!$(evt.target) === $(".social li a")) && (!$(evt.target) === $(".language ul li a")) ) {
    
  // $(".header__container").on("click", function (evt) {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, "slow");
  //   return false;
  // });
  
  $(".mobile-nav li a").click(function (e) {
    $(e).stopPropagation();
    if ($(".mobile__menu").hasClass("active")) {
      $(".mobile__menu").removeClass("active");
      $(".menu-btn").removeClass("active");
    }
  });
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };


  $(".menu-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".mobile__menu").toggleClass("active");
  });

  $(window).scroll(function () {
    var plansWrapTop = $(".plans__wrap").offset().top;
    var plansWrapBtm = $(".plans__wrap").offset().top + $(".plans__wrap").outerHeight();
    var screenBtm = $(window).scrollTop() + $(window).innerHeight();
    var screenTop = $(window).scrollTop();
    // $(window).width() > 769 && $(window).width() <= 1024 &&
    if ((screenBtm > plansWrapTop) && (screenTop < plansWrapBtm)) {
      $(".plans__wrap").css("animation", `scrollW 1s ease-in-out normal forward`);
    } else {
      // the element is not visible, do something else
    }
  });

  $(".hero__slider").slick({
    infinite: true,
    arrows: false,
    dots: true
  });

  $(".result__slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 769,
      settings: {
        centerPadding: '30px'
      },
      breakpoint: 721,
      settings: {
        centerPadding: '30px',
        slidesToShow: 2
      },
      breakpoint: 476,
      settings: {
        centerPadding: '10px',
        slidesToShow: 3
      }
    }]
  });
});