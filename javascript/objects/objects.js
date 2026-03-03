const pessoa1={
    nome: "Fulano",  //propriedades
    idade: 99,
    existe: true,
    texto:function(){console.log("texto")},  //metodos
    texto2:function(){console.log(`Nome: ${this.nome}`)}  //para acessar uma proriedade dentro do objeto usa this, nã funciona com arrow.
}

console.log(pessoa1.nome);
pessoa1.texto();
pessoa1.texto2();

console.log(this);  //retorna a janela do site

//constructor

function pessoa(nome,idade,existe){  //pode ser reutilizado para criar varios
    this.nome=nome,
    this.idade=idade,
    this.existe=existe
    this.andar=function(){console.log(`${nome} esta andando`)}
}

let pessoa2=new pessoa("Fulano da silva",20,true);  //criando uma nova instancia do objeto

console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(pessoa2.existe);
pessoa2.andar();

let pessoa3=new pessoa("Fulano dos santos",25,false);

console.log(pessoa3.nome);
console.log(pessoa3.idade);
console.log(pessoa3.existe);
pessoa3.andar();

//clase, um jeito mais simples de criar um constructor, não é um objeto mais sim um template para objetos em js

class produto{
    constructor(nome, preco){
        this.nome=nome;
        this.preco=preco;
    }

    mostrarProduto(){  //dentro de uma classe não precisa escrever function
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: ${this.preco.toFixed(2)}`);
    }  

    calcularTotal(taxaDeLucro){
        return this.preco+(this.preco*taxaDeLucro);
    }
}

console.log("                                   ");

let produto1=new produto("barra de chocolate",200.5);
produto1.mostrarProduto();

let produto2=new produto("camisa",0.0232323232323232323);
produto2.mostrarProduto();

let produto3=new produto("carro",100000);
produto3.mostrarProduto();

let total1=produto1.calcularTotal(0.5);
console.log(total1.toFixed(2));

let total2=produto2.calcularTotal(0.9);
console.log(total2.toFixed(2));

let total3=produto3.calcularTotal(3);
console.log(total3.toFixed(2));

//static define propriedade ou metodo que pertence a classe e não ao objeto

class mathUlt{
    static PI=3.14159;

    static getDiametro(raio){
        return raio*2;
    }

    static getCircunferencia(raio){
        return 2*this.PI*raio;
    }

    static getArea(raio){
        return this.PI*raio*raio;
    }
}

console.log(mathUlt.PI);
console.log(mathUlt.getDiametro(5));
console.log(mathUlt.getCircunferencia(5));
console.log(mathUlt.getArea(5));

class Usuario{
    static id=0;

    constructor(nome){
        this.nome=nome;
        Usuario.id++;
    }

    username(){
        console.log(`O username é ${this.nome}`);
    }

    static getId(){
        console.log(`Existem ${this.id} usuarios no sistema`);
    }
}

let usuario1=new Usuario("nome");
console.log(usuario1.nome);
console.log(usuario1.id);  //não funciona porque pertence a classe e não ao objeto
console.log(Usuario.id);

let usuario2=new Usuario("a");
let usuario3=new Usuario("b");
console.log(Usuario.id);

usuario1.username();
usuario2.username();
usuario3.username();

Usuario.getId();

//herança, uma classe filho tem as caracteristicas da classe pai

class Animal{
    vivo=true;

    comer(){
        console.log(`O ${this.nome} esta comendo`);
    }

    dormindo(){
        console.log(`O ${this.nome} esta dormindo`);
    }
}

class Cachorro extends Animal{  //extends declara herença
    nome="Cachorro";

    correr(){
        console.log(`O ${this.nome} esta correndo`);
    }
}

class Gato extends Animal{
    nome="Gato";

    pular(){
        console.log(`O ${this.nome} esta pulando`);
    }
}

let cachorro1=new Cachorro();
let gato1=new Gato();

cachorro1.comer();
gato1.dormindo();

cachorro1.correr();
gato1.pular();

//super(), usado para chamar o constructor do pai na classe filho

class NovoAnimal{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }

    andar(){
        console.log(`O ${this.nome} esta andando`);
    }
}

class NovoCachorro extends NovoAnimal{
    constructor(nome,idade,raca){
        super(nome,idade);  //chama as do constructor do animal
        this.raca=raca;
    }

    andar(){
        super.andar();  //chama o metodo da classe pai
        console.log("texto");
    }
}

let dog=new NovoCachorro("caramelo",12,"caramelo");
console.log(dog.nome);
console.log(dog.idade);
console.log(dog.raca);
dog.andar();

//getters metodo para fazer uma propriedade legivel
//setters para que ela possa ser escrivida
//validar e modificar o valor de uma propriedade

class Retangulo{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth;  //_ indica que é privado
        }else{
            console.error("Largura precisa ser maior que 0");
        }
    }

    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;  //_ indica que é privado
        }else{
            console.error("Altura precisa ser maior que 0");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._height*this._width;
    }
}

/*let retangulo1=new Retangulo(-10909090, "string");  sem setters/getters seria possivel isso
console.log(retangulo1.height);
console.log(retangulo1.width);*/

let retangulo1=new Retangulo(10, 15);
console.log(retangulo1.height);  //não é legivel sen utilizar o get
console.log(retangulo1.width);
console.log(retangulo1.area);