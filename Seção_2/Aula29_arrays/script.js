//             [0]     [1]     [2]
let alunos = ['Luiz','Maria','João']
//modifica o valor que está no índice 0
alunos[0] = 'Fernando'
//acrescenta o valor na última posição do array 
alunos[alunos.length] = 'André'
alunos[alunos.length] = 'Luiza'
//a função push acrescenta no fim da lista
alunos.push('Carlos')
// acrescentar um elemento no início do array
alunos.unshift('Pedro')
//remove o ultimo elemento do array
alunos.pop()
let removido = alunos.pop()
console.log(removido);
//exclui um valor do índice e o índice fica vazio (undefined)
delete alunos[2]
console.log(alunos[2]);
//fatiar o array
console.log(alunos.slice(0, 3));

console.log(alunos);
console.log(alunos.length)
//tipo do array (object)
console.log(typeof alunos);
//se alunos é uma instância de array - retorna um boolean
console.log(alunos instanceof Array);
