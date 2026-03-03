function rodarDado(){
    const valores=[];
    const imagens=[];

    for(let i=0; i<document.getElementById("numDados").value;i++){
        const valor=Math.floor(Math.random()*6)+1;
        valores.push(valor);
        imagens.push(`<img src="img/${valor}.png" alt="Dado Nº${valor}">`);  
    }

    document.getElementById("resultado").textContent=`valores: ${valores.join(', ')}`
    document.getElementById("imagens").innerHTML=imagens.join('');
}