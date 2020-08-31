const thumbnail = document.querySelectorAll(".thumbnail-wrap");
const header = document.querySelector(".header");
function showText() {
  this.style.opacity = 0.3;
  this.style.filter = "blur(15px)";
  this.parentNode.querySelector(".text-wrap").classList.add("active");
}

function hideText() {
  this.style.opacity = 1;
  this.style.filter = "blur(0)";
  this.parentNode.querySelector(".text-wrap").classList.remove("active");
}

function init() {
  [].forEach.call(thumbnail, function (item) {
    item.addEventListener("mouseenter", showText);
  });
  [].forEach.call(thumbnail, function (item) {
    item.addEventListener("mouseleave", hideText);
  });

  window.addEventListener("scroll", () => {
    let scrollLocation = document.documentElement.scrollTop;
    if (scrollLocation > 25) {
      header.style.backgroundColor = "#fff";
      header.style.boxShadow = "0px 5px 10px 0px rgba(0,0,0,.25)";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
    }
  });
}

init();
