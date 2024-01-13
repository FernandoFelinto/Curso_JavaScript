let numero = prompt('Digite um número')
numero = Number(numero)
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')
numeroTitulo.innerHTML = numero
texto.innerHTML = '';
texto.innerHTML += `A raiz quadrada de ${numero} é: <strong>${Math.sqrt(numero)}</strong><br>`
texto.innerHTML += `${numero} é um número inteiro? <strong>${Number.isInteger(numero)}</strong><br>`
texto.innerHTML += `${numero} é  NaN? <strong>${Number.isNaN(numero)}</strong><br>`
texto.innerHTML += `Arredondando para baixo: <strong>${Math.floor(numero)}</strong><br>`
texto.innerHTML += `Arredondando para cima: <strong>${Math.ceil(numero)}</strong><br>`
texto.innerHTML += `${numero} com duas casas decimais: <strong>${numero.toFixed(2)}</strong><br>`

/*
document.body.innerHTML += `A raiz quadrada de ${numero} é: <strong>${Math.sqrt(numero)}</strong><br>`
document.body.innerHTML += `${numero} é um número inteiro? <strong>${Number.isInteger(numero)}</strong><br>`
document.body.innerHTML += `${numero} é  NaN? <strong>${Number.isNaN(numero)}</strong><br>`
document.body.innerHTML += `Arredondando para baixo: <strong>${Math.floor(numero)}</strong><br>`
document.body.innerHTML += `Arredondando para cima: <strong>${Math.ceil(numero)}</strong><br>`
document.body.innerHTML += `${numero} com duas casas decimais: <strong>${numero.toFixed(2)}</strong><br>`
*/

