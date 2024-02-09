const galeriaTop = document.getElementById("galeriaTop");
const galeriaBottom = document.getElementById("galeriaBottom");


for(let i = 1; i < 5; i++) {
    crearImg(i, galeriaTop);
}

for(let i = 5; i < 9; i++) {
    crearImg(i, galeriaBottom);
}

function crearImg(index, div) {
    let img = document.createElement('img');
    img.src = "/testimages/foto-" + index + ".jpg";
    img.addEventListener('mouseover', function() {
        
        changeSize(index);
    });

    img.addEventListener('mouseout', function(event) {
        
        revertSize();
    });

    div.appendChild(img);
}


function changeSize(index) {
    if (index > 5) {
        galeriaBottom.style.flex = '1 1 0'; // Allow galeriaBottom to grow and shrink freely, and size it according to its contents
        galeriaTop.style.flex = '0 1 0'; // Allow galeriaTop to shrink freely, but not grow, and size it according to its contents
    } else {
        galeriaTop.style.flex = '1 1 0'; // Allow galeriaTop to grow and shrink freely, and size it according to its contents
        galeriaBottom.style.flex = '0 1 0'; // Allow galeriaBottom to shrink freely, but not grow, and size it according to its contents
    }
}


function revertSize() {
    galeriaBottom.style.flex = '1';
    galeriaTop.style.flex = '1'; 
}


function revertSizea(img) {
    let galeriaTop = document.getElementById('galeriaTop');
    let galeriaBottom = document.getElementById('galeriaBottom');
    let allImagesTop = galeriaTop.querySelectorAll('img');
    let allImagesBottom = galeriaBottom.querySelectorAll('img');

    // Loop through all images in galeriaTop and galeriaBottom
    allImagesTop.forEach(img => {
        img.style.flex = '0 0 25%'; // Revert flex basis to 25%
    });
    allImagesBottom.forEach(img => {
        img.style.flex = '0 0 25%'; // Revert flex basis to 25%
    });
}
