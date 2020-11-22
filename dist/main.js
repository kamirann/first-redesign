const WWD = document.querySelectorAll(".wwd-container");

const isInViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  WWD.forEach((item) => {
    if (isInViewPort(item)) {
      item.classList.add("show");
    }
  });

// EVENTS
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

// navbar

const navbar = document.querySelector(".navbar");

let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-118px)";
    }
    setTimeout(() => {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};
