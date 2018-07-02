// var userName = prompt("what is your name?");
// alert("Nice to meet you, "+ userName);
// console.log("Also great to meet you, "+userName);z

var h1 = document.querySelector("h1");
var isRed = false;

setInterval(function(){
    if (isRed){
        h1.style.background ="white";
    } else {
        h1.style.background ="black";
    }
    isRed= !isRed;
}, 1000);
//h1.style.color = "blue";
