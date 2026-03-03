function gerarSenha(tamanho, minu, maiu, num, simb){

    const minusc="abcdefghijklmnopqrstuvwxyz";
    const mausc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros="0123456789";
    const simbolos="!@#$%¨&*()-_?/+=";

    let permitidos="";
    let senha="";

    permitidos+=minu?minusc:"";  //permitidos se incMinusculo for verdade contatene minusc se não contatena nada
    permitidos+=maiu?mausc:"";
    permitidos+=num?numeros:"";
    permitidos+=simb?simbolos:"";

    //console.log(permitidos);

    if(tamanho<=0){
        return `A senha deve ter pelo menos um caracter`;
    }
    if(permitidos.length===0){
        return `Pelo menos um dos grupos de caracteres precisa ser selecionado`;
    }

    for(let i=0;i<tamanho;i++){
        senha+=permitidos[Math.floor(Math.random()*permitidos.length)];
    }

    return senha;
}

const tamanho=12;
const incMinusculo=true;
const incMaiuscuolo=true
const incNumeros=true
const incSimbolos=true

let senha=gerarSenha(tamanho, incMinusculo, incMaiuscuolo, incNumeros, incSimbolos);

console.log(senha);