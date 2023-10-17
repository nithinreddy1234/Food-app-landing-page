

function toggleMenu() {
    var menu = document.querySelector(".menu");
    var hamburger = document.querySelector(".hamburger");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        hamburger.classList.add("active");

    } else {
        menu.style.display = "none";
        hamburger.classList.remove("active");

    }
}


