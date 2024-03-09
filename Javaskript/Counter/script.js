
let counterElement = document.getElementById("counter");
let counter = 0;

function counterPlusOne() {
    counter = counter +1;
    counterElement.innerText = counter;
}