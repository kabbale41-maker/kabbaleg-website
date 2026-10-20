// Replace this with the email address where you want to receive messages.
const CONTACT_EMAIL = "replace-with-your-email@example.com";
const menuButton = document.querySelector(".menu");
const nav = document.querySelector("#nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  const status = document.querySelector("#formStatus");
  if (CONTACT_EMAIL.includes("replace-with-your-email")) {
    status.textContent = "Setup needed: open script.js and replace CONTACT_EMAIL with your real email address.";
    return;
  }
  const subject = encodeURIComponent("Message from Kabbaleg.com — " + name);
  const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);
  status.textContent = "Opening your email app…";
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
