// Function to toggle between Sign Up and Log In forms
function toggleAuthForms() {
    const signUpForm = document.getElementById('signUpForm');
    const logInForm = document.getElementById('logInForm');
    const formTitle = document.getElementById('form-title');
    const toggleText = document.getElementById('toggle-text');
    const toggleLink = document.getElementById('toggle-link');

    if (signUpForm.style.display === 'none') {
        // Show Sign Up form
        signUpForm.style.display = 'block';
        logInForm.style.display = 'none';
        formTitle.textContent = 'Create an Account';
        toggleLink.innerHTML = 'Already have an account? <span id="toggle-text" onclick="toggleAuthForms()">Log In</span>';
    } else {
        // Show Log In form
        signUpForm.style.display = 'none';
        logInForm.style.display = 'block';
        formTitle.textContent = 'Log In';
        toggleLink.innerHTML = 'New here? <span id="toggle-text" onclick="toggleAuthForms()">Sign Up</span>';
    }
}

// Sign-Up Form Submission
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate saving user data and setting login status
    const username = document.getElementById('username').value;
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);

    // Redirect to bookmarks page
    window.location.href = 'bookmark.html';
});

// Log-In Form Submission
document.getElementById('logInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate logging in user
    const username = "User"; // In a real app, retrieve the username from backend based on email and password
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);

    // Redirect to bookmarks page
    window.location.href = 'bookmark.html';
});
