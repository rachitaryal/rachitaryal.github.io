const header = document.querySelector(".site-header");

function isUnderHeader(section) {
  const line = header.offsetHeight;
  const box = section.getBoundingClientRect();
  return box.top <= line && box.bottom >= line;
}

function placeHeader() {
  const over = (selector) =>
    [...document.querySelectorAll(selector)].some(isUnderHeader);
  header.classList.toggle("on-dark", over("[data-dark]"));
  header.classList.toggle("on-paper", over(".sheet"));
}

placeHeader();
document.addEventListener("scroll", placeHeader, { passive: true });
window.addEventListener("resize", placeHeader);
