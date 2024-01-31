function crearMes(dia){
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
const primerDia = new Date(diaActual.getFullYear(), diaActual.getMonth(), 1);

const calendar = document.getElementById("calendar");

calendar.appendChild(crearMes(primerDia));