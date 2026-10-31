/******************************/
/* menu openen de MENU button */
/******************************/

const deMenuButton = document.querySelector("header > button")
const deNav = document.querySelector("nav")

deMenuButton.addEventListener("click", openMenu)

function openMenu() {
  deNav.classList.add("is-open")

}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

const deCloseButton = document.querySelector("nav button")

deCloseButton.addEventListener("click", closeMenu)

function closeMenu() {
  deNav.classList.remove("is-open")

}

