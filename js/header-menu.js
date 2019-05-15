const menu = document.getElementById("header-menu-list");
const btn = document.getElementById("toggle-menu-button");
const icon = document.getElementById("menu-icon");
btn.addEventListener("click", toggleMenu);

function toggleMenu() {
	menu.classList.toggle("display");
	btn.classList.toggle("active");
	icon.classList.toggle("fa-rotate-90");
}