document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');

    // Load saved data from localStorage
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
        alert(`Welcome back, ${savedData.username}!`);
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userData = {
            username: document.getElementById('username').value,
            aadhaar:document.getElementById('aadhaar").value,
            place: document.getElementById('place').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
      
 alert('Booked Hotel successful!');  };

        // Save user data to localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Login successful!');
    });

    logoutButton.addEventListener('click', () => {
        // Clear user data from localStorage
        localStorage.removeItem('userData');
        alert('You have been logged out.');
        location.reload();
    });
});
