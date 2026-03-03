//function expression é uma maneira de definir uma função como variavel ou valor, em vez de devlarar ela como um bloco de código reutilizavel

let texto=function(){  //pasando como variavel
    console.log("Texto");
}

texto();

setTimeout(function(){  //passando uma função como argumento
    console.log("3 segundos de espera");  //setTimout(callbakc,tempo)
},3000);  //3000 milesegundos

/*
Declarando uma função

let numeros=[1,2,3,4,5];

let quadradosE=numeros.map(quadradoE);

console.log(quadradosE);

function quadradoE(elemento){

    return Math.pow(elemento,2);
}*/

//como expression

let numeros=[1,2,3,4,5];

let quadradosE=numeros.map(function(elemento){  //em vez de declarar a função cria ela como  um argumento, nesse caso não precisa dar um nome a ela
    return Math.pow(elemento,2);
});

console.log(quadradosE);

let cubosE=numeros.map(function(elemento){
    return Math.pow(elemento,3);
})

console.log(...cubosE);

//arrow function é uma maneira mais simples de se escrever uma function expression, usado para funções simples que só vão ser usadas uma vez, (paremetros)=>código

let texto2=()=>console.log("Texto2");
texto2();

let texto3=(valor,texto)=>{console.log(`Texto2, ${valor}`)  //usar {código} para tiver mais de 1 linha
                     console.log(`2 linhas ${texto}`)};
texto3(5,"de texto");

setTimeout(()=>{console.log("4 segundos de espera")},4000);

let quadradosA=numeros.map((elemento)=>{return Math.pow(elemento,2)});
console.log(...quadradosA);

let cubosA=numeros.map((elemento)=>{return Math.pow(elemento,3)});
console.log(...cubosA);

let pares=numeros.filter((elemento)=>{return elemento%2===0});
let impares=numeros.filter((elemento)=>{return elemento%2!==0});
console.log(...pares);
console.log(...impares);

let soma=numeros.reduce((soma,elemento)=>soma+elemento);  //não precisa de return se só for uma linha
console.log(soma);