
function showPanel(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    document.getElementById(panelId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showPanel('users');
});
