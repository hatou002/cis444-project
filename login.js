// Redirect to the home screen when the "Sign In" button is clicked
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Get username and password values
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    // Check if credentials match admin login
    if (username === 'admin' && password === 'password') {
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'index.html'; // Default redirect for regular users
    }
});

// Redirect to the sign-up page when the "Sign Up" link is clicked
document.querySelector('.sign-up-link a').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'signup.html';
});