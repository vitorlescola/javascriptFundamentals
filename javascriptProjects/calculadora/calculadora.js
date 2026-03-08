const display=document.getElementById("display");
let erro=false;
let historico=[0];
let historicoAtivo=false;

function adicionarAoDisplay(input){
    if(erro){
        limpar();
        erro=false;
    }
    display.value+=input;
}

function calcular(){
    try{
        let valor=display.value=eval(display.value);
        historico.push(valor);
        console.log(historico);
    }
    catch(error){
        display.value="Erro";
        erro=true;
    }
}

function limpar(){
    display.value="";
}

function mostrarHistorico(){
    if(historicoAtivo){
        document.getElementById("historicoCon").style.display="none";
        historicoAtivo=false;
    }else{
        document.getElementById("historicoCon").style.display="block";
        historicoAtivo=true;
    }
    document.getElementById("valores").textContent=historico;
}