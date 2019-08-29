window.onload = function () {
    const btn = document.getElementById("toggle-menu-button");
    for (let i = 1; i <= 5; i++) {
        if (btn) {
            btn.addEventListener("click", toggleMenu);
            break;
        } else {
            if (i === 5 && !btn) {
                alert("Site could not load correctly. Please refresh the page.")
            }
            location.reload();
        }
    }
};

function toggleMenu() {
    const menu = document.getElementById("header-menu-list");
    const icon = document.getElementById("menu-icon");

    menu.classList.toggle("display");
    icon.classList.toggle("fa-rotate-90");
}

function displayHeaderBg() {
    const header = document.getElementById("header");
    const headerBg = document.getElementById("headerBg");

    let headerHeight = header.offsetHeight;
    let scrollTop = window.scrollY;
    if (scrollTop >= headerHeight - 60) {
        headerBg.classList.add("display");
    } else {
        headerBg.classList.remove("display");
    }
}

window.onscroll = function () {
    displayHeaderBg()
};