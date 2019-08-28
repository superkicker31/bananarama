includeHTML();

	
window.onload = function () {
console.log("aksjdhakjs");
	const btn = document.getElementById("toggle-menu-button");

	if (btn) {
		btn.addEventListener("click", toggleMenu);
	}

	function toggleMenu() {
		let menu = document.getElementById("header-menu-list");
		let icon = document.getElementById("menu-icon");
		menu.classList.toggle("display");
		btn.classList.toggle("active");
		icon.classList.toggle("fa-rotate-90");
	}

	function displayHeaderBg() {
		let header = document.getElementById('header');
		let headerBg = document.getElementById('headerBg');
		let headerHeight = header.offsetHeight;
		let scrollTop = window.scrollY;

		console.log(scrollTop);
		if (scrollTop >= headerHeight-90) {
			headerBg.classList.add("display");
		} else {
			headerBg.classList.remove("display");
		}

	}

window.onscroll = function() {displayHeaderBg()};

};