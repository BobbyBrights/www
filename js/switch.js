$(function(){

function down(){
  $('#wave').addClass('hidden');
  $('#down').removeClass('hidden');
}
function nice(){
  $('#down').addClass('hidden');
  $('#nice').removeClass('hidden');
}
var myVar;
    myVar = setTimeout(function(){ console.log("Hello") }, 3000);

console.log('yes')

$( window ).scroll(function() {
  clearTimeout(scrolling);
}
});