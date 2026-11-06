
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const btn = document.getElementById("theme-btn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});