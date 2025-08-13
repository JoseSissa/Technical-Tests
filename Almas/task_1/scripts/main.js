console.log("Hola ");
const hamburguerButton = document.getElementById("hamburguer-button");
const headerMenuMobile = document.getElementById("header-menu_mobile");
const closeMenuButton = document.getElementById("close-menu-button");

hamburguerButton.addEventListener("click", () => {
  headerMenuMobile.classList.remove("menu-hidden");
});

closeMenuButton.addEventListener("click", () => {
  headerMenuMobile.classList.add("menu-hidden");
});
