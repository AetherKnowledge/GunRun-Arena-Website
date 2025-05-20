// Scroll to top when button is clicked
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });

    console.log("Back to top button clicked");
});

// Gallery slider logic
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.gallery-image');
  const imagesContainer = document.getElementById('gallery-images');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  const dotsContainer = document.getElementById('gallery-dots');
  let current = 0;

  function updateGallery() {
    imagesContainer.style.transform = `translateX(-${current * images[0].offsetWidth}px)`;
    dotsContainer.querySelectorAll('.gallery-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === current);
    });
  }

  // Create dots
  dotsContainer.innerHTML = '';
  images.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'gallery-dot' + (idx === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      current = idx;
      updateGallery();
    });
    dotsContainer.appendChild(dot);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    updateGallery();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    updateGallery();
  });

  window.addEventListener('resize', updateGallery);

  updateGallery();
});
