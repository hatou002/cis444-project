// Redirect to the home screen when the "Sign In" button is clicked
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission (if you're using a form later)
    window.location.href = 'homepage.html'; // Change this to the actual home screen file
});

// Redirect to the sign-up page when the "Sign Up" link is clicked
document.querySelector('.sign-up-link a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = 'signup.html'; // Change this to the actual sign-up page file
});