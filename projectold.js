var proj1 = "url(fraservalleytree.jpg)";
var proj2 = "url(drone.jpg)";
var proj3 = "url(fraservalleytree.jpg)";
var proj4 = "url(fraservalleytree.jpg)";


function flipProj(option){
  //$('.main').css("visibility","hidden");
  $('.secondary').empty();
  $('.secondary').append(`<div id="projectwindow">
    <div class=close><a class="heading"> projects </a><a class="closebutton">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </a></div>
    <hr>
    <div class="top left">
      <div>
        <div class="contentA">
        </div>
        <div class="contentB">
        <p> Hello, I am Tanner </p>
        </div>
      </div>
    </div>
    <div class="top right">
      <div>
        <div class="contentA">
        </div>
        <div class="contentB">
        </div>
      </div>
    </div>
    <div class="bottom left">
      <div>
        <div class="contentA">
        </div>
        <div class="contentB">
        </div>
      </div>
    </div>
    <div class="bottom right">
      <div>
        <div class="contentA">
        </div>
        <div class="contentB">
        </div>
      </div>
    </div>
    </div>
  `);
  $('.top.left>div').css('background-image',proj1);
  $('.top.right>div').css('background-image',proj2);
  $('.bottom.left>div').css('background-image',proj3);
  $('.bottom.right>div').css('background-image',proj4);
  $('.top.left>div>div').fadeTo(1,0);
  $('.top.right>div>div').fadeTo(1,0);
  $('.bottom.left>div>div').fadeTo(1,0);
  $('.bottom.right>div>div').fadeTo(1,0);

  $('.top.left>div').click(function(){window.open('http://www.fraservalleytreeservice.com', '_blank')});
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
  $('.close>a').click(
    function(){
      close();
    }
  );
}
