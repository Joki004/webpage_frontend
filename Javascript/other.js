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

function priceDisplay(category) {
  let price = document.getElementsByClassName(category);
  console.log(price);
  Array.from(price).forEach((x) => {
    if (x.style.display === "none" || x.style.display === "") {
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

const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;

  while (prev === next) next = rand(min, max);

  return next;
};

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
    combination = combinations[index];

  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;

  prev = index;
}, 1500);
