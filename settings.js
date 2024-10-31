document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    function switchTab(e) {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        e.target.classList.add('active');
        
        const tabId = e.target.dataset.tab;
        document.getElementById(tabId).classList.add('active');
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });
});