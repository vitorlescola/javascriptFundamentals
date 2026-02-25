let idadeA=99;

if(idadeA>=18){
    console.log("Acesso liberado!");
}else{
    console.log("Você precisa ser maior de 18 anos para acessar!")
}

let idade;

document.getElementById("enviar").onclick=function(){
    idade=document.getElementById("inserir").value;
    idade=Number(idade);

    if(idade>=18){
        document.getElementById("resultado").textContent="Acesso liberado!";
    }else{
        document.getElementById("resultado").textContent="Você precisa ser maior de 18 anos para acessar!";
    }
}


let idadeB=18;
let mensagen=idadeB>=18?"Maior de idade":"Menor de idade";  //operador ternario em javascript
console.log(mensagen);