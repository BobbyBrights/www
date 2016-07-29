$(document).foundation();
$(function(){

function down(){
  $('#wave').addClass('hidden');
  $('#down').removeClass('hidden');
}
function nice(){
  $('#down').addClass('hidden');
  $('#nice').removeClass('hidden');
}
var scrolling;
    scrolling = setTimeout(function(){ down() }, 2000);

var scrollingSecond;
    scrollingSecond = setTimeout(function(){ nice() }, 4000);

$(document).on('scroll', function() {
    if($(this).scrollTop()>=130){
       clearTimeout(scrolling);
       clearTimeout(scrollingSecond);
    }
})

});