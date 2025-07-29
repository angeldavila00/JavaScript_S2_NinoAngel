// consumo de API
// mediante XMLHttpRequest

//Modularizar el consumo de api
function buscarPesonaje (){
    const nombreUsar = prompt("DIme el nombre del personaje");
    const xhr = new XMLHttpRequest(); //La importancia del XML
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`; 
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status == 200){
            try {

                const daticos = JSON.parse (xhr.responseText);
                alert("The character is:" + "\n" +
                "Name: "+daticos["results"][0]["name"]+"\n"+
                "Status: "+daticos["results"][0]["status"]+"\n"+
                "Specie: "+daticos["results"][0]["species"]
                )
            }
            catch(err){

                console.log(err.message);
            }
        }
    };
    xhr.send();
}

buscarPesonaje();

