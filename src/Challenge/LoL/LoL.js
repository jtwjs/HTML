const blossom = document.querySelector(".spirit-blossom-mark");

function activate(elm) {
  elm.classList.toggle("activate");
}

function blossomHandler(e) {
  let target = e.target;
  while (!target.classList.contains("baundary--wrap--wrap")) {
    target = target.parentNode;
  }
  activate(target);
}

function init() {
  blossom.addEventListener("click", blossomHandler);
}

init();
