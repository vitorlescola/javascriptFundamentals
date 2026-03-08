function uptade(){
    const agora=new Date();
    const horas=agora.getHours().toString().padStart(2,0);
    const minutos=agora.getMinutes().toString().padStart(2,0);
    const segundos=agora.getSeconds().toString().padStart(2,0);
    const tempoString=`${horas}:${minutos}:${segundos}`;
    document.getElementById("relogio").textContent=tempoString;
}

uptade();
setInterval(uptade,1000);  //funciona como setTimeout porem chama uma função repetidamente