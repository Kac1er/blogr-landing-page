const burgerBtn = document.querySelector(".nav__burger-btn");
const navList = document.querySelector(".nav__list");

const handleNav = () => {
	burgerBtn.classList.toggle("nav__burger-btn--active");
	navList.classList.toggle("nav__list--active");
};
burgerBtn.addEventListener("click", handleNav);
