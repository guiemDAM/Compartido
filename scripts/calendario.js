function crearMes(dia){
    document.getElementById("labelCal").innerText = mayusMinus(
        dia.toLocaleString('default', { month: 'long' }));

    let tablaMes = document.createElement("table");
    let mes = dia.getMonth();
    let col = document.createElement("tr");

    for (let i = 1; i < (dia.getDay()==0 ? 7 : dia.getDay()); i++) {
        let tdDia = document.createElement("td");
        
        col.appendChild(tdDia);
    }

    while(mes===dia.getMonth()){
        
        let botonDia = document.createElement("input");
        let tdDia = document.createElement("td");

        Object.assign(botonDia, {
            type: "button",
            name: "dia",
            value: dia.getDate(),
        });

        botonDia.classList.add("diaCalendario");

        tdDia.appendChild(botonDia);
        col.appendChild(tdDia);
        dia.setDate(dia.getDate()+1);


        if(dia.getDay()===1){
            tablaMes.appendChild(col);
            col = document.createElement("tr");
        }
    }
    tablaMes.appendChild(col);
    tablaMes.style.tableLayout = "fixed";
    return tablaMes;
}

function mayusMinus(str){
    return str.charAt(0).toUpperCase()+str.substring(1);
}

const diaActual = new Date();
const index = (window.location.pathname).split("/").pop() == "index.html" ? true : false;
const calendar = document.getElementById("calendar");

var primerDia = new Date(diaActual.getFullYear(), diaActual.getMonth(), 1);
var mes = diaActual.getMonth();

function cambiarMes(mas){
    mes+=(mas ? +1 : -1);
    primerDia = new Date(primerDia.getFullYear(), mes, 1);
    calendar.replaceChildren(crearMes(primerDia));
    buscarActiv();
}

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

calendar.appendChild(crearMes(primerDia));
buscarActiv();