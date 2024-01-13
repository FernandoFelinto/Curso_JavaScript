//função saudação
function saudacao(nome){
    return `Olá, ${nome}! Boa tarde!`;

}
//função soma
function soma(x, y){
    return x+y;
}
//atribuindo uma função à uma variável
let raiz = function (num){
               return Math.sqrt(num);
            }
// novo modo de se fazer uma função (arrow function)
let media = (n1, n2, n3) => {
            return (n1 + n2 + n3) / 3;
            }
//outro estilo de se fazer função com um parâmetro
let numQuadrado = num => num ** 2;

console.log(saudacao('Luiz'));
console.log(`A soma é: ${soma(4, 9)}`);
console.log(`A raiz quadrada é: ${raiz(25)}`);
console.log(`A média é: ${media(8, 7.8,7.5).toFixed(2)}`);
console.log(`O quadrado do número é: ${numQuadrado(5)}`);