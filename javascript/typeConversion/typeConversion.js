let idade=window.prompt("Escreva a sua idade: ");

idade=Number(idade);  //converte o tipo da variavel do string para number

idade+=1;  //quando a variavel le input do usuario ela sempre é string

console.log(idade, typeof idade);

//quando convertar uma variavel para boolean ela vai ser false se estiver vazia e true se não estiver vazia, podendo ser usado para verificar se o ususario escreval algo ou não