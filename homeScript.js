document.addEventListener('DOMContentLoaded', function() {
    // Get the search button and search input
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search');

    // Add click event listener to search button
    searchBtn.addEventListener('click', function() {
        window.location.href = 'search.html';
    });

    // Add enter key event listener to search input
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            window.location.href = 'search.html';
        }
    });
});

//For dynamic image sizes
window.addEventListener('resize', () => {
    const slideshow = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide img');

    if (window.innerWidth > 1200) {
        slides.forEach(img => {
            img.style.objectFit = 'contain';
            img.style.objectPosition = 'center';
        });
    } else {
        slides.forEach(img => {
            img.style.objectFit = 'cover';
            img.style.objectPosition = 'center center';
        });
    }
});

//Dynamic activity generation
document.addEventListener('DOMContentLoaded', () => {
    const recentActivityContainer = document.querySelector('.recent-activity');

    // Recent activity data (examples)
    const activities = ['Activity 1', 'Activity 2', 'Activity 3', 'Activity 4', 'Activity 5', 'Activity 6', 'Activity 7', 'Activity 8', 'Activity 9'];

    activities.forEach(activity => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = activity;
        recentActivityContainer.appendChild(square);
    });
});