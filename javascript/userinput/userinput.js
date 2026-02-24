/*let usuarioB;

usuarioB=window.prompt("Escreva o seu usuario: ");

console.log(usuarioB);*/

let usuario;

document.getElementById("enviar").onclick=function(){
    usuario=document.getElementById("usuario").value;
    console.log(usuario);
    document.getElementById("titulo").textContent=`Bem vindo ${usuario}!`
}