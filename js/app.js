$(document).foundation();
function init(){

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
if ($('.player').length){
  $('.player').each(function( index ) {
    $(this).get(0).play();
  });
} 
$('.coming-soon a').click(function(e){
  e.preventDefault();
})
};
function waitForWebfonts(fonts, callback) {
    var loadedFonts = 0;
    for(var i = 0, l = fonts.length; i < l; ++i) {
        (function(font) {
            var node = document.createElement('span');
            // Characters that vary significantly among different fonts
            node.innerHTML = 'giItT1WQy@!-/#';
            // Visible - so we can measure it - but not on the screen
            node.style.position      = 'absolute';
            node.style.left          = '-10000px';
            node.style.top           = '-10000px';
            // Large font size makes even subtle changes obvious
            node.style.fontSize      = '300px';
            // Reset any font properties
            node.style.fontFamily    = 'sans-serif';
            node.style.fontVariant   = 'normal';
            node.style.fontStyle     = 'normal';
            node.style.fontWeight    = 'normal';
            node.style.letterSpacing = '0';
            document.body.appendChild(node);

            // Remember width with no applied web font
            var width = node.offsetWidth;

            node.style.fontFamily = font;

            var interval;
            function checkFont() {
                // Compare current width with original width
                if(node && node.offsetWidth != width) {
                    ++loadedFonts;
                    node.parentNode.removeChild(node);
                    node = null;
                }

                // If all fonts have been loaded
                if(loadedFonts >= fonts.length) {
                    if(interval) {
                        clearInterval(interval);
                    }
                    if(loadedFonts == fonts.length) {
                        callback();
                        return true;
                    }
                }
            };

            if(!checkFont()) {
                interval = setInterval(checkFont, 50);
            }
        })(fonts[i]);
    }

};
$(document).ready(function() {
  var check1 = false, check2 = false;
  waitForWebfonts(['Cinetype-Regular'], function() {
    if (check2) {
      console.log('check1')
      init();

    }
    check1 = true;
  })
  waitForWebfonts(['Walsheim'], function() {
    if (check1) {
      console.log('check2')

      init();
    }
    check2 = true;
  })
});






