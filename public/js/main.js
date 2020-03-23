$(document).ready(function(){
  //refernce by https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".left_content__signup").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0){
      $('.left_content__box1').fadeIn();
    }
    else {
      $('.left_content__box1').fadeOut();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 505){
      $('.left_content__box2').fadeIn();
    }
    else {
      $('.left_content__box2').fadeOut();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 901){
      $('.left_content__box3').fadeIn();
    }
    else {
      $('.left_content__box3').fadeOut();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1430){
      $('.left_content__box4').fadeIn();
    }
    else {
      $('.left_content__box4').fadeOut();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 2049){
      $('.left_content__box5').fadeIn();
    }
    else {
      $('.left_content__box5').fadeOut();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 2512){
      $('.left_content__box6').fadeIn();
    }
    else {
      $('.left_content__box6').fadeOut();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 3065){
      $('.left_content__box7').fadeIn();
    }
    else {
      $('.left_content__box7').fadeOut();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 4204){
      $('.left_content__box8').fadeIn();
    }
    else {
      $('.left_content__box8').fadeOut();
    }
  });

  $('.left_content__signup___button').click(async() => {
      fetch("/api/v1/signups",
      { method: "POST",
        body: JSON.stringify({
            "name": $('.left_content__signup___name').val(),
            "email": $('.left_content__signup___email').val()
      }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      $('.left_content__signup___name').val('');
      $('.left_content__signup___email').val('');
    })
})

