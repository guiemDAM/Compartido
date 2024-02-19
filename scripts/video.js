const videoContainer = document.getElementById("caja_video");

const maxHeight = document.documentElement.scrollHeight / 4;

window.addEventListener("scroll", function() {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - window.innerHeight);
    
    let newTop = scrollPercentage * 100;
    videoContainer.style.top = `-${newTop}%`;
});