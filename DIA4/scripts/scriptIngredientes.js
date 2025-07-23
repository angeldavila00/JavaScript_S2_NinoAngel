//##########################
//   QUIZ   
//##########################

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
]

    
let booleano = true;
while (booleano === true){
    let opcion = prompt (
        'Bienvenido a la hamburgueseria sesion de ingredientes\
        \n1. agregar ingredientes\
        \n2. Ver ingredintes\
        \n3. Eiminar ingrediente\
        \n4. edita ingrediente\
        \n5. Salir')



    if (opcion === "1"){
        let nombre =prompt('Ingresa el nombre del ingrediente que quieres agregar: ');
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
        else if (opcion === "2"){
        let leng = ingredientes.length;
        for (let i=0;i<leng;i++){
            alert (
                "Ingrediente# " + (i+1) + "\n" +
                "Nombre: " + ingredientes[i]["nombre"] + "\n" +
                "Descripcion: " + ingredientes[i]["descripcion"] + "\n" +
                "Precio: " + ingredientes[i]["precio"] + "\n" +
                "Stock: " + ingredientes[i]["stock"]
            )
            
        }
    }
        else if (opcion === "3"){
        let leng = ingredientes.length;
        for (let i=0;i<leng;i++){
            alert (
                "Ingrediente# " + (i+1) + "\n" +
                "Nombre: " + ingredientes[i]["nombre"] + "\n" +
                "Descripcion: " + ingredientes[i]["descripcion"] + "\n" +
                "Precio: " + ingredientes[i]["precio"] + "\n" +
                "Stock: " + ingredientes[i]["stock"]
            )
            
        }
        let eli = prompt("Dime el numero del ingrediente: ");
        ingredientes.pop(eli-1);
    }

        else if (opcion === "4") {
            let leng = ingredientes.length;
        for (let i=0;i<leng;i++){
            alert (
                "Ingrediente# " + (i+1) + "\n" +
                "Nombre: " + ingredientes[i]["nombre"] + "\n" +
                "Descripcion: " + ingredientes[i]["descripcion"] + "\n" +
                "Precio: " + ingredientes[i]["precio"] + "\n" +
                "Stock: " + ingredientes[i]["stock"]
            )
        }
        let num = prompt('Ingresa el numero del usuario que quieres editar: ');
        let nam = prompt('Dime el nuevo nombre del ingrediente:');
        let desc = prompt ('Dime la descripcion: ');
        let pesos = prompt('Dime el nuevo precio del ingrediente. ');
        let cant = prompt('Dime la cantidadel ingrediente: ');
        ingredientes[num-1]["nombre"]=nam;
        ingredientes[num-1]["descripcion"]= desc;
        ingredientes[num-1]["precio"]=pesos;
        ingredientes[num-1]["stock"]=cant;

        }
    
    
    
    
        else if (opcion === "5"){
        booleano = false;
        alert ("Gracias por usar nuestro servicio")
    }

}







// ANGEL NIÑO DAVILA - C.C 1005335914