const revealElements = document.querySelectorAll(".reveal-on-scroll");

const showOnScroll = () => {
  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    const threshold = window.innerHeight * 0.85;
    if (top < threshold) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
