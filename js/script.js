console.log("Welcome to your site!");
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  // Save state in localStorage (persist across reloads)
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// On page load, apply saved theme
window.addEventListener('load', function() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});
