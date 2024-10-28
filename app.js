function selectPrice(button) {
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.price-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');
}
