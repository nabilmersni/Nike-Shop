const loader = document.querySelector(".loader");
const nikeAnimation = document.querySelector(".header__nike__animation");
const shoesColor = document.querySelector(".header__shoes__colors");
let currentShoesColor;
//**********************element animation in load***********************/
const nav = document.querySelector(".nav");
const headerTitle = document.querySelector(".header__title");
const headerShoes = document.querySelector(".header__shoes-img");
const circles = document.querySelectorAll(".header__circle");

//**********************circles Parallax Effect***********************/
const header = document.querySelector(".header");
const circles__group = document.querySelector(".header__circle__group");

header.addEventListener("mousemove", (e) => {
  circles.forEach((circle) => {
    let valueX = (e.pageX * -1) / 100;
    let valueY = (e.pageY * -1) / 100;
    circle.style.cssText += `transform: translate(${valueX}px,${valueY}px);`;
  });
});

// const navNotch = window.getComputedStyle(nav, "::after");

const navAnimation = () => {
  nav.classList.add("nav__animation");
};
const navNotchAnimation = () => {
  nav.style.setProperty(
    "--boxAfterBackColor",
    "navNotchAnimation 1s ease-in 1s forwards"
  );
};
const headerTitleAnimation = () => {
  headerTitle.classList.add("header__title__animation");
};
const headerShoesAnimation = () => {
  headerShoes.classList.add("header__shoes-img__animation");
};
const circlesAnimation = () => {
  circles.forEach((circle) => {
    circle.classList.add("header__circle__animation");
  });
};

window.addEventListener("load", function () {
  setTimeout(function () {
    //just to make the preloader appear 2.5s
    nikeAnimation.play();
    navAnimation();
    navNotchAnimation();
    headerTitleAnimation();
    headerShoesAnimation();
    circlesAnimation();
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

//*********************slider logic*********************//
const carrousel = document.querySelector(".header__slider__carousel");
let isDragStarted = false;
let prevPageX, prevScrollLeft;
const dragStart = (e) => {
  isDragStarted = true;
  prevPageX = e.pageX;
  prevScrollLeft = carrousel.scrollLeft;
};
const dragEnd = () => {
  isDragStarted = false;
};

const dragging = (e) => {
  e.preventDefault();
  if (!isDragStarted) return;
  let posDiff = e.pageX - prevPageX;
  carrousel.scrollLeft = prevScrollLeft - posDiff;
};

carrousel.addEventListener("mousedown", dragStart);
carrousel.addEventListener("mouseup", dragEnd);
carrousel.addEventListener("mousemove", dragging);
