function buscarPesonaje() {
    const xhr = new XMLHttpRequest(); //La importancia del XML
    const url = `https://swapi.py4e.com/api/people/`;
    console.log(url);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState === 4 && xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data.results);
                const main = document.getElementById("class");
            main.innerHTML = "";   

            for (let index = 0; index < data.results.length; index++){
                    const div = 
            }
            
        
        }
            
            
            
                catch (err) {

                    console.log(err.message);
            }
        }
    };
    xhr.send();
}

buscarPesonaje();