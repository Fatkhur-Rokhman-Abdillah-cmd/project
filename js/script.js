const themeToggle = document.getElementById('themeToggle');
const yearTarget = document.getElementById('year');

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (themeToggle) {
  const savedTheme = localStorage.getItem('brightpath-theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = 'Light mode';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
    localStorage.setItem('brightpath-theme', isDark ? 'dark' : 'light');
  });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMessage = document.getElementById('successMessage');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    if (name.length < 2) {
      nameError.textContent = 'Please enter your full name.';
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (message.length < 10) {
      messageError.textContent = 'Please write a message with at least 10 characters.';
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    successMessage.textContent = 'Thank you! Your message has been sent successfully.';
    contactForm.reset();
  });
}
