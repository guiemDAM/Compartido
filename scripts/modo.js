var isModoOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyModo() {
    document.documentElement.classList.add("modo_" + (isModoOscuro ? "oscuro" : "claro"));
    document.documentElement.classList.remove("modo_" + (isModoOscuro ? "claro" : "oscuro"));
}

function switchModo() {
    isModoOscuro = !isModoOscuro;
    applyModo();
}

applyModo(); // Aplicar modo al cargar la página