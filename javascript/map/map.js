//aceita um callback é aplica aquela função para todos os elementos de um vetor, semelhar ao forEach porem o map cria um novo vetor

const numeros=[1,2,3,4,5];
const quadradov=numeros.map(quadrado);
const cubos=numeros.map(cubo);

function quadrado(elemento){

    return Math.pow(elemento,2);
}

function cubo(elemento){
    return Math.pow(elemento,3);
}

console.log(...numeros);
console.log(...quadradov);
console.log(...cubos);

mostrarDOM();

function mostrarDOM(){
    document.getElementById("base").textContent=`Base: ${numeros.join(" ")}`;
    document.getElementById("quadrado").textContent=`Quadrado: ${quadradov.join(" ")}`;
    document.getElementById("cubo").textContent=`Cubo: ${cubos.join(" ")}`;
}

const datas=["2025-1-1","2025-1-2","2025-1-3"];
const americ=datas.map(formatarDatas);

function formatarDatas(elementos){
    const partes=elementos.split("-");  //separa os elementos a cada "-"

    return `${partes[1]}/${partes[2]}/${partes[0]}`;  //formata as datas como mes dia ano (americano)
}

console.log(americ);