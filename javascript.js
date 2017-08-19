var mebutton = new Object();
var projectsbutton = new Object();
var woodworkbutton = new Object();
var funbutton = new Object();
var resumebutton = new Object();
var contactbutton = new Object();

var fun;
var me;
var proj;
var wood;
var disable = false;
var fadeDur = "slow";

var images = [];
function preloadImages(srcs, imgs, callback) {
    var img;
    var remaining = srcs.length;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.onload = function() {
            --remaining;
            if (remaining <= 0) {
                callback();
            }
        };
        img.src = srcs[i];
        imgs.push(img);
    }
}

//-- usage --//

srcs=[
    "./chair.JPG",
    "./drone.JPG",
    "./fraservalleytree.JPG",
    "./kayak.JPG",
    "./profile2edit.jpg",
    "./toolbox.JPG",
    ];
var imgs = [];
preloadImages(srcs, imgs, ()=>{$('.loading').hide()});

$(document).ready(function() {
  mebutton.id = $('#mebutton');
  mebutton.show = flipMe;
  mebutton.clicked = false;
  projectsbutton.id = $('#projectsbutton');
  projectsbutton.show = flipProj;
  projectsbutton.clicked = false;
  woodworkbutton.id = $('#woodworkbutton');
  woodworkbutton.show = flipWood;
  woodworkbutton.clicked = false;
  funbutton.id = $('#funbutton');
  funbutton.show = flipFun;
  funbutton.clicked = false;
  resumebutton.id = $('#resumebutton');
  resumebutton.show = flipResume;
  resumebutton.clicked = false;
  contactbutton.id = $('#contactbutton');
  contactbutton.show = flipContact;
  resumebutton.clicked = false;

  fun = $("#fun");
  me = $("#me");
  proj = $("#proj");
  wood = $("#wood");
  mebutton.id.click(function(){mebutton.show()});
  projectsbutton.id.click(function(){projectsbutton.show()});
  woodworkbutton.id.click(function(){woodworkbutton.show()});
  funbutton.id.click(function(){funbutton.show()});
  resumebutton.id.click(function(){resumebutton.show()});
  contactbutton.id.click(function(){contactbutton.show()});


  var c = document.getElementById("mycanvas");

  $(window).resize( ()=>{
    console.log("hmmm");
    c.height = $(window).height();
    c.width = $(window).width();
    $('#mycanvas').css('height',$(window).height());
    $('#mycanvas').css('width',$(window).width());
    var maxrad = $(window).height() > $(window).width() ? $(window).width() : $(window).height();
  });

  c.height = $(window).height();
  c.width = $(window).width();

  $('#mycanvas').css('height',$(window).height());
  $('#mycanvas').css('width',$(window).width());
  var maxrad = $(window).height() > $(window).width() ? $(window).width() : $(window).height();
  var ctx = c.getContext("2d");
  var a=1, b=94;
  var change = 1;
  var randColour = Math.floor(Math.random()*255);
  $('html').mousemove( function(event){
    if(disable) return;
    ctx.beginPath();
    ctx.strokeStyle= rgb(Math.floor(a), Math.floor(b), randColour);
    //var radius =  maxrad/4 * Math.random();
    var radius = (Math.hypot(event.pageX-$(window).width()/2, event.pageY-$(window).height()/3)-200);
    if(radius > 0)
      ctx.arc(event.pageX,event.pageY,radius,0,2*Math.PI);
    ctx.stroke();
    a = a > 173? 0 : a + 17.3/10 * change;
    b = b > 173? 94 : b + 7.9/10 * change;
    if(a > 173 || b > 173 || a < 0 || b < 94) change = change * -1;
    //console.log(rgb(Math.floor(a),Math.floor(b),180));
  });
  $("#disable").css("top", $(window).height()-50);
  $("#disablebutton").click(()=>{
    ctx.clearRect(0, 0, c.width, c.height);
    disable = !disable;
    $("#disable > a").empty();
    $("#disable > a").append(!disable?"Disable Animation":"Enable Animation");
  });

  $( "#draggable" ).draggable();

});

function rgb(r, g, b){
  return "rgba("+r+","+g+","+b+","+0.2+")";
}

function close(){
  $('.secondary').fadeTo("slow",0);
  $('.secondary').css("display","none");
  $('.main').css("visibility","visible");
  $('.main').css("position","absolute");
}
