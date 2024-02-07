const galeria = document.getElementById("galeria");

for(let i = 1; i < 6; i++) {
    galeria.appendChild(crearImg(i));
}

function crearImg(index) {
    let img = document.createElement('img');
    img.src = "/testimages/foto-"+index+".jpg";
    return img;
}