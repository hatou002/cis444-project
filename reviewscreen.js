document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    document.querySelectorAll('.search-container, .search-bar').forEach(container => {
        const input = container.querySelector('input');
        const clearBtn = container.querySelector('.clear-btn');
        const searchBtn = container.querySelector('.search-btn');

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                input.value = '';
                input.focus();
            });
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                if (input.value.trim()) {
                    // Implement search functionality
                    console.log('Searching for:', input.value);
                }
            });
        }

        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && input.value.trim()) {
                    // Implement search functionality
                    console.log('Searching for:', input.value);
                }
            });
        }
    });

    // Browser controls functionality
    const backBtn = document.querySelector('.back-btn');
    const forwardBtn = document.querySelector('.forward-btn');
    const refreshBtn = document.querySelector('.refresh-btn');

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            history.back();
        });
    }

    if (forwardBtn) {
        forwardBtn.addEventListener('click', () => {
            history.forward();
        });
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            location.reload();
        });
    }

    // Star button functionality
    const starButton = document.querySelector('.star-button');
    if (starButton) {
        starButton.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.color = this.style.color === 'yellow' ? '#888' : 'yellow';
        });
    }
});