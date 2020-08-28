const menuBtn = document.querySelector(".hamburgerBtn");

function openMenu() {
  menuBtn.classList.toggle("active");
}

function init() {
  menuBtn.addEventListener("click", openMenu);
}

init();
