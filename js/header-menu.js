includeHTML();

window.onload = function () {
	const menu = document.getElementById("header-menu-list");
	const btn = document.getElementById("toggle-menu-button");
	const icon = document.getElementById("menu-icon");
	const body = document.getElementById("body");
	const headerBg = document.getElementById('headerBg');
	
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
		var scrollTop = window.scrollY;
		if (scrollTop > 0) {
			headerBg.classList.add("display");	
		}
		else {
			headerBg.classList.remove("display");
		}
		
	}
	
window.onscroll = function() {displayHeaderBg()};

