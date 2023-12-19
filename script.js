// script.js

// You can add JavaScript functionalities here if needed
// For a static website, this might not be necessary

// Example: Scroll to top button
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scrollToTopButton');

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }

    scrollButton.addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
