const WWD = document.querySelectorAll(".wwd-container");
const aboutDesign = document.querySelectorAll(".text-container");

const isInViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  WWD.forEach((item) => {
    if (isInViewPort(item)) {
      item.classList.add("show");
    }
  });
  aboutDesign.forEach((item) => {
    if (isInViewPort(item)) {
      item.classList.add("show");
    }
  });
};
// EVENTS
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

// navbar

const navbar = document.querySelector(".navbar");
const overlayNav = document.querySelector(".overlay-nav");

let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-118px)";
      navbar.style.borderBottom = "0.5px solid #ededed";
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
// SLICK
$(".carousel-container").slick({
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});
