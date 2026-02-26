let nome="Fulano     ";
console.log(nome);

console.log(nome.charAt(0));  //pega o primeiro caracter

console.log(nome.indexOf("a"));  //a posição do primeiro "a"

console.log(nome.lastIndexOf("n"));  //a posição do ultimo "n"

console.log(nome.length);  //mostra o tamanho do string

nome=nome.trim();  //remove espaços vazios
console.log(nome);

nome=nome.toLocaleUpperCase();  //maiusculo
console.log(nome);

nome=nome.toLocaleLowerCase();  //minusculo
console.log(nome);

//nome=nome.repeat(3);  //repete 3 vezes
//console.log(nome);

let comeca=nome.startsWith(" ");  //ve se a string começa com espaço vazio
console.log(comeca);

let acaba=nome.endsWith("o");  //ve se a string termina com "o"
console.log(acaba);

let tem=nome.includes("f");  //verifica se a string tem o caracter indicado
console.log(tem);

let cel="1234-5678";

cel=cel.replaceAll("-","");  //substitui todos os primeiros pelo segundo, neste caso substituio e - por nada
console.log(cel);

cel=cel.padStart(15,"0");  //coloca 0 no inicio da string até que ele tenha 15 caracteres, tambem tendo o padEnd
console.log(cel);

let nomeCompleto="Fulano da silva";

/*let primeirNome=nomeCompleto.slice(0,6);
console.log(primeirNome);

let primeiroChar=nomeCompleto.slice(0,1);
console.log(primeiroChar);

let ultimoChar=nomeCompleto.slice(-1);  //usando valores negativos começa do final
console.log(ultimoChar);*/

let primeiroNome=nomeCompleto.slice(0,nomeCompleto.indexOf(" "));  //mais dinamico
console.log(primeiroNome);

let ultimoNome=nomeCompleto.slice(nomeCompleto.indexOf(" ") +1);  //+1 para tirar o espaço
console.log(ultimoNome);

let email="email@gmail.com";
let usuario=email.slice(0,email.indexOf("@"));
let extencao=email.slice(email.indexOf("@")+1);

console.log(email);
console.log(usuario);
console.log(extencao);