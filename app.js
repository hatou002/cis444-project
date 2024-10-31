function selectPrice(button) {
    const buttons = document.querySelectorAll('.price-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
}
