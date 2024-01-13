// um array se cria com [ ]
const array = [1,2,3];
array.push(4);
array[0] = 7;

// um objeto se cria com { }
const pessoa1 = {
nome: 'Luiz',
sobrenome: 'Felinto',
idade: 31
};
console.log(pessoa1)
console.log(pessoa1.sobrenome)
//função que cria uma pessoa e retorna um objeto
function pessoa(nome, sobrenome, idade){
    return {nome: nome, sobrenome: sobrenome, idade: idade};
}
const pessoa2 = pessoa('Alex', 'Silva', 23);
console.log(pessoa2);
console.log(pessoa2.idade);
const pessoa3 = pessoa('Fábio', 'Bezerra', 54);
console.log(pessoa3);
console.log(pessoa3.nome);

// pode-se ter funçẽs dentro do objeto
const pessoa4 = {
    nome: 'Luiz',
    sobrenome: 'Felinto',
    idade: 31,
    // não precisa colocar a palavra 'function' antes
    // 'this' faz referência ao objeto criado 
    fala (){
        console.log(`${this.nome} ${this.sobrenome} está falando 'Olá!'`);
        console.log(`A minha idade é: ${this.idade}`);

    },
    somaIdade(){
        this.idade++;
    }
    };
pessoa4.fala();
pessoa4.somaIdade();
pessoa4.fala();
