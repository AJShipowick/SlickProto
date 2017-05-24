
let slickSliderOpen = false;

function slickSliderClicked() {

    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only 

    if (!slickSliderOpen) {
        document.getElementById("slickContactForm").style.visibility = "visible";
        document.getElementById("slickSlider").style.right = "-300px";
        document.getElementById("slickImage").style.right = "340px";

        showSlickSlider();

    } else {
        closeSlickSlider()
    }
    slickSliderOpen = !slickSliderOpen;
}

function closeSlickSlider() {
    document.getElementById("slickContactForm").style.visibility = "hidden";
    document.getElementById("slickImage").style.right = "0px";
}

function showSlickSlider() {
    var slidingDiv = document.getElementById("slickSlider");
    var stopPosition = 0;
    if (parseInt(slidingDiv.style.right) < stopPosition) {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) + 5 + "px";
        setTimeout(showSlickSlider, 1);
    }
}