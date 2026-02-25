const diminuirB=document.getElementById(`diminuirB`);
const resetarB=document.getElementById(`resetarB`);
const aumentarB=document.getElementById(`aumentarB`);
const contadorNum=document.getElementById(`contadorNum`);
let valor=0;

diminuirB.onclick=function(){
    valor--;
    contadorNum.textContent=valor;

    if(valor<10){
        contadorNum.style.color="black";
    }
}

resetarB.onclick=function(){
    valor=0;
    contadorNum.textContent=valor;

   contadorNum.style.color="black";
}

aumentarB.onclick=function(){
    valor++;
    contadorNum.textContent=valor;

    if(valor>=10){
        contadorNum.style.color="red";
    }else{
        contadorNum.style.color="black";
    }
}