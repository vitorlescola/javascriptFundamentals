//cria um vetor novo filtando os elementos

let numeros=[1,2,3,4,5,6,7,8,9,10];
let pares=numeros.filter(filtrarImpar);
let imapares=numeros.filter(filtrarPares);

console.log(...pares);
console.log(...imapares);

function filtrarImpar(elemento){
    
    return elemento%2===0;  //retorna um bool, o filter pega qualquer valor que retorna true e coloca no novo vetor
}

function filtrarPares(elemento){

    return elemento%2!==0;
}