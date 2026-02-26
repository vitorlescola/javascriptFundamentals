//Sem method chaining

let usuario=window.prompt("Escreva o seu usuario: ");

usuario=usuario.trim();
let letra=usuario.charAt(0);
letra=letra.toLocaleUpperCase();
let resto=usuario.slice(1);
resto=resto.toLocaleLowerCase();
usuario=letra+resto;

console.log(usuario);

//Com method Chaining

usuario=usuario.trim().charAt(0).toLocaleUpperCase() + usuario.trim().slice(1).toLocaleLowerCase();
console.log(usuario);