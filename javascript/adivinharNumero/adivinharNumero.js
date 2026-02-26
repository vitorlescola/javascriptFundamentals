const resposta=Math.floor(Math.random()*(100-1+1))+1;
let tentativas=0;
let chute;
let jogando=true;

while(jogando){
    chute=window.prompt("Adivinhe um numero entre 1 e 100: ");
    chute=Number(chute);

    if(isNaN(chute)){  //isNan verifica se um valor não é m numero (Not A Nunber)
        window.alert("Insira um valor valido");
    }else if(chute<1||chute>100){
        window.alert("Insira um valor valido");
    }else{
        tentativas++;
        if(chute<resposta){
            window.alert("O chute foi menor que a resposta");
        }else if(chute>resposta){
            window.alert("O chute foi maior que a resposta");
        }else{
            window.alert(`Você acertou com ${tentativas} tentativas! é resposta é ${resposta}`);
            jogando=false;
        }
    }
}