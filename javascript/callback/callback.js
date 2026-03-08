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

//existem outras maneiras mais simples de lidar com isso

//promise, coloca o código dentro do pbjeto promise, new Promise((resolve,reject)=>{código})

console.log("                      ");

function pri(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("1");
        },3000);
    });
}

function seg(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("2");
        },2000);
    })
}

function ter(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("3");
        },1000);
    })
}

pri().then(value=>{console.log(value); return seg()})
.then(value=>{console.log(value);return ter()})
.then(value=>{console.log(value);console.log("FIM")})
.catch(error=>console.error(error));  //catch se alguma não deu certo

//async/await, async faz uma função dar return de uma Promise, await faz uma função esperar uma Promise

console.log("                      ");

function qua(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("4");
        },6000);
    });
}

function qui(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("5");
        },5000);
    })
}

function sex(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("6");
        },4000);
    })
}

async function tarefas() {
    try{
        const quaResult=await qua();  //await precisa de um async
        console.log(quaResult);

        const quiResult=await qui();
        console.log(quiResult);

        const sexResult=await sex();
        console.log(sexResult);

        console.log("FIM 2");
    }
    catch(error){
        console.error(error);
    }
}

tarefas();