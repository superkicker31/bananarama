includeHTML();

	
window.onload = function () {
	const menu = document.getElementById("header-menu-list");
	const btn = document.getElementById("toggle-menu-button");
	const icon = document.getElementById("menu-icon");
	const headerBg = document.getElementById('headerBg');
	const header = document.getElementById('header');

	if (btn) {
		btn.addEventListener("click", toggleMenu);
	}

	function toggleMenu() {
		menu.classList.toggle("display");
		btn.classList.toggle("active");
		icon.classList.toggle("fa-rotate-90");
	}

	function displayHeaderBg() {
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