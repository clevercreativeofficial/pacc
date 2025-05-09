// dropdown
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const caret = document.querySelector(".rotate-90");

    // mobile
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle('max-h-4')
        dropdown.classList.toggle('max-h-[500px]')
        caret.classList.toggle('-rotate-90')
    });
});

// toggle menu on small devices
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.getElementById("navItems");
    const menuBar = document.getElementById("menu-bar");
    const overlay = document.querySelector(".overlay");
    const defaultIcon = '<i class="fi fi-rr-bars-staggered text-lg translate-y-0.5"></i>';
    const closeIcon = '<i class="fi fi-rr-cross-small text-lg translate-y-0.5"></i>';
    
    menuBar.innerHTML = defaultIcon; // Ensure the default icon is set

    menuBar.addEventListener('click', () => {
        navItems.classList.toggle("-translate-x-[750px]");
        overlay.classList.toggle("translate-x-[750px]");

        // Toggle the icon
        if (navItems.classList.contains("-translate-x-[750px]")) {
            menuBar.innerHTML = defaultIcon;
            document.body.style.overflowY = 'auto'; 
        } else {
            menuBar.innerHTML = closeIcon;
            document.body.style.overflowY = 'hidden';
        }
    });
});