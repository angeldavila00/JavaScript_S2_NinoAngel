function buscarPesonaje() {
    //document.getElementById("resultados").innerHTML=``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const xhr = new XMLHttpRequest(); //La importancia del XML
    const url = `https://swapi.py4e.com/api/people/${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status == 200){
            try {
                let data = JSON.parse(xhr.responseText);
                if (data.results && data.results.length > 0) {
                    for (let i = 0; i < data.results.length;i++){
                        let division = document.getElementById("resultados");
                        division.innerHTML+= `
                        
                        
                        
                        
                        `

                    }

                }
            }
            catch (err) {

                console.log(err.message);
        }
        }

        
        
        }
        xhr.send();
    }
    


buscarPesonaje();