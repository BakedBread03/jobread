console.log("Welcome to your site!");
const footer = document.querySelector("footer");

// Apply styles to the entire footer
footer.style.fontFamily = "'Roboto', sans-serif";
footer.style.textTransform = "lowercase";
footer.style.fontVariant = "small-caps";
footer.style.fontSize = "0.8rem";

// Handle dynamic content (year and time)
const span = document.createElement("span");
const now = new Date();
span.textContent = `© ${now.getFullYear()} | ${now.toLocaleTimeString()}`;

footer.appendChild(span);
