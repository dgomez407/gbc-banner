
// Parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
seconds = urlParams.get('i')

// Rotation
window.onload = function() { console.log('hi'); rotate(seconds); };
var theImage = 0;
var images = new Array("images/banner/banner01.jpg", "images/banner/banner02.jpg", "images/banner/banner03.jpg");
function rotate(seconds) {
    console.log('hi');
    // if (seconds == null) { seconds = 1; }
    // seconds = 1;
    // theImage++;
    // if (theImage == images.length) {
    //     theImage = 0;
    // }
    // document.getElementById("adBanner").src = images[theImage];
    // setTimeout(rotate, seconds * 1000);
}