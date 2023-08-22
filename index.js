/*****************************
 *  STICKY NAVBAR
 *****************************/
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar"); // get navbar
var sticky = navbar.offsetTop; // get navbar position

// add sticky navbar when scrolling, if not, remove sticky navbar
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

