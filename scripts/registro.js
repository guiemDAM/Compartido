var selHora = document.getElementById('horaDisp'); 

for (var i = 8; i<=21; i++){
    var hora = document.createElement('option'); // Cada hora redonda
    var media = document.createElement('option'); // Cada media hora
    hora.value = i;
    hora.innerHTML = i + ":00";
    media.value = i + 0.5;
    media.innerHTML = i + ":30";
    selHora.appendChild(hora);
    selHora.appendChild(media);
}


/**
 * Colorea las etiquetas del estado civil acorde a su estado
 * @param {Etiqueta de estado civil a seleccionar} label 
 */
function setEsCivil(label){
    let labels = document.getElementsByClassName("labelEstado");

    for(let i = 0; i < labels.length; i++) {
        labels[i].style = "background-color : red"; 
        // Todas las etiquetas coloreadas como deseleccionadas
    }

    label.style = "background-color : green";
    // La etiqueta seleccionada coloreada acorde
}