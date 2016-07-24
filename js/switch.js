$(function(){
  $('.em-wave').click(function(){
    $(this).addClass('small').delay(1000).queue(function(){
      $(this).removeClass("em-wave").addClass("em-mag").removeClass('small').dequeue();
    });
  });

});