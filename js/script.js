const loader = document.querySelector(".loader");
const nikeAnimation = document.querySelector(".header__nike__animation");
const shoesColor = document.querySelector(".header__shoes__colors");
let currentShoesColor;
window.addEventListener("load", function () {
  setTimeout(function () {
    // nikeAnimation.play();
    loader.style.display = "none";
    document.body.style.overflowY = "visible";
  }, 2500);
});

shoesColor.addEventListener("click", function (e) {
  if (e.target.type === "radio") {
    currentShoesColor = e.target.value;
    console.log(currentShoesColor);
  }
});
