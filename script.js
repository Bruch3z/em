var logo = document.querySelector('.logo');
var header = document.querySelector('.header');
var container = document.querySelector('.container');
var intro = document.querySelector('.intro');

// Update CSS variable for header height
document.documentElement.style.setProperty('--header-height', header.clientHeight + 'px');

// Set initial margin for the container and intro
container.style.marginTop = 'calc(var(--header-height) + 25px)';
intro.style.marginBottom = 'var(--header-height)';

window.addEventListener('scroll', function() {
    scrollPercentage = window.scrollY / (window.innerHeight * 0.25); // Shrink over 25% of the page height
    var fontSize;

    if (window.innerWidth < 768) {
        fontSize = 2.5 - (1.5 * scrollPercentage); // Decrease font size from 3.5em to 2em as user scrolls down
        fontSize = Math.max(fontSize, 2); // Clamp font size to a minimum of 2em
        letterSpacing = -0.1; // Set letter spacing to -0.1rem for smaller logo
    } else {
        fontSize = 7 - (4 * scrollPercentage); // Decrease font size from 6.5em to 2em as user scrolls down
        fontSize = Math.max(fontSize, 2); // Clamp font size to a minimum of 2em
        letterSpacing = -0.25; // Set letter spacing to -0.25rem for larger logo
    }

    logo.style.fontSize = fontSize + 'em';
    logo.style.letterSpacing = letterSpacing + 'rem';

});
