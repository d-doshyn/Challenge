let Icon = document.getElementById("theme-icon");
let Button = document.getElementById("themes");
let body = document.querySelector("body");
let Model = document.querySelector(".model");
let Logo = document.querySelector(".main-image");
let Header = document.querySelector(".fixed-header");
let HeaderLogo = document.querySelector(".image-title");
let Search = document.querySelector(".search");
let ManText = document.querySelector("#mens");
let BoysText = document.querySelector("#boys");
let WomanText = document.querySelector("#womans");
let GirlsText = document.querySelector("#girls");

function ToggleTheme() {
	if (Icon.classList.contains("fa-sun")) {
		HeaderLogo.src = "img/white-bg/logo_white.png";
		Model.src = "img/white-bg/white-woman.png";
		Logo.src = "img/white-bg/logo_white.png";
		Header.classList.add("white-bg");
		body.classList.add("white-bg");
		Icon.classList.remove("fa-sun");
		Icon.classList.add("fa-moon");
		Search.classList.add(".white-bg");
		ManText.classList.add(".black-text");
		WomanText.classList.add(".black-text");
		GirlsText.classList.add(".black-text");
		BoysText.classList.add(".black-text");
	}
	else{
		Header.classList.remove("white-bg"); 
		body.classList.remove("white-bg");
		HeaderLogo.src = "img/logo-main.png";
		Model.src = "img/model-1.png";
		Logo.src = "img/logo-main.png";
		Icon.classList.add("fa-sun");
		Icon.classList.remove("fa-moon");
		Search.classList.remove(".white-bg");
		ManText.classList.remove(".black-text");
		WomanText.classList.remove(".black-text");
		GirlsText.classList.remove(".black-text");
		BoysText.classList.remove(".black-text");
	}
};

Button.onclick = ToggleTheme ;