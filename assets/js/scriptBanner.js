
// Parameters
//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
//seconds = urlParams.get('i')
const seconds = 1
var theImage = 0;
var images = new Array("images/banner/banner01.jpg", "images/banner/banner02.jpg", "images/banner/banner03.jpg");

window.onload = function() { console.log('hi'); rotate(seconds); };
function rotate(seconds) {
    if (seconds == null) { seconds = 1; }
     if (theImage == images.length) {
         theImage = 0;
     }
     //document.getElementById("banner").style.backgroundImage = "url(" + images[theImage] + ")";
	 document.getElementById("bannerAd").src = images[theImage];
	 theImage++;
     setTimeout(rotate, seconds * 1000);
}