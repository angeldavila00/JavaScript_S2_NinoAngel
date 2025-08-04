function crearCartas(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');

    xhr.onload = function(){
        if (xhr.readyState===4 &&  xhr.status === 200);
            const respuesta = JSON.parse(xhr.responseText);
        sacarCarta(respuesta.)
    }
    
}