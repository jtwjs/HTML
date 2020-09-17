const menuBar = document.querySelector(".menu-bar");
let selectedMenuBar;

const changeText = (elm, text) => {
  elm.innerText = text;
};

const inactivate = (elm) => {
  elm.classList.remove("active");
};

const activate = (elm) => {
  elm.classList.add("active");
  selectedMenuBar = elm;
};

const menuClickHandler = (e) => {
  let target = e.target;
  let dropTarget;
  while (!target.classList.contains("menu-list-wrap")) {
    if (target.classList.contains("drop-item")) {
      dropTarget = target;
    }

    target = target.parentNode;

    if (target.nodeName == "body") {
      target = null;
      return;
    }
  }

  if (dropTarget) {
    changeText(target.querySelector(".selected-item"), dropTarget.innerText);
  }

  if (selectedMenuBar) {
    inactivate(selectedMenuBar);
  }

  if (selectedMenuBar == target) {
    selectedMenuBar = null;
    return;
  }
  activate(target);
};

const init = () => {
  menuBar.addEventListener("click", menuClickHandler);
};

init();
