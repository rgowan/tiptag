$(document).ready(function(){
  $("#business").on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $('#business-section').offset().top - 100
    }, 1000);
  });

  $("#influencer").on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $('#influencer-section').offset().top - 100
    }, 1000);
  });
});