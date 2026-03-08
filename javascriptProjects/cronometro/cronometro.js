let tempo=null;
let tempoInicio=0;
let passado=0;
let isCorrendo=false;

function comecar(){
    if(!isCorrendo){
        tempoInicio=Date.now()-passado;
        tempo=setInterval(update,10);
        isCorrendo=true;
    }
}

function parar(){
    if(isCorrendo){
        clearInterval(tempo);
        passado=Date.now()-tempoInicio;
        isCorrendo=false;
    }
}

function resetar(){
    clearInterval(tempo);
    tempoInicio=0;
    passado=0;
    isCorrendo=false;
    document.getElementById("cronometro").textContent="00:00:00:00";
}

function update(){
    const tempoAtual=Date.now();
    passado=tempoAtual-tempoInicio;

    let horas=Math.floor(passado/(1000*60*60));  //milissegundos para horas
    let minutos=Math.floor(passado/(1000*60)%60);
    let segundos=Math.floor(passado/1000%60);
    let milissegundos=Math.floor(passado%1000/10);

    horas=String(horas).padStart(2,"0");
    minutos=String(minutos).padStart(2,"0");
    segundos=String(segundos).padStart(2,"0");
    milissegundos=String(milissegundos).padStart(2,"0");

    document.getElementById("cronometro").textContent=`${horas}:${minutos}:${segundos}:${milissegundos}`;
}