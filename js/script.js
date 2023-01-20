let loader = document.querySelector(".loader");
const nikeAnimation = document.querySelector(".header__nike__animation");

window.addEventListener("load", function () {
  setTimeout(function () {
    // nikeAnimation.play();
    loader.style.display = "none";
    document.body.style.overflowY = "visible";
  }, 2500);
});
