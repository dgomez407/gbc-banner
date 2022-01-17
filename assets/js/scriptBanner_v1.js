window.onload = rotate;
var theImage = 0;
var images = new Array("images/banner/banner01.jpg", "images/banner/banner02.jpg", "images/banner/banner03.jpg");
function rotate() {
    theImage++;
    if (theImage == images.length) {
        theImage = 0;
    }
    document.getElementById("adBanner").src = images[theImage];
    setTimeout(rotate, 1 * 1000);
}