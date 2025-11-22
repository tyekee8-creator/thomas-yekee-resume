document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-details');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const jobDetails = button.nextElementSibling;
      if (jobDetails.classList.contains('hidden')) {
        jobDetails.classList.remove('hidden');
        button.textContent = 'Hide Details';
      } else {
        jobDetails.classList.add('hidden');
        button.textContent = 'Show Details';
      }
    });
  });
});
