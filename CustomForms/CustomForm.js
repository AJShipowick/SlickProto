//Pure JS to be added to customer website, no JQuery here.
//This code should call custom js/html/css and build the form based on specific preferences
// compatible with IE7+, Firefox, Chrome, Opera, Safari

//XMLHttpRequest.DONE == 4

//minify JS: https://jscompress.com/

(function () {

    loadSlickHTML();
    loadSlickCSS();
    loadSlickJS();
    loadSlickImage();

    function loadSlickHTML() {
        var htmlURL = "CustomForm1/CustomForm1.html";
        getSlickResource(htmlURL, handleHTMLCallback);
    }

    function handleHTMLCallback(data) {
        //var x = data;
    }

    function loadSlickCSS() {
        var cssURL = "CustomForm1/CustomForm1.css";
        getSlickResource(cssURL, handleCSSCallback);
    }

    function handleCSSCallback(data) {

    }

    function loadSlickJS() {
        var jsURL = "CustomForm1/CustomForm1.js";
        getSlickResource(jsURL, handleJSCallback);
    }

    function handleJSCallback(data) {

    }

    //https://stackoverflow.com/questions/35367830/load-an-image-from-a-xhr-request-and-then-pass-it-to-the-server
    function loadSlickImage() {
        var imageURL = "CustomForm1/ContactMe.png";
        getImageResource(imageURL, handleImageCallback);
    }

    function handleImageCallback(data) {
        showSlickImageOnScreen(data);
    }

    function getSlickResource(resourceURL, callback) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {  //Use 4 && 200 for a server request
                callback(xhr.response); //Outputs a DOMString by default
            }
        }

        xhr.open('GET', resourceURL, true);
        xhr.send();

    }

    function getImageResource(imageURL, callback) {
        var oReq = new XMLHttpRequest();
        oReq.open("GET", imageURL, true);
        oReq.responseType = "blob";

        oReq.onload = function (oEvent) {
            callback(oReq.response);
            // ...
        };
        oReq.send();
    }

    function showSlickImageOnScreen(blobData) {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(blobData);
        document.querySelector("#test").src = imageUrl;
    }

})();