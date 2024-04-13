document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  
    // Active link highlighting
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-list a");
  
    function makeActive() {
      sections.forEach((section) => {
        const navHeight = document.querySelector(".nav").offsetHeight;
        const top = section.offsetTop - navHeight;
        const bottom = top + section.offsetHeight;
        const halfShown = window.scrollY + window.innerHeight / 2;
  
        if (halfShown >= top && halfShown <= bottom) {
          navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${section.id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }
  
    window.addEventListener("scroll", makeActive);
  
    // Toggle Menu
    const toggleBtn = document.querySelector(".toggle-btn");
    const navList = document.querySelector(".nav-list");
  
    toggleBtn.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  
    // Form Validation (example for email validation)
    const emailInput = document.querySelector("#email");
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      if (!isValidEmail(emailInput.value)) {
        e.preventDefault();
        alert("Please enter a valid email address");
      }
    });
  
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  
    // Lazy Loading
    const lazyImages = document.querySelectorAll("img[data-src]");
  
    const lazyLoad = function () {
      lazyImages.forEach((img) => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
      });
    };
  
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  
    // Modal or Lightbox
    const projectTiles = document.querySelectorAll(".project-tile");
  
    projectTiles.forEach((tile) => {
      tile.addEventListener("click", function (e) {
        e.preventDefault();
        // Your modal or lightbox implementation here
      });
    });
  
    // Back-to-Top Button
    const backToTopBtn = document.querySelector(".back-to-top");
  
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  