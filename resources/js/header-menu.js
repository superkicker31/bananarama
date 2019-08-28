includeHTML();

window.onload = function () {
	console.log("js running");
	var btn = document.getElementById("toggle-menu-button");
	console.log(btn);
	if (btn) {
		console.log(btn);
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

		if (scrollTop >= headerHeight-90) {
			headerBg.classList.add("display");
		} else {
			headerBg.classList.remove("display");
		}

	}
window.onscroll = function() {displayHeaderBg()};
};