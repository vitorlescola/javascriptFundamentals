//js não espera um processo acabar para continuar o codigo, callback é uma maneira de garantir que uma função aconteça depois de outra terminar

function texto1(callback){  //adiciona um parametro para aceitar o argumento
    console.log("ABC");
    
    callback();  //chama a proxima função
}

function texto2(){
    console.log("123");
}

texto1(texto2);  //para usar callbacl você passa uma função como argumento para outra função
//texto2();

soma(mostrar,10,5);

function soma(callback, x, y){
    let resultado=x+y;

    callback(mostrarDom,resultado);
}

function mostrar(callback,resultado){
    console.log(resultado);
    
    callback(resultado);
}

function mostrarDom(resultado){
    document.getElementById("result").textContent=resultado;
}