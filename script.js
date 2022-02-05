const body = document.querySelector("body"),
    nav = body.querySelector("nav"),
    icon = body.querySelector(".icon"),
    iconText = body.querySelector(".icon-text"),
    buttonToggleDarkMode = body.querySelector(".switch-mode"),
    circleToggleDarkMode = body.querySelector(".switch-mode .toggle");

buttonToggleDarkMode.addEventListener("click", () => {
    body.classList.toggle("darkmode");

    if (body.classList.contains("darkmode")) {
        iconText.innerHTML = 'Light Mode';
    } else {
        iconText.innerHTML = 'Dark Mode';
    }
})




const openCloseNavSide = body.querySelector(".header .close");

openCloseNavSide.addEventListener("click", () => {
    nav.classList.toggle('navClose');
})