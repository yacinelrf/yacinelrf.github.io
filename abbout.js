let title = document.getElementById("h1");
let text = document.getElementById("p");

function adjustPosition() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    title.style.left = "35%";
    text.style.left = "5%";
  } else {
    title.style.left = "50vw";
    text.style.left = "50vw";
  }

  title.style.transition = "left 2s";
  text.style.transition = "left 3s";
}

// Exécuter au chargement et au redimensionnement
window.addEventListener("load", adjustPosition);
window.addEventListener("resize", adjustPosition);
