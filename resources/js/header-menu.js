includeHTML();
window.onload = function () {
    const btn = document.getElementById("toggle-menu-button");
    if (btn) {
        btn.addEventListener("click", toggleMenu);
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
	if (scrollTop >= headerHeight - 90) {
		headerBg.classList.add("display");
	} else {
		headerBg.classList.remove("display");
	}
}
window.onscroll = function () {
	displayHeaderBg()
};