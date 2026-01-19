document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navDropdown = document.getElementById('mobile-nav-dropdown');

    if (menuBtn && navDropdown) {
        menuBtn.addEventListener('click', function () {
            navDropdown.classList.toggle('active');
        });
    }

    // Follow Dropdown Toggle
    const followBtn = document.getElementById('follow-btn');
    const followDropdown = document.getElementById('follow-dropdown');

    if (followBtn && followDropdown) {
        followBtn.addEventListener('click', function () {
            followDropdown.classList.toggle('active');
            const icon = followBtn.querySelector('i');
            if (followDropdown.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    }
});
