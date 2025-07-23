
let categorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]

let booleano = true;

while (booleano === true) {

    let opcion = prompt(
        'Bienvenido a la hamburgueseria sesion de categoria\
        \n1. agregar categoria\
        \n2. Ver categoria\
        \n3. Eiminar categoria\
        \n4. editar categoria\
        \n5. Salir')
    if (opcion === "1") {
        let nombre = prompt('Ingresa el nombre de la categoria que quieres agregar: ');
        let descripcion = prompt('Cual es la descripcion: ')

        categorias.push({
            "nombre": nombre,
            "descripcion": descripcion,


        });
    }
        else if (opcion === "2") {
        let leng = categorias.length;
        for (let i = 0; i < leng; i++) {
            alert(
                "Categoria# " + (i + 1) + "\n" +
                "Nombre: " + categorias[i]["nombre"] + "\n" +
                "Descripcion: " + categorias[i]["descripcion"]
                    
                )

        }
        }
        else if (opcion === "3") {
        let leng = categorias.length;
        for (let i = 0; i < leng; i++) {
            alert(
                "Categoria# " + (i + 1) + "\n" +
                "Nombre: " + categorias[i]["nombre"] + "\n" +
                "Descripcion: " + categorias[i]["descripcion"]
                    
                )

        }
        let eli = prompt("Dime el numero de la categoria: ");
        categorias.pop(eli - 1);
        }

        else if (opcion === "4") {
        let leng = categorias.length;
        for (let i = 0; i < leng; i++) {
            alert(
                "Categoria# " + (i + 1) + "\n" +
                "Nombre: " + categorias[i]["nombre"] + "\n" +
                "Descripcion: " + categorias[i]["descripcion"]
                    
                )
        }
        let num = prompt('Ingresa el numero del usuario que quieres editar: ');
        let nam = prompt('Dime el nuevo nombre del ingrediente:');
        let desc = prompt('Dime la descripcion: ');
        categorias[num - 1]["nombre"] = nam;
        categorias[num - 1]["descripcion"] = desc;


        }



        else if (opcion === "5") {
            booleano = false;
            alert("Gracias por usar nuestro servicio")
        }

}



    // ANGEL NIÑO DAVILA - C.C 1005335914
