// Get the video container element
const videoContainer = document.getElementById("caja_video");

// Add event listener for scroll
window.addEventListener("scroll", function() {
    // Calculate the scroll percentage
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - window.innerHeight);
    
    let difference = document.documentElement.scrollHeight / (6480 - window.innerHeight);

    // Calculate the new top position of the video container
    let newTop = scrollPercentage * (difference) * 100;

    // Set the new top position
    videoContainer.style.top = `-${newTop}%`;
});
