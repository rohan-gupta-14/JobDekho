const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h2", scrollRevealOption);
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".steps__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".explore__card", { duration: 1000, interval: 500 });
ScrollReveal().reveal(".job__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".offer__card", { ...scrollRevealOption, interval: 500 });

const swiper = new Swiper(".swiper", {
  loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");
  const closeLoginBtn = document.getElementById("close-login");
  const closeSignupBtn = document.getElementById("close-signup");

  loginBtn.addEventListener("click", () => loginModal.style.display = "block");
  signupBtn.addEventListener("click", () => signupModal.style.display = "block");

  closeLoginBtn.addEventListener("click", () => loginModal.style.display = "none");
  closeSignupBtn.addEventListener("click", () => signupModal.style.display = "none");

  window.addEventListener("click", (event) => {
    if (event.target === loginModal) loginModal.style.display = "none";
    if (event.target === signupModal) signupModal.style.display = "none";
  });

  document.querySelector("#login-modal form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login successful!");
    loginModal.style.display = "none";
  });

  document.querySelector("#signup-modal form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Signup successful!");
    signupModal.style.display = "none";
  });
});

function openModal(jobTitle) {
  document.getElementById("applyModal").style.display = "block";
  document.getElementById("job-title").textContent = jobTitle;
}

function closeModal() {
  document.getElementById("applyModal").style.display = "none";
  document.querySelector("#applyModal form").reset();
  document.getElementById("success-message").style.display = "none";
}

window.onclick = (event) => {
  if (event.target === document.getElementById("applyModal")) closeModal();
};

document.querySelector("#applyModal form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("success-message").style.display = "block";
  document.querySelector("#applyModal form").style.display = "none";
});
