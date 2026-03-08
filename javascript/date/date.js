const date=new Date();  //(ano,mes,dia,hora,minuto,segundos,ms), (mes 0=janeiro...11=dezembro)

console.log(date);

const dateC=new Date(2026,5,6,22,3,9,5);

console.log(dateC);

const dateI=new Date(0);  //ms em epoch

console.log(dateI);

const ano=date.getFullYear();

console.log(ano);