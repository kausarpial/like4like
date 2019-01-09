$(document).ready(function () {
  "use strict";
  // -----------------------------
  //  Headroom Initialize
  // -----------------------------
  $('.main-nav').headroom();
  $('.process__item').matchHeight({
      byRow: 0
  });
  TweenMax.fromTo('.topLike', 3, 
    { x : 0 }, 
    { x : 20, repeat: -1, yoyo: true, ease: Power2.easeInOut}
  );
  TweenMax.fromTo('.rightLike', 2, 
    { y : 0 }, 
    { y : 10, repeat: -1, yoyo: true, ease: Power2.easeInOut}
  );
});

// -----------------------------
// On Scroll Add class
// -----------------------------
$(window).on('scroll', function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $('.main-nav').addClass('nav-bg');
  } else {
    $('.main-nav').removeClass('nav-bg');
  }
});
