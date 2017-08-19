
function flipFun(option){
  //$('.main').css("visibility","hidden");
  $('.secondary').empty();
  $('.secondary').append(`
    <div class=close><a class="heading"> for fun </a><a class="closebutton">
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
  `);
  $('.top.left>div').css('background-image','url(http://images.boomsbeat.com/data/images/full/595/bill-gates-jpg.jpg)');
  $('.top.right>div').css('background-image','url(http://static.panoramio.com/photos/large/2429705.jpg)');
  $('.bottom.left>div').css('background-image','url(http://auvac.org/uploads/organization/UBC.jpg)');
  $('.bottom.right>div').css('background-image','url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png)');
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
  $('.close>a').click(
    function(){
      close();
    }
  );
}
