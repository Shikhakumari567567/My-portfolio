// ---------- Mobile Navigation ----------

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");
    menuBtn.textContent = "☰";
  });
});


// ---------- Animated Developer Role ----------

const roleElement = document.getElementById("role");

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "AI Integration Learner"
];

let roleIndex = 0;

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleElement.textContent = roles[roleIndex];
}, 2500);


// ---------- Dynamic Footer Year ----------

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// ---------- Contact Form ----------

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Replace this with your actual email address.
const recipientEmail = "your-email@example.com";

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    return;
  }

  if (
    recipientEmail === "shikhakumari25@navgurukul.org" ||
    !recipientEmail.includes("@")
  ) {
    formStatus.textContent =
      "Please add your actual email address in script.js first.";
    return;
  }

  const subject = encodeURIComponent(
    `Portfolio Contact Message from ${name}`
  );

  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message}`
  );

  const mailtoLink =
    `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

  formStatus.textContent =
    "Opening your email application. Please send the prepared email.";

  window.location.href = mailtoLink;
});
