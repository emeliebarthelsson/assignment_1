const toggleMenuButton = document.querySelector(".navbar__toggle");
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll(".navbar__link");

toggleMenuButton.addEventListener("click", () => {
  navbarLinksContainer.classList.toggle("navbar__links--active");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("navbar__link--active")); // remove active class from all li

    e.currentTarget.classList.add("navbar__link--active"); // identify clicked link
  });
});