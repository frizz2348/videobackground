const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click',  () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
});

showcase.addEventListener('click', function() {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
});