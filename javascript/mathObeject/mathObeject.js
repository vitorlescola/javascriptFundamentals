console.log(Math.PI);  //Math é um objeto padrão do javascript
console.log(Math.E);

let x=3.21;
let y=2;
let z;

z=Math.round(x);  //floor(para baixo), ceil(para cima), trunc(elimina os decimos),  pow(potencia). sqrt(raiz quadrada), log(log), sin() cos() tan() (trigonometria), 
                  //abs(transforma em positivo), sign()

console.log(z);

let max=Math.max(x, y, z);
let min=Math.min(x, y, z);

console.log(max);
console.log(min);

let aleatorio=Math.random();  //cria um valor aleatorio entre 0 e 1;

console.log(aleatorio);

aleatorio=Math.floor(Math.random()*6)+1;  //faz com que o valor seja entre 1 e 6 e remove os decimais

console.log(aleatorio);

const btn=document.getElementById(`btn`);
const valorA=document.getElementById(`valorA`);
let valor;

btn.onclick=function(){
    valor=Math.floor(Math.random()*100)+1;
    valorA.textContent=valor;
}