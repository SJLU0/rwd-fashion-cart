const headerElement = document.querySelector("header");

window.addEventListener("scroll", function () {
  headerElement.classList.toggle("sticky", window.scrollY > 0);
});
