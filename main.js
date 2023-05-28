const button_up = document.getElementById("button_up");

window.addEventListener("scroll", () => {
    window.pageYOffset > document.documentElement.clientHeight ? button_up.style.display = "block" : button_up.style.display = "none";
});
button_up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})