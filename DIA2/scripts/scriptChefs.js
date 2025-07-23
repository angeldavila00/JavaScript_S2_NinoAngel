
let chefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]

let booleano = true;

while (booleano === true) {

    let opcion = prompt(
        'Bienvenido a la hamburgueseria sesion de categoria\
        \n1. agregar chefs\
        \n2. Ver chefs\
        \n3. Eiminar chefs\
        \n4. editar chefs\
        \n5. Salir')
    if (opcion === "1") {
        let nombre = prompt('Ingresa el nombre del chef que quieres agregar: ');
        let especialidad = prompt('Cual es la especialidad: ')

        chefs.push({
            "nombre": nombre,
            "especialidad": especialidad,


        });
    }
        else if (opcion === "2") {
        let leng = chefs.length;
        for (let i = 0; i < leng; i++) {
            alert(
                "Numero chef# " + (i + 1) + "\n" +
                "Nombre: " + chefs[i]["nombre"] + "\n" +
                "Especialidad: " + chefs[i]["especialidad"]
                    
                )

        }
        }
        else if (opcion === "3") {
            let leng = chefs.length;
            for (let i = 0; i < leng; i++) {
                alert(
                    "Numero Chef# " + (i + 1) + "\n" +
                    "Nombre: " + chefs[i]["nombre"] + "\n" +
                    "Especialidad: " + chefs[i]["especialidad"]
                        
                    )

            }
        let eli = prompt("Dime el numero del chef: ");
        chefs.pop(eli - 1);
        }

        else if (opcion === "4") {
            let leng = chefs.length;
            for (let i = 0; i < leng; i++) {
                alert(
                    "Numero Chef# " + (i + 1) + "\n" +
                    "Nombre: " + chefs[i]["nombre"] + "\n" +
                    "Especialidad: " + chefs[i]["especialidad"]
                        
                    )
    
            }
        let num = prompt('Ingresa el numero del usuario que quieres editar: ');
        let nam = prompt('Dime el nuevo nombre del ingrediente:');
        let desc = prompt('Dime la especialidad: ');
        chefs[num - 1]["nombre"] = nam;
        chefs[num - 1]["especialidad"] = desc;


        }



        else if (opcion === "5") {
            booleano = false;
            alert("Gracias por usar nuestro servicio")
        }

}



    // ANGEL NIÑO DAVILA - C.C 1005335914
