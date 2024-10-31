
function showPanel(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    document.getElementById(panelId).classList.add('active');
}

// Show the default panel on page load (e.g., Users)
document.addEventListener('DOMContentLoaded', () => {
    showPanel('users');
});
