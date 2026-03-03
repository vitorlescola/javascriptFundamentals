//iterar os elementos de um vetor e aplicar uma função especifica para cada
let numeros=[1,2,3,4,5];

numeros.forEach(dobrar);
numeros.forEach(mostrar);

function dobrar(elemento,index,vetor){  //elemento index e vetor já é dado automatico pelo forEach
    vetor[index]=elemento*2;
}

function mostrar(elemento){
    console.log(elemento);
}

let nomes=["joao","matheus","pedro"];

nomes.forEach(prim);
nomes.forEach(mostrar);

function maiusc(elemento, index, vetor){
    vetor[index]=elemento.toUpperCase();
}

function prim(elemento, index, vetor){
    vetor[index]=elemento.charAt(0).toUpperCase()+elemento.slice(1);
}