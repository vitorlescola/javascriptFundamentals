const nomes=["fulano","fulana","joao","pedro","maria"];

const jsonString=JSON.stringify(nomes);  //stringify coverte um objeto js para um json string, json.parse() fazo inverso

console.log(nomes);
console.log(jsonString);

//fetch um json

fetch("pessoa.json").then(response=>response.json()).then(value=>console.log(value))
fetch("nomes.json").then(response=>response.json()).then(value=>console.log(value))