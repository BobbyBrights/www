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

});