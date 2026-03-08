//setTimeout(callback,delay)

/*function texto(){
    window.alert("Texto");
}

setTimeout(texto,3000);

//tambem funciona com arrow function

setTimeout(()=>{
    window.alert("aaaa");
},5000)

const timeId=setTimeout(()=>window.alert("aaaa"),5000);
clearTimeout(timeId);  //remove o timeout, precisa de um id*/

let timeoutId;
let intervalId;
let tempo=0;

function iniciar(){
    document.getElementById("tempo").textContent=tempo;

    timeoutId=setTimeout(()=>window.alert("Espera de 3 segundos!"),3000)
    console.log("inicio");

        intervalId=setInterval(() => {
            tempo++;
            document.getElementById("tempo").textContent=tempo;

            if(tempo>=3){
         clearInterval(intervalId);
       }

        }, 1000);
}

function resetar(){
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    tempo=0;
    document.getElementById("tempo").textContent=tempo;
    
    console.log("reset");
}