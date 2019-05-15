const menu = document.getElementById("header-menu-list");
const btn = document.getElementById("toggle-menu-button");
const icon = document.getElementById("menu-icon");
const body = document.getElementById("body");
const headerBg = document.getElementById('headerBg')


btn.addEventListener("click", toggleMenu);

window.onscroll = function() {displayHeaderBg()};

function toggleMenu() {
	menu.classList.toggle("display");
	btn.classList.toggle("active");
	icon.classList.toggle("fa-rotate-90");
}

function displayHeaderBg() {
	var scrollTop = window.scrollY;
	if (scrollTop > 0) {
		headerBg.classList.add("display");	
	}
	else {
		headerBg.classList.remove("display");
	}
	
}