window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const info = urlParams.get('info');
    document.getElementById('comentarios').value = info;
    document.getElementById("motivacion").value = "participar";
}

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
        labels[i].style = "background-color : var(--unselected-input)"; 
        // Todas las etiquetas coloreadas como deseleccionadas
    }

    label.style = "background-color : var(--selected-input)";
    // La etiqueta seleccionada coloreada acorde
}

setEsCivil(document.getElementById('labelsoltero')); // Por defecto, soltero seleccionado