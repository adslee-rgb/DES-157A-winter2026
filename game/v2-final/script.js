(function () {
'use strict';
console.log('reading js');

/* elements */
const playBtn = document.querySelector("#playBtn");
const startScreen = document.querySelector("#startScreen");
const orderScreen = document.querySelector("#orderScreen");
const startGameBtn = document.querySelector("#startGame");
const orderText = document.querySelector("#orderText");
const mainGame = document.querySelector("main");

/* drink options */
const drinks = [
    "Strawberry Matcha",
    "Coconut Matcha",
    "Black Sesame Matcha"
];

/* hide game at start */
mainGame.style.opacity = "0";

/* PLAY BUTTON */
playBtn.addEventListener("click", function(){

    startScreen.style.opacity = "0";

    setTimeout(function(){

        startScreen.style.display = "none";
        orderScreen.classList.remove("hidden");

        /* random drink */
        const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
        orderText.innerHTML = randomDrink;

    }, 600);

});


/* START MAKING DRINK BUTTON */
startGameBtn.addEventListener("click", function(){

    orderScreen.style.opacity = "0";

    setTimeout(function(){

        orderScreen.style.display = "none";

        /* fade in game */
        mainGame.style.opacity = "1";

    }, 600);

});

})();