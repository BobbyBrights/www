$(document).foundation();
$(function(){

function down(){
  $('#wave').velocity(
  {opacity:0, left:'-30px'},
  {duration: 500}
  );
  $('#down').velocity(
  {opacity:1, left:'0px'},
  {duration: 500}
  );
}
function nice(){
  $('#wave').velocity(
  {opacity:0, left:'-30px'},
  {duration: 500}
  );
  $('#down').velocity(
  {opacity:0, left:'-30px'},
  {duration: 500}
  );
  $('#nice').velocity(
  {opacity:1, left:'0px'},
  {duration: 500}
  );
}
var scrolling;
    scrolling = setTimeout(function(){ down() }, 6000);

$(document).on('scroll', function() {
    if($(this).scrollTop()>=130){
       clearTimeout(scrolling);
       nice();
    }
})


$('.border').velocity("fadeIn",
  { 
    duration: 1000
  });

$('#page,#next,.opening,.goodbye,#work > .row:nth-child(odd),#work > .row:nth-child(even)').velocity({ opacity: 1,left:0},{duration:900,delay:800});

$('a').click(function(event) {

  event.preventDefault();

  newLocation = this.href;

 $('.border').velocity("fadeOut",
  { 
    duration: 900,
    complete:  function() { newpage() }
  });

$('#page,.opening,.goodbye,#work,#next').velocity({ opacity: 0,left:'-30px'},{duration:800});


});

function newpage() {

  window.location = newLocation;

}

});





