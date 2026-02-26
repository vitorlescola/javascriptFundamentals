function texto(nome){
    console.log(`Texto da função, ${nome}`);
}

texto("teste");
texto("123");
texto("ahsgha");
texto("Fulano");
texto("hgh");

function adicao(x,y){
    return x+y;
}

let valor=adicao(10,15);
console.log(valor);

console.log(adicao(20,50));

function par(x){
    if(x%2===0){
        return console.log("é par");
    }else{
        return console.log("é impar");
    }
}

let num=window.prompt("Escreva um numero: ");
par(num);