// Datos iniciales
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
];

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
];

let hamburguesa = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
];

let ingredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
];

//Menu Principal
function menuPrincipal(){
    let booleano = true;

    while (booleano === true){
        let opcion = prompt(
            'Bienvenido a la hamburgueseria - sistema de Gestion\
            \n1. Gestionar Categorias\
            \n2. Gestionar Chefs\
            \n3. Gestionar Hamburguesas\
            \n4. Gestionar Ingredientes\
            \n5. Salir');

            if (opcion === "1"){
                gestionarCategorias()
            }
            else if (opcion === "2"){
                gestionarChefs()
            }
            else if (opcion === "3"){
                gestionarHamburguesas()
            }
            else if (opcion === "4"){
                gstionarIngredientes()
            }
            else if (opcion === "5"){
                booleano = false;
                alert('Gracias por usar nuestro servicio')
            }
            else {
                alert('Opcion no valida, por favor intentar nuevamente')
            }
    }
}

//inicio del sistema

menuPrincipal();

// Gestionar categorías
function gestionarCategorias() {
    let booleano = true;
    while (booleano === true) {
        let opcion = prompt(
            'Bienvenido a la hamburgueseria sesion de categoria\
        \n1. agregar categoria\
        \n2. Ver categoria\
        \n3. Eiminar categoria\
        \n4. editar categoria\
        \n5. Volver al menu principal')
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
            let eli = prompt("Dime el numero de la categoria que deseas eliminar: ");
            categorias.splice(eli - 1, 1);
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
            alert("Regresando al menu principal")
        }
    }
}

// Gestionar chefs
function gestionarChefs() {
    let booleano = true;
    while (booleano === true) {

        let opcion = prompt(
            'Bienvenido a la hamburgueseria sesion de categoria\
        \n1. agregar chefs\
        \n2. Ver chefs\
        \n3. Eiminar chefs\
        \n4. editar chefs\
        \n5. Volver al menu principal')
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
            let eli = prompt("Dime el numero del chef que deseas eliminar: ");
            chefs.splice(eli - 1, 1);
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
            alert("Regresando al menu principal")
        }
    }
}
//Gestionar hamburguesas
function gestionarHamburguesas() {
    booleano = true;

    while (booleano === true) {
        let opcion = prompt(
            'Bienvenido a la hamburgueseria sesion de ingredientes\
        \n1. agregar hamburguesa\
        \n2. Ver hamburguesa\
        \n3. Eiminar hamburguesa\
        \n4. edita hamburguesa\
        \n5. Salir')

        if (opcion === "1") {
            let nombre = prompt('Ingresa el nombre de la hamburguesa: ');
            let categoria = prompt('Cual es la categoria de la hamburguesa: ej Clasica, Gourmet ')
            let ingrediente = prompt('Dime que ingredientes tiene: ')
            let precio = prompt('Cual es el precio de la hamburguesa: ')
            let chef = prompt('Como se llama el chef que preparo la hamburguesa: ')

            hamburguesa.push({
                "nombre": nombre,
                "categoria": categoria,
                "ingredientes": ingrediente,
                "precio": precio,
                "chef": chef,

            });
        }
        else if (opcion === "2") {
            let leng = hamburguesa.length;
            for (let i = 0; i < leng; i++) {
                alert(
                    "Hamburguesa Numero# " + (i + 1) + "\n" +
                    "Nombre: " + hamburguesa[i]["nombre"] + "\n" +
                    "categoria" + hamburguesa[i]["categoria"] + "\n" +
                    "Ingrediente: " + hamburguesa[i]["ingredientes"] + "\n" +
                    "Precio: " + hamburguesa[i]["precio"] + "\n" +
                    "Chef: " + hamburguesa[i]["chef"]
                )

            }
        }
        else if (opcion === "3") {
            let leng = hamburguesa.length;
            for (let i = 0; i < leng; i++) {
                alert(
                    "Hamburguesa Numero# " + (i + 1) + "\n" +
                    "Nombre: " + hamburguesa[i]["nombre"] + "\n" +
                    "categoria" + hamburguesa[i]["categoria"] + "\n" +
                    "Ingrediente: " + hamburguesa[i]["ingredientes"] + "\n" +
                    "Precio: " + hamburguesa[i]["precio"] + "\n" +
                    "Chef: " + hamburguesa[i]["chef"]
                )

            }
            let eli = prompt("Dime el numero de la hamburguesa que deseas eliminar: ");
            hamburguesa.splice(eli - 1, 1);
        }

        else if (opcion === "4") {
            let leng = hamburguesa.length;
            for (let i = 0; i < leng; i++) {
                alert(
                    "Hamburguesa Numero# " + (i + 1) + "\n" +
                    "Nombre: " + hamburguesa[i]["nombre"] + "\n" +
                    "categoria" + hamburguesa[i]["categoria"] + "\n" +
                    "Ingrediente: " + hamburguesa[i]["ingredientes"] + "\n" +
                    "Precio: " + hamburguesa[i]["precio"] + "\n" +
                    "Chef: " + hamburguesa[i]["chef"]
                )

            }
            let num = prompt('Ingresa el numero de la hamburguesa que quieres editar: ');
            let nam = prompt('Dime el nuevo nombre de la hamburguesa:');
            let cat = prompt("Dime que categoria es la hamburguesa: ej Clasica, Gourmet")
            let desc = prompt('Dime la descripcion de la hamburguesa: ');
            let pesos = prompt('Dime el nuevo precio de la hamburguesa: ');
            let chefs = prompt('Dime el nombre del chef:  ');
            hamburguesa[num - 1]["nombre"] = nam;
            hamburguesa[num - 1]["categoria"] = cat;
            hamburguesa[num - 1]["descripcion"] = desc;
            hamburguesa[num - 1]["precio"] = pesos;
            hamburguesa[num - 1]["stock"] = chefs;
        }
        else if (opcion === "5") {
            booleano = false;
            alert(
                'Volviendo al menu principal'
            )
        }
    }
}
//Gestionar Ingredientes 

