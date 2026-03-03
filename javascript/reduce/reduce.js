//reduz os elementos de um vetor para um só valor

let precos=[1.50,2,10,12.34];
let total=precos.reduce(somar);

console.log(total);

function somar(acumulador, elemento){  //(anterioar+proximo), depois a soma dos dois é returnada ao acumulador, (acumulador+proximo)
    
    return acumulador+elemento;
}