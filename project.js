var proj1 = "url(fraservalleytree.jpg)";
var proj2 = "url(drone.jpg)";
var proj3 = "url(fraservalleytree.jpg)";
var proj4 = "url(fraservalleytree.jpg)";


function flipProj(option){
  //$('.main').css("visibility","hidden");
  console.log("hello");
  $('.secondary').empty();
  $('.secondary').append(`<div id="projectwindow">
    <div class=close><a class="heading"> projects </a><a class="closebutton">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </a></div>
    <hr>
      <div id="slidebox">
        <div class="slide controls">
        <div class="slidebutton prev">
          <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
        </div>
        <div class="overlayhover"></div>
        <div class="slidebutton next">
          <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
        </div>
        <br style="clear:both">
        </div>
        <div class="slide slidecontent">
          <div class="slide img1">
            <img class="slide" src="fraservalleytree.JPG">
            <div class="slide">
              <h1>FraserValleyTreeService.com</h1>
              <p>Fraser Valley Tree Service is a Langley Arborist business that needed an updated
              website to help drive business. As the sole developer, I used JQuery and Semanitic UI
              to develop the single page website.</p>
            </div>
          </div>
          <div class="slide img2">
            <img class="slide" src="drone.JPG">
            <div class="slide">
              <h1>Operational Awareness of UAVs</h1>
              <p>For my final year capstone project I worked in a team to develop a drone detecting
              system. The system uses an SDR for radio scanning, Matlab for signal processing,
              and Java for the frontend.<p>
            </div>
          </div>
        </div>
      </div>
    </div>`
  );
  newSlideShow([".img1",".img2"]);
  $('.secondary').fadeTo(fadeDur,1);
  $('.secondary').css("left", ($(window).width() -  $('.secondary').width())/2);
  $('.secondary').css("top", ($(window).height() -  $('.secondary').height())/2);

  $('.close>a').click(
    function(){
      close();
    }
  );
}
