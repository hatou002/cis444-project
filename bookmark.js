document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const authButtons = document.getElementById('auth-buttons');

    if (isLoggedIn) {
        const username = localStorage.getItem('username');
        authButtons.innerHTML = `
            <span>Welcome, ${username}</span>
            <button id="logout-btn" class="auth-btn">Log Out</button>
        `;

        //  Add event listener to the "Log Out" button
        document.getElementById('logout-btn').addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('username');
            window.location.reload(); // Refresh the page to show log-in/sign-up buttons
        });
    } else {
        // Set up Sign Up and Log In buttons to link to signUp.html
        authButtons.innerHTML = `
            <button onclick="window.location.href='signUp.html'" class="auth-btn">Sign Up</button>
            <button onclick="window.location.href='login.html'" class="auth-btn">Log In</button>
        `;
    }
});


