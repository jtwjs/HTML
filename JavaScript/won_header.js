const nav = document.querySelector(".header__nav");
const secondaryMenuBtn = document.querySelectorAll(".header__nav--secondary--list-item");
const secondaryMenuBar = document.querySelector(".header__nav--secondary");
const primaryMenuBar = document.querySelector(".header__nav--primary");
const dropMenu = document.querySelector(".currency_picker");

function hideSearchBar(event) {
  event.target.parentNode.parentNode.querySelector(".menu-title").classList.remove("dis");
  event.target.parentNode.classList.add("dis");
  event.target.parentNode.classList.add("hide");
}

function showSearchBar(event) {
  const search_form = document.getElementById("search_form");
  const search_input = document.getElementById("search_input");
  event.target.querySelector(".menu-title").classList.add("dis");
  search_form.classList.remove("hide");
  search_form.classList.remove("dis");
  search_input.focus();
  search_input.addEventListener("focusout", hideSearchBar);
}

function init() {
  secondaryMenuBtn[0].addEventListener("click", showSearchBar);
  window.addEventListener("scroll", () => {
    let headerHeight = document.querySelector(".header").offsetHeight;
    console.log("높이:" + headerHeight);
    let scrollLocation = document.documentElement.scrollTop;
    if (scrollLocation < 120 && scrollLocation > 60) {
      var st1 = scrollLocation;
    }
    if (primaryMenuBar.offsetTop <= 0) {
      primaryMenuBar.style.top = 0 + "px";
    } else if (primaryMenuBar.offsetTop >= 120) {
      primaryMenuBar.style.top = 60 + "px";
    } else {
      primaryMenuBar.style.top = headerHeight - st1 + "px";
    }

    if (scrollLocation > 45) {
      nav.style.position = "fixed";
    } else {
      nav.style.position = "relative";
    }
  });
}

init();
