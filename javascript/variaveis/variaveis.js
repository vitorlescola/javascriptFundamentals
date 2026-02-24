let i;  //variavel tipo Undefined
i=100;  //Number (int e float)

console.log(i);

let x=19;
console.log(typeof x);  //typeof para ver o tipo da variavel
console.log(`O valor da variavel x é ${x}`);  //${}  coloca variavel na frase

let nome="Nome da silva"  //string

console.log(typeof nome);
console.log(`O seu nome é ${nome}`);

let existe=true;  //boolean

console.log(typeof existe);
console.log(existe);

//Bigint para numeros maiores, Object	A collection of key-value pairs of data, Null	A primitive value representing object absence, Symbol	A unique and primitive identifier

document.getElementById("p1").textContent=`Nome completo: ${nome}`;
document.getElementById("p2").textContent=`Idade: ${i}`;
document.getElementById("p3").textContent=`Existe: ${existe}`;

let n1=50;
console.log(n1);
n1+=5;  //+mais, -menos, *vezes, /divisão
console.log(n1);
n1**=2  //potencia
console.log(n1);

let sobra=n1%2  //o que sobra da divisão
console.log(sobra);

n1++;
console.log(n1);