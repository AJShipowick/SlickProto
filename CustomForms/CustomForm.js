//Pure JS to be added to customer website, no JQuery here.
//This code should call custom js/html/css and build the form based on specific preferences
// compatible with IE7+, Firefox, Chrome, Opera, Safari

//XMLHttpRequest.DONE == 4

//minify JS: https://jscompress.com/

(function () {

    loadRequiredJS();
    getCustomSliderOptions();


    onSuccess();  //assume success for testing...

    function loadRequiredJS() {
        //Load extra JS:
        var imported = document.createElement('script');
        imported.src = 'CustomForms/CustomForm1/CustomForm1.js';
        document.head.appendChild(imported);
    }

    function getCustomSliderOptions() {
        // var xmlhttp;
        // xmlhttp = new XMLHttpRequest();
        // xmlhttp.onreadystatechange = function () {
        //     if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) { 
        //         onSuccess(xmlhttp.responseText);
        //     } else if (xmlhttp.status === 400) {
        //         alert('There was an error 400');
        //     }
        //     else {
        //         alert('something else other than 200 was returned');
        //     }
        // }
        // xmlhttp.open("GET", "http://cors-anywhere.herokuapp.com/" + "CustomForms/CustomForm1/CustomForm1.js", true);
        // xmlhttp.send();
    }

    function onSuccess() {

        //Work with JSON response from success to build html/css....
        
        buildHTML();
        buildCSS();
    }

    function buildHTML() {
        //example: https://mattfrear.com/2010/03/01/generating-and-injecting-html/

        var btn = document.createElement("div");
        btn.setAttribute("id", "slider");
        btn.setAttribute("style", "right:-342px")
        document.body.appendChild(btn);

        var btn2 = document.createElement("div")//<div id='sidebar' onclick='open_panel()'><img src='ContactMe.png'></div>")
        btn2.setAttribute("id", "sideBar");
        btn2.setAttribute("onclick", "open_panel()");
        btn2.setAttribute("src", "CustomForms/CustomForm1/ContactMe.png");
        btn.appendChild(btn2);

        var btn3 = document.createElement("div")//<div id='header'>")
        btn3.setAttribute("id", "header");
        btn.appendChild(btn3);

        var btn4 = document.createElement("h2")//<h2>Contact Form</h2>")
        btn4.innerHTML = "Contact Form";
        btn3.appendChild(btn4);

        var btn5 = document.createElement("p"); //<p>This is my form.Please fill it out.It's awesome!</p>")
        btn5.innerHTML = "This is my form.  Please fill it out.It's awesome!";
        btn3.appendChild(btn5);

        var btn6 = document.createElement("input")//<input name='dname' type='text' value='Your Name'>")
        btn6.setAttribute("name", "dname");
        btn6.setAttribute("type", "text");
        btn6.setAttribute("value", "Your Name");
        btn3.appendChild(btn6);
    }

    function buildCSS() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML += '#slider { width:500px;top:100px;position:absolute; }';
        style.innerHTML += '#sidebar { position:absolute;top:180px;left:113px;box-shadow:0 0 8px gray;}';
        style.innerHTML += '#sidebar1 { position:absolute;top:180px;left:113px;box-shadow:0 0 8px gray;}';
        style.innerHTML += '#header { width:260px;height:520px;position:absolute;right:0;border:1px solid #d8d8d8;margin-left:40px;padding:20px 40px;border-radius:3px;box-shadow:0 0 8px gray; }';
        // style.innerHTML += 'body { overflow:hidden;width:960px;margin:10px auto;}';
        // style.innerHTML += 'p { border-bottom:1px dotted #d8d8d8;padding-bottom:15px;font-size:17px;}';
        document.getElementsByTagName('head')[0].appendChild(style);
    }

})();