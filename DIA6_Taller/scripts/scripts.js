function saludar() {
    console.log("Proceso finalizo");
}

function procesoLento(callback) {
    console.log("Iniciar proceso..");
    setTimeout(() => {
        callback();
    }, 3000);
}

procesoLento(saludar);