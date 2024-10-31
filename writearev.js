document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const backBtn = document.querySelector('.back-btn');
    const forwardBtn = document.querySelector('.forward-btn');
    const refreshBtn = document.querySelector('.refresh-btn');

    backBtn.addEventListener('click', () => {
        history.back();
    });

    forwardBtn.addEventListener('click', () => {
        history.forward();
    });

    refreshBtn.addEventListener('click', () => {
        location.reload();
    });

    // Star rating functionality
    const stars = document.querySelectorAll('.star');
    const ratingText = document.querySelector('.rating-text');
    let currentRating = 0;

    const ratingDescriptions = {
        1: 'Poor - Would not recommend',
        2: 'Fair - Needs improvement',
        3: 'Good - Average experience',
        4: 'Very Good - Would recommend',
        5: 'Excellent - Outstanding experience'
    };

    function updateStars(rating, isHover = false) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
                star.style.color = '#FFD700';
            } else {
                star.classList.remove('active');
                star.style.color = '#ddd';
            }
        });

        if (rating > 0 && !isHover) {
            ratingText.textContent = ratingDescriptions[rating];
        } else if (!isHover) {
            ratingText.textContent = 'Select a rating';
        }
    }

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStars(currentRating);
        });

        star.addEventListener('mouseover', () => {
            updateStars(index + 1, true);
        });

        star.addEventListener('mouseout', () => {
            updateStars(currentRating);
        });
    });

    const reviewForm = document.getElementById('reviewForm');
    const submitBtn = reviewForm.querySelector('.submit-btn');
    const textarea = reviewForm.querySelector('textarea');

    textarea.addEventListener('input', () => {
        if (textarea.value.length >= 50 && currentRating > 0) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (currentRating === 0) {
            alert('Please select a rating');
            return;
        }

        if (textarea.value.length < 50) {
            alert('Please write a review of at least 50 characters');
            return;
        }

        const reviewData = {
            rating: currentRating,
            review: textarea.value,
            timestamp: new Date().toISOString()
        };

        console.log('Review submitted:', reviewData);

        alert('Thank you for your review!');
        window.location.href = 'reviewscreen.html';
    });

    window.addEventListener('beforeunload', (e) => {
        if (textarea.value.trim() || currentRating > 0) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
});