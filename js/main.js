// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) navLinks?.classList.remove('open');
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    // close all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// ===== BOOKING FORM =====
const bookingForm = document.getElementById('bookingForm');
bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const pickup = document.getElementById('pickup')?.value;
  const dropoff = document.getElementById('dropoff')?.value;
  const pickupDate = document.getElementById('pickupDate')?.value;
  const returnDate = document.getElementById('returnDate')?.value;

  if (!pickup || !pickupDate || !returnDate) {
    alert('Please fill in all required fields.');
    return;
  }
  // In production, redirect to booking flow
  alert(`Great! Searching available cars in ${pickup} from ${pickupDate} to ${returnDate}. Booking system coming soon!`);
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = 'Message Sent ✓';
  btn.disabled = true;
  btn.style.background = '#16a34a';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.disabled = false;
    btn.style.background = '';
    btn.style.color = '';
    contactForm.reset();
  }, 3000);
});

// ===== SET MIN DATES =====
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type="date"]').forEach(input => {
  input.min = today;
});
const pickupDate = document.getElementById('pickupDate');
const returnDate = document.getElementById('returnDate');
pickupDate?.addEventListener('change', () => {
  if (returnDate) returnDate.min = pickupDate.value;
});

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});
