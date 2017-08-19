var picOfMe = '<img src="./profile2edit.jpg">';

function flipMe(option){
  //$('.main').css("visibility","hidden");
  $('.secondary').empty();
  //TODO input picture of myself
  //TODO write bio
  $('.secondary').append(`
    <div class=close><a class="heading"> me </a><a class="closebutton">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </a></div>
    <hr>
    <div class="left mecontent">

    </div>
    <div class="right mecontent">
          <br><br><p> My name is Tanner and I like to build things. </p><br><p> I was raised among the farm
          land of Langley, BC, in a house filled with artifacts of the late 90s tech boom.
          This setting grew an urge to build and fix and developed an affinity
           for all things electronic.
          </p><br>
          <p>
          The decision to enter UBC computer engineering was only natural. Since then,
          my projects have ranged from web applications to wooden kayaks, surfboards to
          drone detecting software.
          </p><p><br>
          Besides school, I enjoy snowboarding, surfing, biking and camping.
          The latter two culminating in a recent self supported bike trip to California.

          </p>
    </div>

  `);
  $('.left.mecontent').append(picOfMe);
  $('.left.mecontent>img').css("height", ($(window).height()*.6));
  $('.left>div>div').fadeTo(1,0);
  $('.right>div>div').fadeTo(1,0);
  $('.right>div').hover(function() {
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
