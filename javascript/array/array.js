let numeros=[1,2,3,4,5];

console.log(numeros);  //mostra o vetor inteiro

numeros.push(6)  //adiciona ao final
numeros.pop()  //remove o ultimo
numeros.unshift(0)  //adiciona ao inicio
//numeros.shift();  //remove o primeiro

for(let i=0;i<numeros.length;i++){
    console.log(numeros[i]);
}

console.log("                           ")

for(let num of numeros){  //versão abreviada
    console.log(num);
}

let nomes=["jaoa","fulano","maria","pedro","ana"];
nomes.sort();  //organiza na ordem alfabetica, .reverse para ser invertido.

for(let nome of nomes){  //versão abreviada
    console.log(nome);
}

//... permite que um vetor ou string seja dividido entre varios elementos

let numeros2=[1,2,3,4,5];

let maior=Math.max(numeros2);  //não funciona pois tem varios valores
console.log(maior);

maior=Math.max(...numeros2);  //separa o vetor em elementos diferentes
console.log(maior);

let menor=Math.min(...numeros2);
console.log(menor);

let usuario="nome";
let letras=[...usuario];

console.log(usuario);
console.log(letras);

letras=[...usuario].join("-");  //reune a string novamente adicionando um - entre todos os caracteres
console.log(letras);

let total=[...numeros,0,0,0,...numeros2];  //também permite juntar vetores diferentes, e adicionar valores a mais
console.log(total);

//o operador rest (...nome) faz o oposto, e junta varios elementos diferentes em um vetor

let n1=1;
let n2=2;
let n3=3;
let n4=4;
let n5=5;

function juntar(...ns){  //ela aceita qualquer quantidade de argumentos
    console.log("                       ");
    console.log(...ns);  //separa eles denovo
    console.log(ns);
}

juntar(n1,n2,n3,n4,n5);

//a diferença é que o ...rest é um parametro e o spread é um operador 
//rest parameter também pode ser usado para criar um vetor

function criar(...ns){
    return ns;
}

ns=criar(n1,n2,n3,n4,n5);

console.log("                 ");
console.log(ns);

//

function somar(...numeros){  //pode ser usado para somar um nunero qualquer de valores
    let resultado=0;

    for(let numero of numeros){
        resultado+=numero;
    }
    return resultado;
}

let soma=somar(1,2,3,4,5,6,7,8,9,10);
console.log(soma);

//

function Calmedia(...numeros){  //pode ser usado para calcular uma media
    let resultado=0;

    for(let numero of numeros){
        resultado+=numero;
    }
    return resultado/numeros.length;
}

let media=Calmedia(1,2,3,4,5,6,7,8,9,10);
console.log(media);

//

function juntarNome(...nomes){
    return nomes.join(" ");
}

let nome=juntarNome("Fulano","da","Silva");
console.log(nome);