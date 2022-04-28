let Icon = document.getElementById("theme-icon");
let Button = document.getElementById("themes");
let body = document.querySelector("body");
let Model = document.querySelector(".model");
let Logo = document.querySelector(".main-image");
let Header = document.querySelector(".fixed-header");
let HeaderLogo = document.querySelector(".image-title");

function ToggleTheme() {
	if (Icon.classList.contains("fa-sun")) {
		HeaderLogo.src = "img/logo_white.png";
		Model.src = "img/white-woman.png";
		Logo.src = "img/logo_white.png";
		Header.classList.add("white-bg");
		body.classList.add("white-bg");
		Icon.classList.remove("fa-sun");
		Icon.classList.add("fa-moon");
	}
	else{
		Header.classList.remove("white-bg"); 
		body.classList.remove("white-bg");
		HeaderLogo.src = "img/logo-main.png";
		Model.src = "img/model-1.png";
		Logo.src = "img/logo-main.png";
		Icon.classList.add("fa-sun");
		Icon.classList.remove("fa-moon");
	}
};

Button.onclick = ToggleTheme ;