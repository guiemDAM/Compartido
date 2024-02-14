var selHora = document.getElementById('horaDisp');

for (var i = 8; i<=21; i++){
    var hora = document.createElement('option');
    var media = document.createElement('option');
    hora.value = i;
    hora.innerHTML = i + ":00";
    media.value = i + 0.5;
    media.innerHTML = i + ":30";
    selHora.appendChild(hora);
    selHora.appendChild(media);
}

function setEsCivil(div){
    let divs = document.getElementsByClassName("labelEstado");
    for(let i = 0; i < divs.length; i++) {
        divs[i].style = "background-color : red";
    }

    div.style = "background-color : green";

}