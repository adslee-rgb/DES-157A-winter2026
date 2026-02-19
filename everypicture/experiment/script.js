(function(){
    'use strict';
    console.log('reading js');

    const img = document.getElementById("fadeImage");
    img.addEventListener("click", function () {
    img.classList.toggle("faded");
    });

    const images = document.querySelectorAll(".bg");
    let bgIsImage = false;

    images.forEach(function (img) {
    img.addEventListener("click", function () {
        if (!bgIsImage) {
        document.body.style.backgroundImage = `url("${img.src}")`;
        document.body.style.backgroundColor = "transparent";
        bgIsImage = true;
        } else {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#f3f3f3"; // match your CSS
        bgIsImage = false;
        }
    });
    });


})();

