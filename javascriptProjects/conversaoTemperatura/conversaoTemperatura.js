let temperatura;

function converter(){
    if(document.getElementById("paraFer").checked){
        temperatura=document.getElementById("inserir").value;
        temperatura=Number(temperatura);
        temperatura=fer(temperatura);

        document.getElementById("resultado").textContent=temperatura+"°F";

    }else if(document.getElementById("paraCel").checked){
        temperatura=document.getElementById("inserir").value;
        temperatura=Number(temperatura);
        temperatura=cel(temperatura);

        document.getElementById("resultado").textContent=temperatura.toFixed(2)+"°C";  //toFixed é a quantidade de numeros apos a virgula

    }else{
        document.getElementById("resultado").textContent="Selecione uma conversão";
    }
}

function fer(temperatura){
    return temperatura*9/5+32;
}

function cel(temperatura){
    return (temperatura-32)*(5/9);
}