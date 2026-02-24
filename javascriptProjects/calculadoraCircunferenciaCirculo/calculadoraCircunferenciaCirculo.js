const PI=3.14159;
let radio;
let circunferencia;

document.getElementById("calcular").onclick=function(){
   radio=document.getElementById("radio").value;
   radio=Number(radio);

   circunferencia=2*PI*radio;
    
   document.getElementById("resultado").textContent=`circunferência: ${circunferencia}`;
}
