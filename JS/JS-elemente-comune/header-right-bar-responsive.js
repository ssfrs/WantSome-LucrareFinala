let hamburgher = document.getElementById("hamburgher");
let responsiveElements = document.getElementsByClassName("responsive-element");
let burger = document.getElementById("burger");

function displayHiddenMenu() {

  for (let i = 0; i < responsiveElements.length; i++) {
    if (responsiveElements[i].className === "responsive-element") {
      responsiveElements[i].className += " r-e-changeses";
    } else {
      responsiveElements[i].className = "responsive-element";
    }
  }
}

function transformBurger() {
  if (burger.className === "burger") {
    burger.className += " b-transform";
  } else {
    burger.className = "burger";
  }
}

function responsiveHeader() {

displayHiddenMenu();
transformBurger();

}

hamburgher.addEventListener("click", responsiveHeader);