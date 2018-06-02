$(document).ready(function () {
  //Slider
  const triggers = $('ul.slider-triggers li');
  const images = $('ul.slider__list li');
  const lastElem = triggers.length - 1;
  let target;

  triggers.first().addClass('selected');
  images.hide().first().show();

  function sliderResponse(target) {
    images.fadeOut(600).eq(target).fadeIn(1000);
    triggers.removeClass('selected').eq(target).addClass('selected');
  }

  triggers.click(function () {
    if (!$(this).hasClass('selected')) {
      target = $(this).index();
      sliderResponse(target);
      resetTiming();
    }
  });

  function sliderTiming() {
    target = $('ul.slider-triggers li.selected').index();
    target === lastElem ? target = 0 : target = target + 1;
    sliderResponse(target);
  }

  var timingRun = setInterval(function () {
    sliderTiming();
  }, 5000);

  //Adding active class to clicked navigation
  $('.main-nav li a').click(function () {
    $('.main-nav li a').removeClass("active");
    $(this).addClass("active");
  });

  //Responsive navigation
  $('.mobile-nav-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('nav').toggleClass('is-open');
  });

  // Close the resposive nav if clicked outside the header
  $("html").on('click', function (event) {
    if ($(event.target).closest('.main-nav, header').length === 0) {
      $('nav').removeClass('is-open');
      $("nav ~ div").removeClass('active');
    }
  });
});