// Hent elementer
const overlay = document.getElementById("overlay");
const openBtns = document.querySelectorAll(".tickets");
const openBtnM = document.getElementById("openOverlayMobile");
const closeBtn = document.getElementById("closeOverlay");

openBtns.forEach(function (btn) {
  btn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    setTimeout(function () {
      overlay.style.opacity = 1;
    }, 50);
  });
});

// Åbn overlayet

/* slower display? */

// Luk overlayet
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  overlay.style.opacity = 0;
});

// Luk overlayet ved klik udenfor boksen
/* overlay.addEventListener("click", (event) => {
  overlay.classList.add("hidden");
}); */

/* Header */

window.addEventListener("scroll", function () {
  console.log(this.window.scrollY);
  if (this.window.scrollY >= 50) {
    this.document.querySelector("header").classList.add("menu-background");
  } else {
    this.document.querySelector("header").classList.remove("menu-background");
  }
});

/* Burger menu */
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  /* Open menu */
  burgerMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
  });
});
