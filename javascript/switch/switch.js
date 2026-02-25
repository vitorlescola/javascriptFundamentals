let dia=1;

switch(dia){
    case 1:
        console.log("É Domingo!")
        break;
    case 2:
        console.log("É segunda ;-;")
        break;  
    case 3:
        console.log("É Terça")
        break;
    case 4:
        console.log("É Quarta")
        break; 
    case 5:
        console.log("É Quinta")
        break;
    case 6:
        console.log("É Sexta!")
        break; 
    case 7:
        console.log("É Sabado!")
        break;
    default:
        console.log("Dia invalido!")
        break;   
}

let nota=100;
let aval;

switch(true){
    case nota>=90:
        aval="A";
        break;
    case nota>=80:
        aval="B";
        break;
    case nota>=70:
        aval="C";
        break;
    case nota>=60:
        aval="D";
        break;
    default:
        aval="F";
        break;
}

console.log(aval, typeof aval);