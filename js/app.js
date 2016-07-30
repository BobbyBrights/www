$(document).foundation();
$(function(){

function down(){
  $('#wave').addClass('hidden');
  $('#down').removeClass('pre-hidden');
}
function nice(){
  $('#wave').addClass('hidden');
  $('#down').addClass('hidden');
  $('#nice').removeClass('pre-hidden');
}
var scrolling;
    scrolling = setTimeout(function(){ down() }, 6000);

$(document).on('scroll', function() {
    if($(this).scrollTop()>=130){
       clearTimeout(scrolling);
       nice();
    }
})

$('body').css('display', 'none');

$('body').fadeIn(1000);


$('a').click(function() {

  event.preventDefault();

  newLocation = this.href;

  $('body').fadeOut(1000, newpage);

});

function newpage() {

  window.location = newLocation;

}

});





