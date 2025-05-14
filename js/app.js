// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Track link clicks with Google Analytics
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'link', {
        'href': link.getAttribute('href'),
        'class': link.getAttribute('class')
      });
    });
  });

  // Initialize all Bootstrap tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  // Initialize all Bootstrap popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
});

// Handle image loading errors
function imageError(source) {
  source.src = '/images/missing.jpg';
  return true;
}


