var proj1 = "url(fraservalleytree.jpg)";
var proj2 = "url(drone.jpg)";
var proj3 = "url(fraservalleytree.jpg)";
var proj4 = "url(fraservalleytree.jpg)";


function flipContact(option){
  //$('.main').css("visibility","hidden");
  console.log("hello");
  $("#contactbutton").hide();
  $('.links').append(`
    <li>&#8226; <a href="mailto:tanner@tlgraham">Email<a> </li>
    <li>&#8226; <a href="https://www.linkedin.com/in/tanner-graham/">LinkedIn<a> </li>
  `);
}
