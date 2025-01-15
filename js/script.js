// Hent elementer
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("openOverlay");
const closeBtn = document.getElementById("closeOverlay");
console.log(openBtn);
// Åbn overlayet
openBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  setTimeout(function () {
    overlay.style.opacity = 1;
  }, 50);
});
/* slower display? */

// Luk overlayet
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  overlay.style.opacity = 0;
});

// Luk overlayet ved klik udenfor boksen
overlay.addEventListener("click", (event) => {
  overlay.classList.add("hidden");
});

/* Header */

window.addEventListener("scroll", function () {
  console.log(this.window.scrollY);
  if (this.window.scrollY <= 50) {
    this.document.querySelector("header").classList.add("menu-background");
  } else {
    this.document.querySelector("header").classList.remove("menu-background");
  }
});
