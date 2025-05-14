console.log("Welcome to your site!");
const footer = document.querySelector("footer");

// Update the year if needed (or keep it dynamic)
const footerYear = document.getElementById("footer-year");
footerYear.textContent = `© ${new Date().getFullYear()}`;  // Keeps the year dynamic

// Create a span for the time (if not already present)
const timeSpan = document.createElement("span");
timeSpan.className = "footer-date";  // Add your class

// Update the content for the time
const now = new Date();
timeSpan.textContent = ` | ${now.toLocaleTimeString()}`;

// Apply styles directly via JS
timeSpan.style.fontFamily = "'Roboto', sans-serif";
timeSpan.style.textTransform = "lowercase";
timeSpan.style.fontVariant = "small-caps";
timeSpan.style.fontSize = "0.8rem";

// Append the time to the footer
footer.appendChild(timeSpan);
