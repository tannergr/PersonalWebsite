var picOfWood1 = 'url(http://1.bp.blogspot.com/-WDN3Egpvgm8/UcgLvZ47R9I/AAAAAAAAAYM/8VkQx1Z0qcY/s1600/IMG_1031.JPG)';
var picOfWood2 = 'url(./kayak.JPG)';
var picOfWood3 = 'url(./toolbox.JPG)';
var picOfWood4 = 'url(./chair.JPG)';

function flipWood(option){
  //$('.main').css("visibility","hidden");
  $('.secondary').empty();
  $('.secondary').append(`<div id="woodwindow">
    <div class=close><a class="heading"> woodwork </a><a class="closebutton">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </a></div>
    <hr>
    <div class="top left">
      <div>
        <div class="contentA">
        </div>
        <div class="contentB">
        <p> Hollow wooden surfboard build with the internet as my guide. Completed over two summers. </p>
        </div>
      </div>
    </div>
    <div class="top right">
      <div>
        <div class="contentA">
        </div>
        <div class="contentB">
        <p> Kayak restoration. The keyak required a patch and a fresh coat of polyurethane. </p>
        </div>
      </div>
    </div>
    <div class="bottom left">
      <div>
        <div class="contentA">
        </div>
        <div class="contentB">
        <p> Toolbox. Along with storing my growing tool collection, I got to practice dovetail joints. </p>
        </div>
      </div>
    </div>
    <div class="bottom right">
      <div>
        <div class="contentA">
        </div>
        <div class="contentB">
        <p> What was three 1"x12"x8' cedar boards became an accomodator of sun basking.
        </div>
      </div>
    </div>
    </div>
  `);
  console.log(Math.floor($(window).height()*0.85));
  $('#woodwindow').css("height",Math.floor($(window).height()*0.85));
  $('.top.left>div').css('background-image',picOfWood1);
  $('.top.right>div').css('background-image',picOfWood2);
  $('.bottom.left>div').css('background-image',picOfWood3);
  $('.bottom.right>div').css('background-image',picOfWood4);
  $('.top.left>div>div').fadeTo(1,0);
  $('.top.right>div>div').fadeTo(1,0);
  $('.bottom.left>div>div').fadeTo(1,0);
  $('.bottom.right>div>div').fadeTo(1,0);

  $('.top.left>div').hover(function() {
    $(this).find(".contentB").fadeTo(fadeDur,1);
  },function() {
    $(this).find(".contentB").fadeTo(fadeDur,0);
  });
  $('.top.right>div').hover(function() {
    $(this).find(".contentB").fadeTo(fadeDur,1);
  },function() {
    $(this).find(".contentB").fadeTo(fadeDur,0);
  });
  $('.bottom.left>div').hover(function() {
    $(this).find(".contentB").fadeTo(fadeDur,1);
  },function() {
    $(this).find(".contentB").fadeTo(fadeDur,0);
  });
  $('.bottom.right>div').hover(function() {
    $(this).find(".contentB").fadeTo(fadeDur,1);
  },function() {
    $(this).find(".contentB").fadeTo(fadeDur,0);
  });
  $('.secondary').fadeTo(fadeDur,1);

  $('.secondary').css("left", ($(window).width() -  $('.secondary').width())/2);
  $('.secondary').css("top", ($(window).height() -  $('.secondary').height())/2);

  $('.close>a').click(
    function(){
      close();
    }
  );
}
