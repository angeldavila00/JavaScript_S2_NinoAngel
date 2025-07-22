//#################################################
//######## Trabajo practico #######################
//#################################################

let gasto = [];

let booleano = true;
while (booleano == true){
    let opcion = prompt ("===========================================\
    \n                               Simulador de Gasto Diario\
    \n===========================================\
    \nSeleccione una opción:\
    \n\
    \n1. Registrar nuevo gasto\
    \n2. Ver los gastos\
    \n3. Calcular total de gastos\
    \n4. Generar reporte de gastos\
    \n5. Salir\
    \n===========================================");

    if (opcion === "1"){
        let montoGasto = prompt("Dime el monto gastado: ");
        let cantidad =prompt("Dime la cantidad: ");
        let categoriaNumero = prompt("Ingresa la categoria del gasto, seleccion numerica 1. Comida, 2. Transporte, 3. Entretenimiento");
        let descripcion = prompt("Dime la descripcion del gasto (opcional)")
        let fecha = prompt ("Ingresa la fecha de gasto DD/MM/YYYY ");
        let guardar = prompt("desea guardar el gasto,\n s. Si \n c. No").toLocaleLowerCase();

        const categoria = {
            "1": "comida",
            "2":"Transporte",
            "3":"Entretenimiento",
        }
        let categorias = categoria[categoriaNumero];

        if (guardar === "s"){
            gasto.push ({
                "montoGasto": Number(montoGasto),
                "cantidad": Number(cantidad),
                "categorias": categorias,
                "descripcion": descripcion,
                "fecha": fecha,

            });

            alert("El gasto se guardo exitosamente");
            continue;
        }

        else {
            alert("El gasto no se guardo");
        }
    }

     else if (opcion === "2"){
        let recorrido =gasto.length;
        for (i = 0; 1 < recorrido; i++) {
            alert (
                "Gasto N. " + (i + 1) + "\n" +
                "Monto: " + gasto[i]["montoGasto"] + "\n" +
                "Cantidad: " + gasto[i]["cantidad"] + "\n" +
                "Categorias: " + gasto[i]["categorias"] + "\n" +
                "Descripcion: " + gasto[i]["descripcion"] + "\n" +
                "Fecha: " + gasto[i]["fecha"]
            );
        };
    }
        else if (opcion === "3"){
        let totalGasto = 0
        let categorias = {
            comida: 0,
            Transporte: 0,
            Entretenimiento:0, 
        };
        for (i = 0; i < gasto.length; i++){
            totalGasto += Number(gasto[i].montoGasto);
            let cant = gasto[i].categoria;
            if (cant === "comida") categorias.comida += Number(gasto[i].montoGasto);
            else if (cant === "Transporte")  categorias.Transporte += Number(gasto[i]. montoGasto);
            else if (cant === "Entretenimiento")  categorias.Entretenimiento += Number(gasto[i]. montoGasto);
        }

        let mess = "Total de gasto: " +totalGasto + "\n \n";
        mess += "Gasto por categoria:\n";
        mess += "Comida: " + categorias.comida + "\n";
        mess += "Transporte: " + categorias.Transporteransporte + "\n";
        mess += "Entretenimiento: " + categorias.Entretenimiento + "\n";
        alert(mess);

    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    else if (opcion === "5")
        alert(
            "Gracias por usar nuestro servicio"
        )
                booleano = false;
}































































// Angel Niño DaVLA - C.C 1.005.335.914