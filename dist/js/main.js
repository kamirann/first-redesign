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

<<<<<<< HEAD:dist/main.js
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
=======
// SLICK
$(".carousel-container").slick({
  nextArrows: document.querySelector("#slick-next"),
  prevArrows: document.querySelector("#slick-prev"),
  dots: true,
  customPaging: function (slider, i) {
    return '<div class="dots"></div>';
  },
});
>>>>>>> e3627fbd9d62a633a63bdedda4c76ccca41f91a4:dist/js/main.js
