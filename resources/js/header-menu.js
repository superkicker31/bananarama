includeHTML();

window.onload = function () {
    console.log("js running");
    const btn = document.getElementById("toggle-menu-button");
    const menu = document.getElementById("header-menu-list");
    const icon = document.getElementById("menu-icon");
    const header = document.getElementById('header');
    const headerBg = document.getElementById('headerBg');

    if (btn) {
        btn.addEventListener("click", toggleMenu);
    }

    function toggleMenu() {
        menu.classList.toggle("display");
        btn.classList.toggle("active");
        icon.classList.toggle("fa-rotate-90");
    }
};

function displayHeaderBg() {
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