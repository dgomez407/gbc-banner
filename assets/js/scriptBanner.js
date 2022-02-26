
// Parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlParams_i = urlParams.get('i')
const secondsDefault = 20
const theImageIndexDefault = 0

// Variables
var seconds = urlParams_i
var theImage = theImageIndexDefault;
var images = new Array(
    "images/banner/banner01.jpg", 
    "images/banner/banner02.jpg", 
    "images/banner/banner03.jpg",
    "images/banner/banner04.jpg",
    "images/banner/banner05.jpg",
    "images/banner/banner06.jpg",
    "images/banner/banner07.jpg",
    "images/banner/banner08.jpg"
    );

// Functions
function rotate(seconds) {
    //console.log('theImage=' + theImage);
    theImage++;
    if (theImage == images.length) { 
        theImage = theImageIndexDefault; 
    }
    document.getElementById("bannerAd").src = images[theImage];
}

// Main
if (seconds == null) { 
    seconds = secondsDefault; 
}
window.onload = function() { 
    //console.log('Start "function()"'); 
    setInterval(rotate, seconds * 1000);
};
