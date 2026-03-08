//module é um arquivo externo que contém código que pode ser reutilizado em outros arquivos javascript

export const PI=3.14159;  //export permite que a função/variavel seja exportada para o outro cógigo

export function calcularCircunferencia(raio){
    return 2*PI*raio;
}

export function calcularArea(raio){
    return PI*raio*raio;
}

export function calcularVolume(raio){
    return (4/3)*PI*(Math.pow(raio,3));
}