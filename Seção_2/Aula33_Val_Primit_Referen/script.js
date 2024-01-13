/*
PRIMITIVOS (IMUTÁVEIS) -> number, string, boolean, undefined, null, (bigint), (symbol)
*/
//          0123
let nome = 'Luiz';
console.log(nome[0]);
nome[0] = 'J'; // ele não muda a letra porque a string é imutável, o 'L' vai permanecer
console.log(nome);
// cria-se uma cópia da variável 'a' e se ela for alterada o valor de 'b' não muda
let a = 'A';
let b = a;
a = 'Oi';
console.log(a,b);

/*
REFERÊNCIA (MUTÁVEIS) -> array, object, function
*/
//apontam para o mesmo endereço, se um for alterado o outro também será
let c = [1,2,3];
let d = c;
c.push(4);
console.log(c,d);

let e = [4,5,6];
let f = [...e]; //uma forma de fazer uma cópia de 'e' e não vai ser alterado, caso 'e' seja
e.push(7);
console.log(e,f);
// No objeto se altera um dado, a cópia também será alterada
const pessoa1 ={
    nome: 'Fernando',
    sobrenome: 'Felinto'
}
const pessoa2 = pessoa1;
pessoa1.nome = 'Ana';
console.log(pessoa1);
console.log(pessoa2);

const pessoa3 ={
    nome: 'Paulo',
    sobrenome: 'Bezerra'
}
const pessoa4 = {...pessoa3}; // copia o objeto e ele não sofrerá alteração 
pessoa3.nome = 'Elton';
console.log(pessoa3);
console.log(pessoa4);