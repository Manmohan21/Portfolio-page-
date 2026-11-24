// Select the menu button and navigation links
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Open or close the mobile navigation menu
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    // Update accessibility information
    const isOpen = navLinks.classList.contains("show");
    menuButton.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Show the current year automatically in the footer
document.getElementById("year").textContent = new Date().getFullYear();
