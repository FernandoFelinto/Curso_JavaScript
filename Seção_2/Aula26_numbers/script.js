let num1 = 10.55465757
let num2 = 2
let num3 = '5.6'
let soma = num1 + num2
// definindo duas casas decimais
console.log(soma.toFixed(2))
//retorna um boolean se é um número inteiro
console.log(Number.isInteger(num2))
console.log(Number.isInteger(num3))
//retorna um Not-a-Number (NaN)
console.log(num2*'Olá')
console.log(Number.isNaN(num2*'Olá')) //retorna um boolean

let numero1 = 0.7
let numero2 = 0.1

numero1 += numero2 //0.8
numero1 += numero2 //0.9
numero1 += numero2 //1.0
numero1 += numero2 //1.1
numero1 += numero2 //1.2
numero1 += numero2 //1.3
numero1 += numero2 //1.4
numero1 += numero2 //1.5
numero1 += numero2 //1.6
numero1 += numero2 //1.7
numero1 += numero2 //1.8
numero1 += numero2 //1.9
numero1 += numero2 //2.0

numero1 = Number(numero1.toFixed(2))

console.log(numero1)
console.log(numero1.toFixed(1))
console.log(Number.isInteger(numero1))


