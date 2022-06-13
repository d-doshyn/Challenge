let Icon = document.getElementById("theme-icon");
let Button = document.getElementById("themes");
let body = document.querySelector("body");
let Model = document.querySelector(".model");
let Logo = document.querySelector(".main-image");
let Header = document.querySelector(".fixed-header");
let HeaderLogo = document.querySelector(".image-title");
let Search = document.querySelector(".search");
let Mark = document.querySelectorAll(".text-mark");
let ShoppingCart = document.querySelector(".fa-shopping-cart");

function ToggleTheme() {
	if (Icon.classList.contains("fa-sun")) {
		HeaderLogo.src = "img/white-bg/logo_white.png";
		Model.src = "img/white-bg/white-woman.png";
		Logo.src = "img/white-bg/logo_white.png";
		Header.classList.add("white-bg");
		body.classList.add("white-bg");
		Icon.classList.remove("fa-sun");
		Icon.classList.add("fa-moon");
		Search.classList.add("white-bg");
		ShoppingCart.classList.add("white-bg");
		for (var el of Mark) {
			el.classList.add("black-text");
		}
	}
	else {
		Header.classList.remove("white-bg");
		body.classList.remove("white-bg");
		HeaderLogo.src = "img/logo 2.png";
		Model.src = "img/model-1.png";
		Logo.src = "img/logo 2.png";
		Icon.classList.add("fa-sun");
		Icon.classList.remove("fa-moon");
		Search.classList.remove("white-bg");
		ShoppingCart.classList.remove("white-bg");
		for (var el of Mark) {
			el.classList.remove("black-text");
		}
	}
};


Button.onclick = ToggleTheme;
