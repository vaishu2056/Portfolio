// Smooth scrolling when clicking navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Here you can actually send the form data using email services like Formspree (optional)
  
    // Show success message
    alert('Thank you for your message, ' + name + '! I will get back to you soon.');
  
    // Clear the form
    form.reset();
  });
  