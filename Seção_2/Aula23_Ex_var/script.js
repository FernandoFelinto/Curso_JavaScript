let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A
//let varD = varA // pode-se criar uma nova variável

/*varA = varB
varB = varC
varC = varD*/

// Outra forma de fazer
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)