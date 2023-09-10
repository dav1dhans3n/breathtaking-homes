// This file contains Navbar and Footer javascript.
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function deckingDoc() {
  window.location.assign("decking.html");
}

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  //   first check to see if we are inside a dropdown menu, ignore this click if we are
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  // if we are in a dropdown menu, keep it open
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  // close all the other dropdowns except for this one
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