function gestionarIngredientes() {
    let booleano = true;
    while (booleano === true) {
        let opcion = prompt(
            'Bienvenido a la hamburgueseria sesion de ingredientes\
        \n1. agregar ingredientes\
        \n2. Ver ingredintes\
        \n3. Eiminar ingrediente\
        \n4. edita ingrediente\
        \n5. Salir')



        if (opcion === "1") {
            let nombre = prompt('Ingresa el nombre del ingrediente que quieres agregar: ');
            let descripcion = prompt('Como es la descripcion del ingrediente: ')
            let precio = prompt('Cual es su precio: ')
            let stock = prompt('Cuanto es el stock de ese ingrediente:')

            ingredientes.push({
                "nombre": nombre,
                "descripcion": descripcion,
                "precio": precio,
                "stock": stock,

            });
        }
        else if (opcion === "2") {
            let leng = ingredientes.length;
            for (let i = 0; i < leng; i++) {
                alert(
                    "Ingrediente# " + (i + 1) + "\n" +
                    "Nombre: " + ingredientes[i]["nombre"] + "\n" +
                    "Descripcion: " + ingredientes[i]["descripcion"] + "\n" +
                    "Precio: " + ingredientes[i]["precio"] + "\n" +
                    "Stock: " + ingredientes[i]["stock"]
                )

            }
        }
        else if (opcion === "3") {
            let leng = ingredientes.length;
            for (let i = 0; i < leng; i++) {
                alert(
                    "Ingrediente# " + (i + 1) + "\n" +
                    "Nombre: " + ingredientes[i]["nombre"] + "\n" +
                    "Descripcion: " + ingredientes[i]["descripcion"] + "\n" +
                    "Precio: " + ingredientes[i]["precio"] + "\n" +
                    "Stock: " + ingredientes[i]["stock"]
                )

            }
            let eli = prompt("Dime el numero del ingrediente: ");
            ingredientes.pop(eli - 1);
        }

        else if (opcion === "4") {
            let leng = ingredientes.length;
            for (let i = 0; i < leng; i++) {
                alert(
                    "Ingrediente# " + (i + 1) + "\n" +
                    "Nombre: " + ingredientes[i]["nombre"] + "\n" +
                    "Descripcion: " + ingredientes[i]["descripcion"] + "\n" +
                    "Precio: " + ingredientes[i]["precio"] + "\n" +
                    "Stock: " + ingredientes[i]["stock"]
                )
            }
            let num = prompt('Ingresa el numero del usuario que quieres editar: ');
            let nam = prompt('Dime el nuevo nombre del ingrediente:');
            let desc = prompt('Dime la descripcion: ');
            let pesos = prompt('Dime el nuevo precio del ingrediente. ');
            let cant = prompt('Dime la cantidadel ingrediente: ');
            ingredientes[num - 1]["nombre"] = nam;
            ingredientes[num - 1]["descripcion"] = desc;
            ingredientes[num - 1]["precio"] = pesos;
            ingredientes[num - 1]["stock"] = cant;
        }
        else if (opcion === "5") {
            booleano = false;
            alert("Gracias por usar nuestro servicio")
        }
    }
}