(function(){

document.addEventListener("DOMContentLoaded", function(){

//
const correctSound = new Audio("sounds/yay.mp3");
const wrongSound = new Audio("sounds/yourmom.mp3");

// SCREENS
const homeScreen = document.querySelector("#homeScreen");
const orderScreen = document.querySelector("#orderScreen");
const gameScreen = document.querySelector("#gameScreen");

// BUTTONS
const playBtn = document.querySelector("#playBtn");
const startMakingBtn = document.querySelector("#startMakingBtn");
const checkDrink = document.querySelector("#checkDrink");
const nextOrder = document.querySelector("#nextOrder");

// TEXT / DISPLAY
const orderText = document.querySelector("#orderText");
const result = document.querySelector("#result");
const cup = document.querySelector("#cup");

// INGREDIENTS
const ingredientButtons = document.querySelectorAll(".ingredient");

let playerDrink = [];
let currentOrder = [];

const drinks = [
{
    name:"Coconut Matcha Cloud",
    ingredients:["Matcha Foam","Coconut"]
},
{
    name:"Black Sesame Foam Hojicha",
    ingredients:["Hojicha","Milk","Black Sesame Foam"]
},
{
    name:"Strawberry Matcha Latte",
    ingredients:["Matcha","Strawberry","Milk"]
},
];

// SCREEN SWITCH
function changeScreen(newScreen){
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    newScreen.classList.add("active");
}

// PLAY BUTTON
playBtn.addEventListener("click", function(){
    changeScreen(orderScreen);
    generateOrder();
});

// START MAKING
startMakingBtn.addEventListener("click", function(){
    changeScreen(gameScreen);
});

// GENERATE ORDER
function generateOrder(){
    const randomDrink = drinks[Math.floor(Math.random()*drinks.length)];

    currentOrder = randomDrink.ingredients;

    orderText.innerText =
        randomDrink.name + " (" + randomDrink.ingredients.join(", ") + ")";

    playerDrink = [];
    cup.innerHTML = "";
    result.innerText = "";
}

// INGREDIENT CLICK
ingredientButtons.forEach(button => {
    button.addEventListener("click", function(){

        const ingredient = button.dataset.ingredient;
        playerDrink.push(ingredient);

        const item = document.createElement("div");
        item.classList.add("cupItem");
        item.innerText = ingredient;

        cup.appendChild(item);
    });
});

// CHECK DRINK
checkDrink.addEventListener("click", function(){

    let correct = true;

    if(playerDrink.length !== currentOrder.length){
        correct = false;
    } else {
        for(let i = 0; i < currentOrder.length; i++){
            if(playerDrink[i] !== currentOrder[i]){
                correct = false;
                break;
            }
        }
    }

    if(correct){
        result.innerText = "Nice job! Correct!";
        correctSound.play();
    } else {
        result.innerText = "Nope, try a new order :/";
        wrongSound.play();
    }

});

// NEXT ORDER
nextOrder.addEventListener("click", function(){
    changeScreen(orderScreen);
    generateOrder();
});

});

})();