//var picOfMe = 'url(http://images.boomsbeat.com/data/images/full/595/bill-gates-jpg.jpg)';

function flipResume(option){
  //$('.main').css("visibility","hidden");
  $('.secondary').empty();
  //TODO input picture of myself
  //TODO write bio
  $('.secondary').append(`
    <div class=close><a class="heading"> resume </a><a class="closebutton">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </a></div>
    <hr>
    <div class="resumecontent">
<iframe src="https://drive.google.com/file/d/0B0kNkvFy1zOeZmZFUzdPNWJPZGc/preview" width="100%" height="480"></iframe>    </div>

  `);


  $('.secondary').fadeTo(fadeDur,1);


    $('.secondary').css("left", ($(window).width() -  $('.secondary').width())/2);
    $('.secondary').css("top", ($(window).height() -  $('.secondary').height())/2);

  $('.close>a').click(
    function(){
      close();
    }
  );
}
