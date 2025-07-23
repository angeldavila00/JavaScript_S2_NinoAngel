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
]




let booleano = true;
while (booleano === true){
    let opcion = prompt (
        'Bienvenido a la hamburgueseria sesion de ingredientes\
        \n1. agregar hamburguesa\
        \n2. Ver hamburguesa\
        \n3. Eiminar hamburguesa\
        \n4. edita hamburguesa\
        \n5. Salir')



    if (opcion === "1"){
        let nombre =prompt('Ingresa el nombre de la hamburguesa: ');
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
        else if (opcion === "2"){
        let leng = hamburguesa.length;
        for (let i=0;i<leng;i++){
            alert (
                "Hamburguesa Numero# " + (i+1) + "\n" +
                "Nombre: " + hamburguesa[i]["nombre"] + "\n" +
                "categoria" + hamburguesa[i]["categoria"] + "\n" +
                "Ingrediente: " + hamburguesa[i]["ingredientes"] + "\n" +
                "Precio: " + hamburguesa[i]["precio"] + "\n" +
                "Chef: " + hamburguesa[i]["chef"]
            )
            
        }
    }
        else if (opcion === "3"){
            let leng = hamburguesa.length;
        for (let i=0;i<leng;i++){
            alert (
                "Hamburguesa Numero# " + (i+1) + "\n" +
                "Nombre: " + hamburguesa[i]["nombre"] + "\n" +
                "categoria" + hamburguesa[i]["categoria"] + "\n" +
                "Ingrediente: " + hamburguesa[i]["ingredientes"] + "\n" +
                "Precio: " + hamburguesa[i]["precio"] + "\n" +
                "Chef: " + hamburguesa[i]["chef"]
            )
            
        }
        let eli = prompt("Dime el numero de la hamburguesa: ");
        hamburguesa.pop(eli-1);
    }

        else if (opcion === "4") {
            let leng = hamburguesa.length;
        for (let i=0;i<leng;i++){
            alert (
                "Hamburguesa Numero# " + (i+1) + "\n" +
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
        let desc = prompt ('Dime la descripcion de la hamburguesa: ');
        let pesos = prompt('Dime el nuevo precio de la hamburguesa: ');
        let chefs = prompt('Dime el nombre del chef:  ');
        hamburguesa[num-1]["nombre"]=nam;
        hamburguesa[num-1]["categoria"]= cat;
        hamburguesa[num-1]["descripcion"]= desc;
        hamburguesa[num-1]["precio"]=pesos;
        hamburguesa[num-1]["stock"]=chefs;

        }
    
    
    
    
        else if (opcion === "5"){
        booleano = false;
        alert ("Gracias por usar nuestro servicio")
    }

}







// ANGEL NIÑO DAVILA - C.C 1005335914