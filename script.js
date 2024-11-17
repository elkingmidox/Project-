// Handling About Button Click
const aboutButton = document.getElementById('about-button');

aboutButton.addEventListener('click', () => {
  alert("Here you can write anything you'd like to introduce yourself! Customize as needed.");
});

// Handling Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);
  
  // Reset form fields
  contactForm.reset();
});
