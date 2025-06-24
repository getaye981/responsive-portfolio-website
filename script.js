// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'file/Getaye Aweke Bantihun.pdf';
  link.download = 'Getaye Aweke Bantihun.pdf'; // The filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
const form = document.querySelector('.contact-form form');

  form.addEventListener('submit', function(event) {
    // Optionally, prevent actual submission if you want (uncomment next line)
    // event.preventDefault();

    // Hide the form after submit button is clicked
    form.style.display = 'none';

    // Optionally, show a thank-you message
    const thanks = document.createElement('p');
    thanks.textContent = "Thank you for contacting me! I'll get back to you soon.";
    thanks.style.textAlign = "center";
    thanks.style.fontSize = "16px";
    thanks.style.color = "#007BFF";
    form.parentElement.appendChild(thanks);
  });
