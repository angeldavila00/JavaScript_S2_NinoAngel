function buscarPersonaje() {
    document.getElementById("resultados").innerHTML = ``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const xhr = new XMLHttpRequest();
    const url = `https://www.superheroapi.com/api.php/77d06cc0e26f7a93fcf72b83ad463165/search/${nombreUsar}`
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                let data = JSON.parse(xhr.responseText);
                console.log(data)
                for (let i = 0; i < data.results.length; i++) {
                    let division = document.getElementById("resultados");
                    division.innerHTML += `
                        <div class="card">
                        <img src="${data["results"][i]["image"]["url"]}" alt="">
                            <h3>${data["results"][i]["name"]}</h3>
                        </div>`
                    console.log(data)
                }
            } catch (err) {
                console.log("no")
            }
        }

    }
    xhr.send();
}