// Hamburger-menu styling
const hamburger = document.querySelector(".hamburger-menu");
const offscreenMenu = document.querySelector(".offscreen-menu");
const menuLinks = document.querySelectorAll(".offscreen-menu a");
const closeBtn = document.querySelector(".close-btn");

// Toggle the off-screen menu when the hamburger is clicked
hamburger.addEventListener("click", () => {
  offscreenMenu.classList.toggle("show");
});

// Close the off-screen menu when a menu link is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    offscreenMenu.classList.remove("show");
  });
});

// Close the off-screen menu when the close button is clicked
closeBtn.addEventListener("click", () => {
  offscreenMenu.classList.remove("show");
});

// JavaScript for Carousel
document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");

  const carouselImages = document.querySelectorAll(".about-carousel img");
  console.log(`Found ${carouselImages.length} images`);

  let currentIndex = 0;
  const totalImages = carouselImages.length;

  function showImage(index) {
    console.log(`Showing image index ${index}`);
    carouselImages.forEach((img, i) => {
      img.style.transform = `translateX(-${index * 100}%)`;
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  // To automatically change images every few seconds
  setInterval(nextImage, 3000);

  showImage(currentIndex);
});

// JavaScript for Scroll Up Button
document.addEventListener("DOMContentLoaded", () => {
  const scrollUpBtn = document.getElementById("scrollUpBtn");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      // Show button after scrolling down 300px
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  });

  // Scroll to top smoothly when the button is clicked
  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
