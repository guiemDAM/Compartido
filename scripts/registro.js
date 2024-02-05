function crearMes(dia){
    document.getElementById("labelCal").innerText = mayusMinus(
        dia.toLocaleString('default', { month: 'long' }));

    let tablaMes = document.createElement("table");
    let mes = dia.getMonth();
    let col = document.createElement("tr");
    
    for (let i = 0; i < dia.getDay()-1; i++) {
        let tdDia = document.createElement("td");
        tdDia.style.width = "10px";
        
        col.appendChild(tdDia);
    }

    while(mes===dia.getMonth()){
        
        let botonDia = document.createElement("input");
        let tdDia = document.createElement("td");

        Object.assign(botonDia, {
            type: "button",
            name: "dia",
            value: dia.getDate(),
            style: "width : 30px"
        });

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

const diaActual = new Date();
var primerDia = new Date(diaActual.getFullYear(), diaActual.getMonth(), 1);
var mes = diaActual.getMonth();

const calendar = document.getElementById("calendar");

function cambiarMes(mas){
    mes+=(mas ? +1 : -1);
    primerDia = new Date(primerDia.getFullYear(), mes, 1);
    calendar.replaceChildren(crearMes(primerDia));
}


calendar.appendChild(crearMes(primerDia));

function setEsCivil(div){
    let divs = document.getElementsByClassName("radioEsCivil");
    for(let i = 0; i < divs.length; i++) {
        divs[i].style = "background-color : red";
    }
    div.style = "background-color : green";

    var radios = document.getElementsByName('estado');

        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                var selectedValue = radios[i].value;
                alert("Selected Value: " + selectedValue);
                break;
            }
        }

}