let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slide");
console.log(slides);
let index = 0;
carousel();
function carousel() {
  if (slides != undefined) {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setTimeout(carousel, 8000);
}

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

let comment = document.getElementsByClassName("person");
console.log(comment);
let indexComment = 0;

function prevComment() {
  comment[indexComment].classList.remove("activeC");
  indexComment = indexComment - 1;
  if (indexComment < 0) {
    indexComment = comment.length - 1;
  }
  console.log(indexComment);
  comment[indexComment].classList.add("activeC");
}

function nextComment() {
  comment[indexComment].classList.remove("activeC");
  indexComment = indexComment + 1;
  if (indexComment === comment.length) {
    indexComment = 0;
  }
  console.log(indexComment);
  comment[indexComment].classList.add("activeC");
}

$(".toggle-btn").on("click", function () {
  $(this).toggleClass("active");
});

function priceDisplay(category) {
  let price = document.getElementsByClassName(category);
  console.log(category);
  Array.from(price).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  });
}

for (const titlePrice of document.getElementsByClassName("titlePrice")) {
  titlePrice.onmousemove = (e) => {
    const decimal = e.clientX / titlePrice.offsetWidth;
    const basePercent = 70,
      percentRange = 30,
      adjustablePercent = percentRange * decimal;

    const lightBluePercent = basePercent + adjustablePercent;

    titlePrice.style.setProperty("--bggradient", `${lightBluePercent}%`);
  };
}
