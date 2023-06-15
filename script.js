let navSections = document.querySelectorAll(".navSection");

navSections.forEach((navSection) => {
    navSection.querySelector(".mainPage").addEventListener("click", () => {
        navSection.classList.toggle('active');
    })
});

let toggleButton = document.getElementsByClassName("toggle_button")[0];

let navBarLinks = document.getElementsByClassName("nav_links")[0];

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
})

let aboutUs = document.getElementById("link_about");
let link = aboutUs.children[0];
let subPages = aboutUs.children[1];
link.addEventListener("click", () => {
    subPages.classList.toggle("active");
});