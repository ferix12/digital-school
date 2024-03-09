
let score = 0;

let box = document.querySelector("#click-me");
let scoreBox = document.querySelector("#score");

setInterval(function() {
    setBoxToRandPos();
}, 2000);

box.onclick = function () {
    score = score + 1;
    scoreBox.innerText = score;

    setBoxToRandPos();
}



function setBoxToRandPos() {
    let x = randInt(0, window.innerWidth -30);
    let y = randInt(0, window.innerHeight -30);
    box.style.left = x + "px";
    box.style.top = y + "px";
}
    
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

