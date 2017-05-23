/*
------------------------------------------------------------
Function to activate form button to open the slider.
------------------------------------------------------------
*/
function openSlick() {
    
    document.getElementById("slickContactForm").style.visibility = "visible";
    document.getElementById("slickSlider").style.right = "-300px";

    //document.getElementById("slickImage".style.right = "-1px";
    

    //document.getElementById("slickContactForm").scrollIntoView();

    slideIt();
    // var a = document.getElementById("sidebar");
    // a.setAttribute("id", "sidebar1");
    // a.setAttribute("onclick", "close_panel()");
}
/*
------------------------------------------------------------
Function to slide the sidebar form (open form)
------------------------------------------------------------
*/
function slideIt() {
    var slidingDiv = document.getElementById("slickSlider");
    var stopPosition = 0;
    if (parseInt(slidingDiv.style.right) < stopPosition) {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) + 2 + "px";
        setTimeout(slideIt, 1);
    }

    // var slidingImage = document.getElementById("slickImage");
    // var stopPosition2 = 0;
    // if (parseInt(slidingDiv.style.right) < slidingImage.style.right) {
    //     slidingImage.style.right = parseInt(slidingImage.style.right) + 2 + "px";
    //     setTimeout(slideIt, 1);
    // }

}
/*
------------------------------------------------------------
Function to activate form button to close the slider.
------------------------------------------------------------
*/
function close_panel() {
    slideIn();
    a = document.getElementById("sidebar1");
    a.setAttribute("id", "sidebar");
    a.setAttribute("onclick", "open_panel()");
}
/*
------------------------------------------------------------
Function to slide the sidebar form (slide in form)
------------------------------------------------------------
*/
function slideIn() {
    var slidingDiv = document.getElementById("slider");
    var stopPosition = -342;
    if (parseInt(slidingDiv.style.right) > stopPosition) {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) - 2 + "px";
        setTimeout(slideIn, 1);
    }
}