function moveCarousel(direction) {
    const carousel = document.getElementById('carousel');
    if (!carousel) return; 

    const scrollAmount = carousel.offsetWidth; 
    
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}


const menuToggle = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}