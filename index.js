let toggleState = false;

const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";

};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let run = false;
function ExplosiveEffect() {
  let bomb = document.querySelector(".name");
  
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    bomb.innerText = bomb.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return bomb.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= bomb.dataset.value.length) {
      clearInterval(interval);
     
    }

    iteration += 1 / 3;
  }, 10);
  
}

let arrow = "nav-toggle";
console.log(arrow);

function growShrink(elementId, minSize, maxSize, duration) {
  const element = document.getElementById(elementId);
  console.log(element);

 
  const interval = duration / 2;
  let currentSize = minSize;
  let growing = true;

  setInterval(function () {
    if (growing) {
      currentSize += 1;
      if (currentSize >= maxSize) {
        currentSize = maxSize;
        growing = false;
      }
    } else {
      currentSize -= 1;
      if (currentSize <= minSize) {
        currentSize = minSize;
        growing = true;
      }
    }
    element.style.fontSize = currentSize + "px";
    element.style.width = currentSize + "px";
    element.style.height = currentSize + "px";
  }, interval);
}

function getToggleButtonState() {
  if (toggleState == true) {
    toggleState = false;
  } else {
    toggleState = true;
    if (!run) {
      ExplosiveEffect();
      run = true;
    }
  }
 
}


if (!toggleState) {
  growShrink(arrow, 50, 100, 90);
}

let ticking = false;
let prevScrollY = window.scrollY;
function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      console.log(window.scrollY);
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        toggleNav();
      }  else if (currentScrollY === 0) {
        toggleNav();
      }
   
      prevScrollY = currentScrollY;
      ticking = false;
    });
    ticking = true;
  }
}


//window.addEventListener("scroll", handleScroll, false);
// window.addEventListener("wheel", handleScroll, false);
window.addEventListener("touchmove", handleScroll, false);
window.addEventListener("load", ExplosiveEffect, false);



document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowDown") {
    handleScroll();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp") {
    handleScroll();
  }
});

