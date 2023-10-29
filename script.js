const dino =document.getElementById("dino");
const rock = document.getElementById("rock");

document.addEventListener("keydown", function(event){
    jump();
})

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump")
    } 
    setTimeout(function(){
        dino.classList.remove("jump")
    },300)
}

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump")
    } 
    setTimeout(function(){
        dino.classList.remove("jump")
    },300)
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    if(rockLeft < 50 && rockLeft > 0 && dinoTop >=140){
        alert("GameOver!")
    }
},10)