const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", showe);
closeMenu.addEventListener("click", close);

function showe() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-150%";
}
