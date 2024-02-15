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

var primerDia = new Date(diaActual.getFullYear(), diaActual.getMonth(), 1);
var mes = diaActual.getMonth();

/**
 * Cambia el mes del calendario
 * @param {Si debe ir hacía delante o detrás} mas 
 */
function cambiarMes(mas){
    mes+=(mas ? +1 : -1);
    primerDia = new Date(primerDia.getFullYear(), mes, 1);
    calendar.replaceChildren(crearMes(primerDia));
    buscarActiv();
}

/**
 * Colorea dentro del calendario aquellos días que tengan actividades,
 * usando el id de las actividades del índice.
 */
function buscarActiv(){
    if (index) {
        let dias = document.getElementsByClassName("diaCalendario");

        for (let i = 0; i < dias.length; i++) {
            let diaTexto = document.getElementById(
                dias[i].getAttribute("value")
            + "-" + (mes+1)
            + "-" + primerDia.getFullYear());

            if (diaTexto != null) {
                dias[i].style = "background-color : green"
                // TODO: Añadir popup o función con la actividad
            }
        }
    }
}

// Inicializa el calendario
calendar.appendChild(crearMes(primerDia));
buscarActiv();