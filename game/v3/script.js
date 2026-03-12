(function(){

const correctSound = new Audio("sounds/yay.mp3");
const wrongSound = new Audio("sounds/yourmom.mp3");

const homeScreen = document.getElementById("homeScreen")
const orderScreen = document.getElementById("orderScreen")
const gameScreen = document.getElementById("gameScreen")

const playBtn = document.getElementById("playBtn")
const startMakingBtn = document.getElementById("startMakingBtn")

const orderText = document.getElementById("orderText")

const ingredientButtons = document.querySelectorAll(".ingredient")

const cup = document.getElementById("cup")

const checkDrink = document.getElementById("checkDrink")
const result = document.getElementById("result")
const nextOrder = document.getElementById("nextOrder")

let playerDrink = []

let currentOrder = []

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
]


function changeScreen(newScreen){

homeScreen.classList.remove("active")
orderScreen.classList.remove("active")
gameScreen.classList.remove("active")

newScreen.classList.add("active")

}


playBtn.addEventListener("click",function(){

changeScreen(orderScreen)

generateOrder()

})


startMakingBtn.addEventListener("click",function(){

changeScreen(gameScreen)

})


function generateOrder(){

const randomDrink = drinks[Math.floor(Math.random()*drinks.length)]

currentOrder = randomDrink.ingredients

orderText.innerText = randomDrink.name + 
" (" + randomDrink.ingredients.join(", ") + ")"

playerDrink = []
cup.innerHTML = ""
result.innerText = ""

}


ingredientButtons.forEach(button => {

button.addEventListener("click",function(){

const ingredient = button.dataset.ingredient

playerDrink.push(ingredient)

const item = document.createElement("div")

item.classList.add("cupItem")

item.innerText = ingredient

cup.appendChild(item)

})

})


checkDrink.addEventListener("click",function(){

let correct = true

if(playerDrink.length !== currentOrder.length){

correct = false

}else{

for(let i=0;i<currentOrder.length;i++){

if(playerDrink[i] !== currentOrder[i]){

correct = false

}

}

}

if(correct){

result.innerText = "Nice job! Correct!"
correctSound.play()

}else{

result.innerText = "Nope, try a new order :/"
wrongSound.play()

}

})


nextOrder.addEventListener("click",function(){

changeScreen(orderScreen)

generateOrder()

})

})();