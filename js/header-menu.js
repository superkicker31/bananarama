includeHTML();

	
window.onload = function () {
const menu = document.getElementById("header-menu-list");
const btn = document.getElementById("toggle-menu-button");
const icon = document.getElementById("menu-icon");
const body = document.getElementById("body");
const headerBg = document.getElementById('headerBg');
const header = document.getElementById('header');	
	if (btn) {
		btn.addEventListener("click", toggleMenu);
	}	

	function toggleMenu() {
		console.log("asdas");
		menu.classList.toggle("display");
		btn.classList.toggle("active");
		icon.classList.toggle("fa-rotate-90");
	}

	
}
function displayHeaderBg() {
		var headerHeight = header.offsetHeight;
		var scrollTop = window.scrollY;

		console.log(scrollTop);
		if (scrollTop >= headerHeight) {
			headerBg.classList.add("display");	
		}
		else {
			headerBg.classList.remove("display");
		}
		
	}
	
window.onscroll = function() {displayHeaderBg()};

