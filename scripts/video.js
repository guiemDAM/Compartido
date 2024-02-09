const backgroundVideo = document.getElementById('fondo');

// Store the initial scroll position
let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

// Add scroll event listener
window.addEventListener('scroll', function() {
    // Get the current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Check the scroll direction
    const scrollDirection = currentScrollPosition > prevScrollPosition ? 'down' : 'up';

    // Update the position of the background video based on the scroll direction
    if (scrollDirection === 'down') {
        // Move the background video down
        backgroundVideo.style.top = `-${currentScrollPosition}px`;
    } else {
        // Move the background video up
        backgroundVideo.style.top = `0px`;
    }

    // Update the previous scroll position
    prevScrollPosition = currentScrollPosition;  });