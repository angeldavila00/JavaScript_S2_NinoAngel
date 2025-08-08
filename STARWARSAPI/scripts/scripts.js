function BuscarPersonaje() {
    //document.getElementById("resultados").innerHTML=``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const xhr = new XMLHttpRequest(); //La importancia del XML
    const url = `https://swapi.py4e.com/api/people/?search=${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status == 200) {
            try {
                let data = JSON.parse(xhr.responseText);
                console.log(data)
                if (data.results && data.results.length > 0) {
                    let division = document.getElementById("resultados");
                    division.innerHTML += `
                        <div class="card">
                        <h1>${data["results"][0]["name"]}</h1>
                        <p>${data["results"][0]["eye_color"]}</p>
                        <p>${data["results"][0]["birth_year"]}</p>
                        <p>${data["results"][0]["mass"]}</p>
                        </div>
                        `
                }
                console.log(division)
            }
            catch (err) {

                console.log(err.message);
            }
        }



    }
    xhr.send();
}