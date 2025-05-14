console.log("Welcome to your site!");
const footer = document.querySelector("footer");

// Handle the year and time
const span = document.createElement("span");
span.className = "footer-date";  // Add your class
const now = new Date();
span.textContent = `-${now.getFullYear()} | ${now.toLocaleTimeString()}`;

// Apply styles directly via JS
span.style.fontFamily = "'Roboto', sans-serif";
span.style.textTransform = "lowercase";
span.style.fontVariant = "small-caps";
span.style.fontSize = "0.8rem";

// Append dynamically generated content
footer.appendChild(span);
