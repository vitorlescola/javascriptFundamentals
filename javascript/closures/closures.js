//função definida dentro de outro função, a função interna tem acesso ao escopo da externa, usado para variaveis privadas, usado para frameworks como react,vue,angular

function externa(){

    let texto="texto";

    function interna(){

        console.log(texto);

    }

    interna();
}

externa();

/*function contador(){
    let cont=0;  //reseta toda a vez que chamar a função
    cont++
    console.log(cont);
}

contador();  //sempre vai ser 1
contador();
contador();
contador();
contador();*/

function criarContador(){
    let cont=0;

    function incremento(){
        cont++
        console.log(cont);
    }

    function getCont(){
        return cont;
    }

    return{incremento,getCont};  //retornando um objeto com um metodo de incremento e gerCont
}

const contador=criarContador();

contador.incremento();
contador.incremento();
contador.incremento();
contador.incremento();
contador.incremento();

console.log(`Contado: ${contador.getCont()}`);  //não é possivel acessar o valor sem um get

function createScore(){
    let pontos=0;

    function adicionarPontos(ganho){
        pontos+=ganho;
        console.log(pontos);
    }

    function retirarPontos(perda){
        pontos-=perda;
        console.log(pontos);
    }

    function getPontos(){
        return pontos;
    }

    return{adicionarPontos,retirarPontos,getPontos};
}

const pontos=createScore();

pontos.adicionarPontos(51);
pontos.retirarPontos(1);
console.log(`Pontos: ${pontos.getPontos()}`);