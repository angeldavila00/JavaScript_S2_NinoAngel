function buscarPesonaje() {
    const xhr = new XMLHttpRequest(); //La importancia del XML
    const url = `https://swapi.py4e.com/api/people/1/`;
    console.log(url);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
            try {

                const daticos = JSON.parse(xhr.responseText);
                /*alert("The character is:" + "\n" +
                    "Name: " + daticos["results"][0]["name"] + "\n" +
                    "Height: " + daticos["results"][0]["height"] + "\n" +
                    "Hair_Color: " + daticos["results"][0]["hair_color"]
                )*/
                console.log(daticos)
                console.log(daticos["name"])
            }
            catch (err) {

                console.log(err.message);
            }
        }
    };
    xhr.send();
}

buscarPesonaje();