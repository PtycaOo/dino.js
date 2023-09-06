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