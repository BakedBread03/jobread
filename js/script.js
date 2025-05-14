console.log("Welcome to your site!");
const footer = document.querySelector("footer");
const span = document.createElement("span");
span.className = "footer-date";
const now = new Date();
span.textContent = `© 2025-${now.getFullYear()} | ${now.toLocaleTimeString()}`;
footer.appendChild(span);
