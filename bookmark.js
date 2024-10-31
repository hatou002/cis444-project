function addCategory() {
    const userBookmarks = document.getElementById("user-bookmarks");

    const newBookmark = document.createElement("div");
    newBookmark.classList.add("bookmark");

    // Add placeholder image with openFolder function
    const img = document.createElement("img");
    img.src = "https://via.placeholder.com/150";
    img.alt = "New Bookmark";
    img.onclick = function() {
        openFolder("New Study Spot");
    };
    newBookmark.appendChild(img);

    // Add editable name
    const span = document.createElement("span");
    span.contentEditable = "true";
    span.textContent = "New Study Spot";
    span.onblur = function() {
        saveBookmarkName(span);
    };
    newBookmark.appendChild(span);

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function(event) {
        deleteBookmark(event, deleteBtn);
    };
    newBookmark.appendChild(deleteBtn);

    userBookmarks.appendChild(newBookmark);
}


// Function to save the bookmark name with default fallback
function saveBookmarkName(element) {
    const newName = element.textContent.trim();
    if (!newName) {
        element.textContent = "Unnamed Folder"; // Fallback if left empty
    }
}

// Function to delete a bookmark
function deleteBookmark(event, button) {
    event.stopPropagation(); // Prevents triggering the openFolder function
    const bookmark = button.parentElement;
    bookmark.remove();
}

// Function to open folder with a pop-up
function openFolder(folderName) {
    alert(`Opening folder: ${folderName}`);
}

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const authButtons = document.getElementById('auth-buttons');

    if (isLoggedIn) {
        const username = localStorage.getItem('username');
        authButtons.innerHTML = `
            <span>Welcome, ${username}</span>
            <button id="logout-btn" class="auth-btn">Log Out</button>
        `;

        // Add event listener to the "Log Out" button
        document.getElementById('logout-btn').addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('username');
            window.location.reload(); // Refresh the page to show log-in/sign-up buttons
        });
    } else {
        // Set up Sign Up and Log In buttons to link to signUp.html
        authButtons.innerHTML = `
            <button onclick="window.location.href='signUp.html'" class="auth-btn">Sign Up</button>
            <button onclick="window.location.href='signUp.html'" class="auth-btn">Log In</button>
        `;
    }
});


