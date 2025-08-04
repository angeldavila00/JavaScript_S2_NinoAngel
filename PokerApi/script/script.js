const falso = document.getElementById("flaso")


function crearCartas(){
    const xhr = new XMLHttpRequest();
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    console.log(url)
    xhr.open('GET',url, true);

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 &&  xhr.status === 200);
        try{
            const respuesta = JSON.parse(xhr.responseText);
            console.log(respuesta);
            deckId = respuesta.deck_id;
            console.log(deckId);
            cambio()
        }catch{
            
        }
    }
    xhr.send();
}

function inicio (){
    inicio(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`);{
    
    }
}


function cambio(){
    for (let i = 0; i < 6; i++){
        document.getElementById(`flaso${i + 1}`).src ="https://deckofcardsapi.com/static/img/back.png";
    }
    inicio()
}


crearCartas()