var isModoOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

const btnModo = document.getElementById('boton_modo');

function applyModo() {
    document.documentElement.classList.add("modo_" + (isModoOscuro ? "oscuro" : "claro"));
    document.documentElement.classList.remove("modo_" + (isModoOscuro ? "claro" : "oscuro"));
    btnModo.innerHTML = isModoOscuro ? "&#9789" : "&#x2600";
}

function switchModo() {
    isModoOscuro = !isModoOscuro;
    applyModo();
}

applyModo(); // Aplicar modo al cargar la página

btnModo.addEventListener('click', switchModo);

