const menu = document.getElementById("header-menu-list");
const btn = document.getElementById("toggle-menu-button");
btn.addEventListener("click", toggleMenu);

function toggleMenu() {
	menu.classList.toggle("display");
	btn.classList.toggle("active");
}