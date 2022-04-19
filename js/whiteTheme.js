let WhiteButton = document.getElementById("themes");
let body = document.querySelector("body");
let Model = document.querySelector(".model");
let Logo = document.querySelector(".main-image");
let Header = document.querySelector(".fixed-header");
let HeaderLogo = document.querySelector(".image-title");

WhiteButton.onclick = function () {
	body.style.backgroundColor = "white";
	body.style.color = "black";
	Header.style.backgroundColor = "white";
	Header.style.color = "black";
	HeaderLogo.src = "img/logo_white.png";
	Model.src = "img/white-woman.png";
	Logo.src = "img/logo_white.png";
};
