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

// JAVASCRIPT FOR POP-UP SECTION

let eventBoxes = document.querySelectorAll(".eventBox");
console.log(eventBoxes)
let overlay = document.getElementsByClassName("overlay")[0];
console.log(overlay)
let closeButtons = document.querySelectorAll(".closeButton");

eventBoxes.forEach((eventBox) => {
    eventBox.addEventListener("click", () => {
        overlay.classList.toggle('active');
        let popupNum = getElementIndex(eventBox);
        let popup = document.querySelectorAll(".popup")[popupNum];
        if (eventBox.parentNode.classList.contains('pastEvents')) {
            popup = document.querySelectorAll(".popup2")[popupNum];
        }
        console.log(popup);
        popup.classList.toggle('show');
    })
})

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        overlay.classList.toggle('active');
        let popup = closeButton.parentElement;
        popup.classList.toggle('show');
    })
})

function getElementIndex(element) {
    return Array.from(element.parentNode.children).indexOf(element);
}