
function newSlideShow(slideImages){
  console.log(slideImages);
  var currimage = 0;
  var numImages = slideImages.length;
  $(slideImages[currimage]).css("display","block");

  $('.next').click(()=>{
    $(slideImages[currimage]).hide();
    currimage = currimage >= numImages-1 ? 0 : currimage + 1;
    $(slideImages[currimage]).show();

  });
  $('.prev').click(()=>{
    $(slideImages[currimage]).hide();
    currimage = currimage <=0 ? numImages-1 : currimage - 1;
    $(slideImages[currimage]).show();
  });
  $('.overlayhover').hover(()=>{
    $(slideImages[currimage]+">div").show();
    console.log("hover");
  });
  $('.overlayhover').mouseleave(()=>{
    $(slideImages[currimage]+">div").hide();
  });
}
