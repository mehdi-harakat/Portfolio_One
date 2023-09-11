const cursorMove = document.querySelector(".cursor-anime");
const dark = document.querySelector(".dark-mode");
const upBtn = document.querySelector(".up-btn");
const headerOne = document.querySelector("header");
const navBar = document.querySelector(".nav-bar");
const downloadBtn = document.getElementById("download-resume");
const servCards = document.querySelectorAll(".services .cards .box");
const servHolder = document.querySelectorAll(".services .cards .holder");
const qualTogglers = document.querySelectorAll(
	".qualification .togglers .educat-exper"
);
const folioBtns = document.querySelectorAll(".portfolio .holder .clickOne");
const cardsFilter = document.querySelectorAll(".portfolio .boxes a");




function closeNav() {
	navBar.classList.toggle("active");
}

window.addEventListener("scroll", () => {
	if (scrollY >= 90) {
		headerOne.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
	} else {
		headerOne.style.boxShadow = "none";
	}

	if (scrollY >= 520) {
		upBtn.classList.add("active");
	} else {
		upBtn.classList.remove("active");
	}
});

function upClick() {
	window.scrollTo(0, 0);
}

// This Is For Cursor Animation --------------------------------------------------------------------
window.addEventListener("mousemove", (e) => {
	let x = e.clientX;
	let y = e.clientY;
	cursorMove.style.left = `${x}px`;
	cursorMove.style.top = `${y}px`;

	if (e.target.classList.contains("touch")) {
		cursorMove.classList.add("active");
	} else {
		cursorMove.classList.remove("active");
	}
});

// This Is For Download My Resume 'CV' ----------------------------------------------------------

const resumeUrl =
	"https://drive.google.com/uc?export=download&id=1cspD0w8BeR6Wg-k6Tk5oXBspBBJxyaH4";

downloadBtn.addEventListener('click', () => {
	location.href = resumeUrl;
})

// This Is For Services --------------------------------------------------------------
function closePopUp(e) {
	e.parentElement.parentElement.classList.remove("active");
}

servCards.forEach((e) => {
	e.addEventListener("click", () => {
		servHolder.forEach((el) => {
			if (e.dataset.count === el.dataset.count) {
				el.classList.add("active");
			}
		});
	});
});

// This Is For Qualification ---------------------------------------------------------------------
function educExper(e) {
	let postEduction = document.querySelectorAll(".qualification .infos .post");
	for (post of postEduction) {
		if (e.dataset.catching === post.dataset.catching) {
			post.classList.add("active");
		} else {
			post.classList.remove("active");
		}
	}

	for (one of qualTogglers) {
		if (one.dataset.catching === e.dataset.catching) {
			one.classList.add("active");
		} else {
			one.classList.remove("active");
		}
	}
}

// This Is For Portfolio ---------------------------------------------------------------------------
folioBtns.forEach((ele) => {
	ele.addEventListener("click", () => {
		folioBtns.forEach((e) => {
			if (e.dataset.click === ele.dataset.click) {
				e.classList.add("active");
			} else {
				e.classList.remove("active");
			}
		});

		cardsFilter.forEach((element) => {
			if (ele.dataset.click === "all") {
				element.classList.remove("hide");
			} else {
				if (element.dataset.type === ele.dataset.click) {
					element.classList.remove("hide");
				} else {
					element.classList.add("hide");
				}
			}
		});
	});
});

// Start Swiper Sliding Js -------------------------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 50,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
});

// End Swiper Sliding Js --------------------------------------------------------------------------





dark.addEventListener('click', (e) => {
	if (e.target.ariaExpanded === "true") {
		e.target.ariaExpanded = false;
		document.body.classList.add('body-active');
	} else {
		e.target.ariaExpanded = true;
		document.body.classList.remove('body-active');
	}
})

function darkMode() {
	let root = document.querySelector(':root');
	let rootStyle = getComputedStyle(root);
	let blackColor = rootStyle.getPropertyValue('--black-color')
}

// Contact Form Function

function sendEmail(event) {
	event.preventDefault(); // Prevent form submission

	const name = document.getElementById("name").value;
	const email = document.getElementById("mail").value;
	const message = document.getElementById("project").value;

	let subject = "New Form Submission";
	let body = "Name: " + name + "\nEmail: " + email + "\nProject: " + message;

	let mailtoLink =
		"mailto:mehdiharakat20@gmail.com" +
		"?subject=" +
		encodeURIComponent(subject) +
		"&body=" +
		encodeURIComponent(body);

	window.location.href = mailtoLink;
}