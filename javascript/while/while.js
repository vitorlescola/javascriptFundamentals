/*let usuario="";

while(usuario===""||usuario===null){
    
}*/

let usuario;

do{
    usuario=window.prompt("Escreva o seu usuario: ");
}while(usuario===""||usuario===null);

console.log(`Ola ${usuario}!`);


let login=false;
let nome;
let senha;

do{
    nome=window.prompt("Escreva o seu nome: ");
    senha=window.prompt("Escreva a sua senha: ");

    if(nome==="teste" && senha==="senha123"){
        login=true;
        console.log("Login com sucesso!")
    }else{
        console.log("Erro!");
    }
}while(!login)