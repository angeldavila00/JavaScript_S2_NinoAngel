
// // Función que toma dos números y un callback para realizar una operación
// function realizarOperacion(num1, num2, operacionCallback) {
//     console.log(`Operación: ${num1} y ${num2}`);
//     // Llama al callback pasándole los dos números como argumentos
//     operacionCallback(num1, num2);
// }

// // Callback que suma dos números
// function sumar(num1, num2) {
//     console.log(`Suma: ${num1 + num2}`);
    
// }

// // Callback que multiplica dos números
// function multiplicar(a, b) {
//     console.log(`Multiplicación: ${a * b}`);
// }

// // Uso de la función con los callbacks
// realizarOperacion(5, 3, sumar);
// realizarOperacion(5, 3, multiplicar);

// function realizarTareas(num1 , num2 , operacion){
//     console.log(`Operacion ${num1} y ${num2}`);
//     operacion(num1,num2);
// }

// function dividir (a, b){
//     console.log(`Dividion ${a / b}`)

// }

// realizarTareas(4 , 2, dividir);


let booleano = true;
while(booleano === true){
    let calculadora = prompt (
        `BIENVENIDO A LA CALCULADORA VIRTUAL
        1. SUMA
        2. RESTA
        3. MULTIPLICACION
        4. DIVISION
        5. SALIR`
    )

    if (calculadora === "1"){
        let num1 = prompt(`Dime el primer numero para sumar`);
        let num2 = prompt(`Dime el segundo numero para realizar la suma`)
        let sumar = num1 + num2;
        console.log(sumar);
        
    }
    
}