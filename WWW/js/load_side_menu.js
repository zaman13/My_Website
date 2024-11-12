document.addEventListener('DOMContentLoaded', function() {
  fetch('side_menu.html')
    .then(response => response.text())
    .then(data => {
      document.querySelectorAll('.left_3c').forEach(el => {
        el.innerHTML = data;
      });
    })
    .catch(error => console.error('Error loading menu:', error));
});

