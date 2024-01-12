const nome = 'Fernando Felinto';
let idade = 32;
let anoNascimento = 2024 - idade;
let peso = 83;
const altura = 1.7;
let imc = peso / (altura ** 2);

console.log(`${nome} tem ${idade} anos de idade, nasceu no ano de ${anoNascimento}, pesa ${peso} kg, tem ${altura.toFixed(2)} de altura e seu IMC é de: ${imc.toFixed(2)}`); // código com formatação ${}

