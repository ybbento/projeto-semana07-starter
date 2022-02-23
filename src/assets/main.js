window.onload = () => {
	const menuS = document.querySelector("#burger-menu");
	const showB = document.querySelector(".burger-button-icon");
	const closeB = document.querySelector(".burger-button-icon-close");
	const bodyS = document.querySelector("body");
	let isClosed = true;

	const burgerB = document.querySelector("#burger-button");

	burgerB.addEventListener("click", (event) => {
		if (isClosed) {
			showB.style.display = "none";
			closeB.style.display = "block";
			menuS.style.display = "block";
			bodyS.style.overflow = "hidden";

			isClosed = false;
		} else {
			showB.style.display = "block";
			closeB.style.display = "none";
			menuS.style.display = "none";
			bodyS.style.overflow = "visible";
			isClosed = true;
		}
	});

	const form = document.querySelector(".contact-form");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const data = {
			title: event.target[0].value,
			email: event.target[1].value,
			message: event.target[2].value,
		};
		console.log(data);
	});
};
