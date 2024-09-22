<script>
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update the button icon based on the current theme
    if (body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️';
      toggleButton.classList.add('dark');
    } else {
      toggleButton.textContent = '🌙';
      toggleButton.classList.remove('dark');
    }
  });
</script>
