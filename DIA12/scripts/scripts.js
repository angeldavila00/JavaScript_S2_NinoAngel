document.getElementById('btnColor').addEventListener('click',() =>{
    console.log("holaaaa");
    const cuadro = document.getElementById('cuadro');
    cuadro.classList.toggle('cambio');
})

//Elementos generales

cuadro.addEventListener('click', ()=> {
    alert('le diste click ')
    //cambia de color con un click
    const cuadro = document.getElementById('cuadro');
    cuadro.classList.toggle('cambio');

    setTimeout(() =>{
        const cuadro = document.getElementById('cuadro');
        cuadro.classList.toggle('cambio2');
    }, 3000);
    
    
})

//mouseover y mouseout
//hover (cuando esta encima de // cuando sale de ....)

cuadro.addEventListener('mouseover', ()=>{
    cuadro.style.border = '3px solid black';
});

cuadro.addEventListener('mouseout', ()=>{
    cuadro.style.border = 'none';
});

//jugando con teclas
document.addEventListener('keydown', (e) => {
    document.getElementById('textoXD').innerHTML += `<p>Presionaste: ${e.key}</p>`;
    console.log(`presionaste: ${e.key}`)
})