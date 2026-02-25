document.getElementById("enviar").onclick=function(){
    if(document.getElementById("check").checked){  //checked ve se a checklist foi marcada
        document.getElementById("confirmado").textContent="Confirmado!";
    }else{
       document.getElementById("confirmado").textContent="Você precisa confirmar primeiro!";
    }

    if(document.getElementById("visaBtn").checked){
        document.getElementById("escolhido").textContent="Você selecionou metodo de pagamento Visa";

    }else if(document.getElementById("mastercardBtn").checked){
        document.getElementById("escolhido").textContent="Você selecionou metodo de pagamento MasterCard";

    }else if(document.getElementById("paypalBtn").checked){
        document.getElementById("escolhido").textContent="Você selecionou metodo de pagamento Paypal";
        
    }else{
        document.getElementById("escolhido").textContent="Você precisa selecionar um metodo de pagamento";
    }
}