//Pure JS to be added to customer website, no JQuery here.
//This code should call custom js/html/css and build the form based on specific preferences
// compatible with IE7+, Firefox, Chrome, Opera, Safari

//XMLHttpRequest.DONE == 4
//minify JS: https://jscompress.com/

(function () {
    //create parent element
    var sliderDiv = document.createElement("div");
    sliderDiv.setAttribute("id", "slickSlider");
    document.body.appendChild(sliderDiv);

    loadSlickHTML();
    loadSlickCSS();
    loadSlickJS();

    //todo, this timeout is not the best solution.
    //But...the image will not assign to the HTML property unless there is a timelapse in this call......sometimes....
    setTimeout(
        function () {
            loadSlickImage();
        }, 100);


    function loadSlickHTML() {
        var htmlURL = "CustomForm1/CustomForm1.html";
        getSlickResource(htmlURL, handleHTMLCallback);
    }

    function handleHTMLCallback(data) {
        document.getElementById('slickSlider').innerHTML = data;
    }

    function loadSlickCSS() {
        var cssURL = "CustomForm1/CustomForm1.css";
        getSlickResource(cssURL, handleCSSCallback);
    }

    function handleCSSCallback(data) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = data;
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    function loadSlickJS() {
        var jsURL = "CustomForm1/CustomForm1.js";
        getSlickResource(jsURL, handleJSCallback);
    }

    function handleJSCallback(data) {
        var script = document.createElement('script');
        script.innerHTML = data;
        document.getElementsByTagName('head')[0].appendChild(script);
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
            } else {
                //todo handle errors
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
        };
        oReq.send();
    }

    function showSlickImageOnScreen(blobData) {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(blobData);
        document.querySelector("#slickImage").src = imageUrl;
    }

})();