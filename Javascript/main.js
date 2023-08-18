const cursorMove = document.querySelector(".cursor-anime");
const upBtn = document.querySelector('.up-btn');
const headerOne = document.querySelector("header");
const navBar = document.querySelector(".nav-bar");
const servCards = document.querySelectorAll('.services .cards .box');
const servHolder = document.querySelectorAll('.services .cards .holder');

function closeNav() {
	navBar.classList.toggle("active");
}

window.addEventListener("scroll", () => {
	if (scrollY >= 90) {
		headerOne.style.boxShadow =
			"rgba(149, 157, 165, 0.2) 0px 8px 24px";
    } else {
		headerOne.style.boxShadow =
			"none";
  }

  if (scrollY >= 520 ) {
    upBtn.classList.add('active');
  } else {
    upBtn.classList.remove('active');
  }
});


function upClick() {
  window.scrollTo(0, 0);
}


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
})


function closePopUp(e) {
  e.parentElement.parentElement.classList.remove("active");
}

servCards.forEach((e) => {
  e.addEventListener('click', () => {
    servHolder.forEach((el) => {
      if (e.dataset.count === el.dataset.count) {
        el.classList.add("active");
      }
    })
  })
})