const xhr = new XMLHttpRequest();
xhr.open("GET","https://rickandmortyapi.com/api/character", true );
xhr.onload = function() {
    if (this.readyState == 4 && this.status == 200){
        
        const data = JSON.parse(this.response);
        

        console.log(data)
    }
}


xhr.send();