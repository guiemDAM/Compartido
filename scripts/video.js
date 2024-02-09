// Get the video container element
const videoContainer = document.getElementById("caja_video");

// Add event listener for scroll
window.addEventListener("scroll", function() {
    // Calculate the scroll percentage
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Calculate the new top position of the video container
    const newTop = scrollPercentage * (document.documentElement.scrollHeight - window.innerHeight);

    // Set the new top position
    videoContainer.style.top = `-${newTop}px`;
});
