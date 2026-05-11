// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let currentPhotos = [];
let currentIndex = 0;

function openLightbox(imgs, index) {
  currentPhotos = imgs;
  currentIndex = index;
  lightboxImg.src = currentPhotos[currentIndex];
  lightbox.classList.add('open');
}

document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });

document.getElementById('lightboxPrev').addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
  lightboxImg.src = currentPhotos[currentIndex];
});

document.getElementById('lightboxNext').addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentPhotos.length;
  lightboxImg.src = currentPhotos[currentIndex];
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
  if (e.key === 'Escape') lightbox.classList.remove('open');
});

// Gallery tabs
document.querySelectorAll('.gallery-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.gallery-grid').forEach(g => g.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('cat-' + tab.dataset.cat).classList.add('active');
  });
});

// Wire up gallery photo clicks
document.querySelectorAll('.gallery-grid').forEach(grid => {
  const imgs = Array.from(grid.querySelectorAll('.gallery-item img')).map(img => img.src);
  grid.querySelectorAll('.gallery-item img').forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(imgs, i));
  });
});

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
