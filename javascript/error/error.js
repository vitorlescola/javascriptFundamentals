//error handling impede que um erro interrumpe o códgio inteiro, try{código que pode dar erro}, catch{lida com o problema do try}

/*try{
    console.log(a);
}

catch(error){
    console.error("Erro ao executar a função");
}

finally{
    console.log("Sempre aconteçe mesmo se deu erro");
}*/

console.log("abc");

try{
    let dividendo=Number(window.prompt("Escreva um dividendo: "));
    let divisor=Number(window.prompt("Escreva um divisor: "));
    let resultado=dividendo/divisor;

    if(divisor==0){
        throw new Error("Divisão por zero");
    }

    if(isNaN(dividendo)||isNaN(divisor)){
        throw new Error("Não é um numero");
    }

    console.log(resultado);
}

catch(error){
    console.error(error);
}