var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
    fans.innerText = "123k";
});

fish.addEventListener("mouseover", function () {
    fish.innerText = "47k";
});

pets.addEventListener("mouseover", function () {
    pets.innerText = "20k";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

toggle.addEventListener("click", function () {
    if (body.classList.contains("lght")) {
        body.classList.remove("light");
        ball.classList.remove("move-right");
        h1.innerText = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        h1.innerText = "Party Quincy";
    }
});