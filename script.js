let navSections = document.querySelectorAll(".navSection");

navSections.forEach((navSection) => {
    navSection.querySelector(".mainPage").addEventListener("click", () => {
        navSection.classList.toggle('active');
    })
});