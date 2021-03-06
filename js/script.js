$(document).ready(function () {
  "use strict";
  // -----------------------------
  //  Smooth Scroll Function
  // -----------------------------
  function smoothScroll() {
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 1000);
        event.preventDefault();
    });
  }
  smoothScroll();

  // Off Canvas Menu
  if(screen.width <= 480){
    $('#offCanvas').on('click', function () {
      $('.nav-offcanvas').addClass('open');
      $('.offcanvas-overlay').addClass('on');
    });
    $('#offCanvasClose, .offcanvas-overlay, .page-scroll').on('click', function () {
      $('.nav-offcanvas').removeClass('open');
      $('.offcanvas-overlay').removeClass('on');
    });
  }

  $('#showPassword').on('click', function(){
    if($(this).hasClass('fa-eye')){
      $(this).removeClass('fa-eye').addClass('fa-eye-slash');
      $('#loginPassword').attr('type','text').focus();
    } else{
      $(this).removeClass('fa-eye-slash').addClass('fa-eye');
      $('#loginPassword').attr('type','password').focus();
    }
  });

  // -----------------------------
  //  Headroom Initialize
  // -----------------------------
  $('.main-nav').headroom();
  $('.nav-list>.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
  if(screen.width > 991){
    $('.process__item').matchHeight({
        byRow: 0
    });
  }
  TweenMax.fromTo('.hero__shape-small, .login__shape-small', 2, 
    { y : 0, opacity: 1 }, 
    { y : 15, opacity: .5, repeat: -1, yoyo: true, ease: Power2.easeInOut}
  );
  TweenMax.fromTo('.topLike', 3, 
    { x : 0 }, 
    { x : 20, repeat: -1, yoyo: true, ease: Power2.easeInOut}
  );
  TweenMax.fromTo('.rightLike', 2, 
    { y : 0 }, 
    { y : 10, repeat: -1, yoyo: true, ease: Power2.easeInOut}
  );
  TweenMax.fromTo('.love-small', 5, 
    { scale : 0, opacity: 1 }, 
    { scale : 1, opacity: 0, repeat: -1, ease: Power2.easeInOut}
  );
  TweenMax.fromTo('.love-small-2', 3.8, 
    { scale : 0, opacity: 1 }, 
    { scale : 1, opacity: 0, repeat: -1, ease: Power2.easeInOut}
  );
  TweenMax.fromTo('.love-big', 5, 
    { scale : 0, opacity: 1 }, 
    { scale : 1, opacity: 0, repeat: -1, ease: Power2.easeInOut}
  );
  TweenMax.fromTo('.love-big-2', 3.8, 
    { scale : 0, opacity: 1 }, 
    { scale : 1, opacity: 0, repeat: -1, ease: Power2.easeInOut}
  );

  // Background Shape Switches
  TweenMax.fromTo('.switch-one', 2, 
    { opacity: .8 }, 
    { opacity: 0, repeat: -1, yoyo: true, ease: Power2.easeInOut}
  );
  TweenMax.fromTo('.switch-two', 1.5, 
    { opacity: .3 }, 
    { opacity: 0, repeat: -1, yoyo: true, ease: Power2.easeInOut}
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
