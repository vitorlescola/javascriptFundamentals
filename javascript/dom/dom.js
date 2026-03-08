//document.body.style.backgroundColor="black";
document.title="DOM";

document.getElementById("titulo").style.backgroundColor="yellow";
document.getElementById("titulo").style.textAlign="center";

let lista=document.getElementsByClassName("itens");  //retorna uma html collection,  //querySelectorAll é semelhar porem se comparta como um vetor, incluindo forEach()

lista[1].style.backgroundColor="orange";

let h4Elementos=document.getElementsByTagName("h4");

for(let h4 of h4Elementos){
    h4.style.backgroundColor="red";
}

let qse=document.querySelector(".itens");  //retorna o primeito elemento ()ou null

qse.style.backgroundColor="lightgreen";

let ulPri=document.getElementById("ulPri");
ulPri.firstElementChild.style.backgroundColor="lime";
ulPri.lastElementChild.style.backgroundColor="tomato";

//ulPri.nextElementSibling; ulPri.previousElementSibling; ulPri.parentElement; ulPri.children, pega respectivamente, o proximo elemento, o anterior, o elemento pai, o elemento filho.

//criar elemento

const newH1=document.createElement("h1");  //cria o elemento
newH1.textContent="Titulo"  //adiciona atributos
newH1.style.color="red";
newH1.style.textAlign="center";
//document.body.append(newH1);  //adiciona ao dom, append automaticamente coloca como o ultimo filho, prepend adiciona como o primeiro
//document.getElementById("caixa1").append(newH1);  //adiciona a caixa1
document.getElementById("caixa1").append(newH1);
//let caixa2=document.getElementById("caixa2");
//document.body.insertBefore(newH1,caixa2);  //adiciona entre caixa 1 e 2, (novoElemento,elementoAntigo)
//let caixas=document.querySelectorAll(".caixa");
//document.body.insertBefore(newH1,caixas[2]);

//remover HTML
//document.getElementById("caixa1").removeChild(newH1);

//event listener espera eventos especificos para realizar um código, exe: clicks,mouseover, mouseout, .addEventListener(evento,callback)

let clicado=false;

document.getElementById("caixaClick").addEventListener("click",(event)=>{
    if(!clicado){
        console.log(event);
        event.target.style.backgroundColor="red";  //target é oque foi clicado
        event.target.textContent="clicado! 😄";
        clicado=true;
    }else{
        event.target.style.backgroundColor="lime";
        event.target.textContent="Clique aqui! 😀";
        clicado=false;
    }
});

document.getElementById("caixaClick").addEventListener("mouseover",(event)=>{
    if(!clicado){
        console.log(event);
        event.target.style.backgroundColor="yellow";
        event.target.textContent="quase! 😆";
    }
});

document.getElementById("caixaClick").addEventListener("mouseout",(event)=>{
    if(!clicado){
        console.log(event);
        event.target.style.backgroundColor="lime";
        event.target.textContent="Clique aqui! 😀";
    }
});

let clicadoBtn=false;

document.getElementById("btn").addEventListener("click",(event)=>{
    if(!clicadoBtn){
        console.log(event);
        document.getElementById("caixaClickBtn").style.backgroundColor="red";  //target é oque foi clicado
        document.getElementById("caixaClickBtn").textContent="clicado! 😄";
        clicadoBtn=true;
    }else{
        document.getElementById("caixaClickBtn").style.backgroundColor="lime";
        document.getElementById("caixaClickBtn").textContent="Clique aqui! 😀";
        clicadoBtn=false;
    }
});

document.getElementById("btn").addEventListener("mouseover",(event)=>{
    if(!clicadoBtn){
        console.log(event);
        document.getElementById("caixaClickBtn").style.backgroundColor="yellow";
        document.getElementById("caixaClickBtn").textContent="quase! 😆";
    }
});

document.getElementById("btn").addEventListener("mouseout",(event)=>{
    if(!clicadoBtn){
        console.log(event);
        document.getElementById("caixaClickBtn").style.backgroundColor="lime";
        document.getElementById("caixaClickBtn").textContent="Clique aqui! 😀";
    }
});

//keydown(pressiona uma tecla) keyup(solta a tecla pressionada)

let movmento=40;  //quanto vai mexer
let x=0;  //cordenadas
let y=0;

document.addEventListener("keydown",(event)=>{
    console.log(event.key);  //mostra a tecla pressionada
    if(event.key.startsWith("Arrow")){
        //event.preventDefault();  //não arrasta a tela junto quando sai da tela

        document.getElementById("mexer").style.backgroundColor="blue"

        switch(event.key){
            case "ArrowUp":
                y-=movmento;
                document.getElementById("mexer").textContent="🐍↑"
                break;

            case "ArrowDown":
                y+=movmento;
                document.getElementById("mexer").textContent="🐍↓"
                break;

            case "ArrowLeft":
                x-=movmento;
                document.getElementById("mexer").textContent="🐍←"
                break;

            case "ArrowRight":
                x+=movmento;
                document.getElementById("mexer").textContent="🐍→"
                break;            
        }

        document.getElementById("mexer").style.top=`${y}px`;
        document.getElementById("mexer").style.left=`${x}px`;
    }
});

document.addEventListener("keyup",(event)=>{
    document.getElementById("mexer").textContent="🐍"
    document.getElementById("mexer").style.backgroundColor="lightblue"
});

//esconder/mostart html

document.getElementById("esconder").addEventListener("click",(event)=>{
    if(document.getElementById("img").style.display==="none"){
        document.getElementById("img").style.display="block";
        document.getElementById("esconder").textContent="Esconder";
    }else{
        document.getElementById("img").style.display="none";  //visibility e hidden também funcionam
        document.getElementById("esconder").textContent="Mostrar";
    }
});

//classlist, interage com a lista de classes de css de um elemento, add(),remove();toggle(remove se presente,adiciona se não),replace(antiga,nova),contains(retorna true se contem e false se não)

document.getElementById("btnF").classList.add("enable");
document.getElementById("btnF").classList.remove("enable");

document.getElementById("btnF").addEventListener("mouseover",(event)=>{
    event.target.classList.toggle("hover");
});

document.getElementById("btnF").addEventListener("mouseout",(event)=>{
    event.target.classList.toggle("hover");
});

document.getElementById("btnF").classList.add("enable");

document.getElementById("btnF").addEventListener("click",(event)=>{
    event.target.classList.replace("enable","disable");
});