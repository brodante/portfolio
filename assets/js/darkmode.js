console.log("working"); 
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Set dark mode as the default theme on initial load
if (localStorage.getItem('theme') === 'light') {
  body.classList.remove('dark-mode');
  toggleButton.textContent = '🌙';
  toggleButton.classList.remove('dark');
} else {
  // If no preference is set, default to dark mode
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
  toggleButton.classList.add('dark');
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save the theme preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = '☀️';
    toggleButton.classList.add('dark');
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = '🌙';
    toggleButton.classList.remove('dark');
  }
});
