// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
  const json = await res.json();
  if (json.success) {
    formNote.style.color = '#2e7d32';
    formNote.textContent = "Thanks! We'll be in touch soon.";
    contactForm.reset();
  } else {
    formNote.style.color = '#c62828';
    formNote.textContent = "Something went wrong. Please call us directly.";
  }
});
