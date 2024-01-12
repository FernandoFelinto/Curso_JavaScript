         //index 01234567
let umaString = 'Fernando Felinto'

console.log(umaString.charAt(0))
console.log(umaString.charAt(1))
console.log(umaString.charAt(2))
console.log(umaString.charAt(3))
console.log(umaString.charAt(4))
console.log(umaString.charAt(5))
console.log(umaString.charAt(6))
console.log(umaString.charAt(7))
console.log('*****************')

//retorna o index onde começa uma palavra específica
console.log(umaString.indexOf('ando'))
//busca de trás para frente
console.log(umaString.lastIndexOf('n'))
//expressão regular que retorna um array com todas as letras minúsculas
console.log(umaString.match(/[a-z]/g))
// encontra uma determinada palavra ou letra
console.log(umaString.search(/int/))
// Substitui uma coisa pela outra = 'Fernando' -> 'Ivonete'
console.log(umaString.replace('Fernando', 'Ivonete'))
// a tag 'g' substitui em todos as letras

let outra_string = 'O rato roeu a roupa do rei de roma'
console.log(outra_string.replace(/r/g, '#'))
// retorna o tamanho da string
console.log(outra_string.length)
// fatia a string e retorna a palavra que está no intervalo solicitado
console.log(outra_string.slice(7,11))
// retorna de trás para frente
console.log(outra_string.slice(-1))
// retorna a string em maiúsculo e em minúsculo
console.log(outra_string.toUpperCase())
console.log(outra_string.toLowerCase())
// retorna um array com as palavras da string com o espaço como separador
console.log(outra_string.split(' '))













