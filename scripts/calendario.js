/**
 * Crea un calendario con el mes al que pertenece el día
 * @param {Día del mes a crear} dia 
 * @returns Tabla de calendario
 */
function crearMes(dia){
    // Escribe el nombre del mes en español encima del calendario
    document.getElementById("labelCal").innerText = mayusMinus(
        dia.toLocaleString('default', { month: 'long' }));
    
    // Crea la tabla con columna
    let tablaMes = document.createElement("table");
    let mes = dia.getMonth();
    let col = document.createElement("tr");

    // Para que esté correctamente alineado, añade huecos si el mes empieza en
    // un día diferente al lunes
    for (let i = 1; i < (dia.getDay()==0 ? 7 : dia.getDay()); i++) {
        let tdDia = document.createElement("td");
        col.appendChild(tdDia);
    }

    // Mientras que el día siga siendo parte del mes actual, añadirlo a la tabla
    while(mes===dia.getMonth()){
        
        let botonDia = document.createElement("input");
        let tdDia = document.createElement("td");

        Object.assign(botonDia, {
            type: "button",
            name: "dia",
            value: dia.getDate(),
        });

        botonDia.classList.add("diaCalendario");

        // Añade el botón del día al td, después a la columna 
        // y por último adelanta un día
        tdDia.appendChild(botonDia);
        col.appendChild(tdDia);
        dia.setDate(dia.getDate()+1);

        // Si el día de la semana es lunes, iniciar nueva columna
        if(dia.getDay()===1){
            tablaMes.appendChild(col);
            col = document.createElement("tr");
        }
    }
    
    tablaMes.appendChild(col);
    tablaMes.style.tableLayout = "fixed";
    return tablaMes;
}

/**
 * @param {Texto a estilizar} str 
 * @returns Devuelve el texto con primera mayúscula y el resto a minúsculas
 */
function mayusMinus(str){
    return str.charAt(0).toUpperCase()+str.substring(1);
}

// Si la página es el índice
const index = (window.location.pathname).split("/").pop() == "index.html" ? true : false;

const diaActual = new Date();
const calendar = document.getElementById("calendar");

const popup = document.createElement("div");
const activButton = document.createElement("button");

var mes = diaActual.getMonth();
var anio = diaActual.getFullYear();
var primerDia = new Date(diaActual.getFullYear(), mes, 1);

/**
 * Cambia el mes del calendario
 * @param {Si debe ir hacía delante o detrás} mas 
 */
function cambiarMes(mas){
    mes+=(mas ? +1 : -1);

    if (mes < 0) {
      mes = 11;
      anio -= 1;
    } else if (mes > 11) {
      mes = 0;
      anio += 1;
    }

    primerDia = new Date(anio, mes, 1);
    
    calendar.replaceChildren(crearMes(primerDia));
    
    if (index) buscarActiv();
}

/**
 * Colorea dentro del calendario aquellos días que tengan actividades,
 * usando el id de las actividades del índice.
 */
function buscarActiv() {
  let dias = document.getElementsByClassName("diaCalendario");

  for (let i = 0; i < dias.length; i++) {
    let diaTexto = document.getElementById( 
        dias[i].getAttribute("value") +
        "-" + (mes + 1) + "-" + primerDia.getFullYear());

    if (diaTexto != null) {
        dias[i].style = "background-color : green";
        dias[i].setAttribute("value", dias[i].getAttribute("value") + " | " + diaTexto.innerText);
    
        dias[i].parentElement.onmouseover = (e) => mostrarPopup(diaTexto.innerText, dias[i]);
        dias[i].parentElement.onmouseout = (e) => ocultarPopup();
    }
  }
}

/** Crea el popup y lo añade al body */
function crearPopup() {
  popup.id = "popup";
  popup.appendChild(activButton);
  activButton.innerText = "Apuntarse a la actividad";
  activButton.id = "popupText";

  popup.onmouseover = (e) => { popup.style = "opacity : 100%"; };
  // Si el ratón está encima, no ocultar
  popup.onmouseout = (e) => { ocultarPopup(); };
  // Si el ratón se sale, ocultar

  document.getElementsByTagName("body")[0].appendChild(popup);
}

/**
 * Muestra el popup con la actividad y el botón para apuntarse,
 * que será mandado al registro con la información de la actividad.
 * @param {*} text 
 * @param {*} button 
 */
function mostrarPopup(text, button) {
  popup.style = "opacity : 100%";
  button.parentElement.appendChild(popup);
  activButton.onclick = (e) => {
    window.location.href = `registro.html?info=${encodeURIComponent(text)}`;
  };
  popup.style.pointerEvents = "all";
}

/** Oculta el popup */
function ocultarPopup() {
    popup.style = "opacity : 0%";
    popup.style.pointerEvents = "none";
}

// Inicializa el calendario
calendar.appendChild(crearMes(primerDia));

if (index) {
  buscarActiv();
  crearPopup();
}

