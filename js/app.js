$(document).ready(function(){
  $("#business").on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $('#business-section').offset().top - 100
    });
  });

  $("#influencer").on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $('#influencer-section').offset().top - 100
    });
  });
});