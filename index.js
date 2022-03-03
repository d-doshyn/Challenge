let area = document.querySelector(".search-area");
let search = document.querySelector(".search");
let all = document.querySelector(".all-elements");

search.onclick = function () {
	area.style.display = "flex";
}

all.onclick = function () {
	area.style.display = "none";
}

document.querySelector("#elastic").oninput = function () {
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll(".elastic li");
	if (val != '') {
		elasticItems.forEach(function (elem) {
			if (elem.innerText.search(val) == -1) {
				elem.classList.add("hide");
			}
			else {
				elem.classList.remove("hide");
			}
		});
	}
	else {
		elasticItems.forEach(function (elem) {
			elem.classList.remove("hide");
		});
	}
}
