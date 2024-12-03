const toggleMenuButton = document.querySelector(".navbar__toggle");
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll(".navbar__link");

// event listener navbar
toggleMenuButton.addEventListener("click", () => {
  navbarLinksContainer.classList.toggle("navbar__links--active");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("navbar__link--active")); // remove active class from all li

    e.currentTarget.classList.add("navbar__link--active"); // identify clicked link
  });
});

// event listener to navigate to form 
const addToCartButton = document.querySelector(".container__button");

addToCartButton.addEventListener("click", () => {
  window.location.href = "./pages/form.html";
});