/*fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(response=>{
    if(!response.ok){  //ve se deu erro
        throw new Error("Falha ao fazer o fetch");
    }

    return response.json()    //converta a resposta a json
})
.then(data=>console.log(data))  //tambem usa promise, data do json
.catch(error=>console.error(error));  //fetch usa promise*/

//usando async

async function fetchData(){
    try{
        const nome=document.getElementById("pkNome").value.toLowerCase();

        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

        if(!response.ok){
            throw new Error("Falha ao fazer o fetch");
        }

        const data=await response.json();
        const pkSprite=data.sprites.front_default;
        
        document.getElementById("sprite").src=pkSprite;
        document.getElementById("sprite").style.display="block";
    }
    catch(error){
        console.error(error);
    }
}