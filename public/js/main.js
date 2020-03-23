$(document).ready(function(){
$(".right_container__content").on("mouseover",function(){
    $(".right_container__content").not(this).css("visibility","hidden");
  });
  $(".right_container__content").on("mouseout",function(){
    $(".right_container__content").css("visibility","visible");
  });
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

