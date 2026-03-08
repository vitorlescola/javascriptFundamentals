const escolhas=["pedra","papel","tesoura"];
let pontosPlayer=0;
let pontosCpu=0;

function jogar(escolhaPlayer){
    const escolhaCpu=escolhas[Math.floor(Math.random()*3)];
    let resultado="";

    if(escolhaPlayer===escolhaCpu){
        resultado="EMPATE!";
    }else{
        switch(escolhaPlayer){
            case "pedra":
                resultado=(escolhaCpu==="tesoura")?"VOCÊ VENCEU!":"CPU VENCEU!";
                break;
            case "papel":
                resultado=(escolhaCpu==="pedra")?"VOCÊ VENCEU!":"CPU VENCEU!";
                break;
            case "tesoura":
                resultado=(escolhaCpu==="papel")?"VOCÊ VENCEU!":"CPU VENCEU!";
                break;        
        }
    }

    document.getElementById("jogadorDisplay").textContent=`JOGADOR: ${escolhaPlayer}`;
    document.getElementById("cpuDisplay").textContent=`CPU: ${escolhaCpu}`;
    document.getElementById("resultado").textContent=resultado;

    document.getElementById("resultado").classList.remove("verde","vermelho","amarelo");

    switch(resultado){
        case "VOCÊ VENCEU!":
            document.getElementById("resultado").classList.add("verde");
            pontosPlayer++;
            document.getElementById("pontosPlayerDisplay").textContent=pontosPlayer;
            break;
        case "CPU VENCEU!":
            document.getElementById("resultado").classList.add("vermelho");
            pontosCpu++;
            document.getElementById("pontosCpuDisplay").textContent=pontosCpu;
            break;    
        case "EMPATE!":
            document.getElementById("resultado").classList.add("amarelo");
            break;    
    }
}