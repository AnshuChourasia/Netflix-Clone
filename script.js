const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link'); // Corrected 'login-link'
const registerLink = document.querySelector('.register-link'); // Corrected 'register-link'
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// Show Register Form when clicking Register
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active'); // Show registration form
    document.querySelector('.form-box.login').style.transform = 'translateX(-400px)';
    document.querySelector('.form-box.register').style.transform = 'translateX(0)';
});

// Show Login Form when clicking Login
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active'); // Show login form
    document.querySelector('.form-box.login').style.transform = 'translateX(0)';
    document.querySelector('.form-box.register').style.transform = 'translateX(400px)';
});

// Show Popup when clicking Login Button in Navbar
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    document.querySelector('.form-box.login').style.transform = 'translateX(0)'; // Ensure Login is visible by default
    document.querySelector('.form-box.register').style.transform = 'translateX(400px)'; // Ensure Register is hidden by default
});

// Close Popup when clicking the close icon
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
