$(document).ready(function(){
  var navHeight = $('#Header').offset().top;
  $(window).scroll(function(){
    if ($(window).scrollTop() > navHeight) {
      $("#Header").addClass("fixed");
      $("#Header").slideDown('200');
    }
    else {
      $("#Header").removeClass("fixed");
    }
  });
});