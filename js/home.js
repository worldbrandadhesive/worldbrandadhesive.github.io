// Initialize the carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the carousel element
  const carousel = document.getElementById('homeCarousel');
  
  // Initialize the Bootstrap carousel with options
  const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000, // Time between slides in milliseconds
    pause: 'hover', // Pause on hover
    ride: 'carousel', // Start cycling automatically
    wrap: true // Continuous cycling
  });
});
