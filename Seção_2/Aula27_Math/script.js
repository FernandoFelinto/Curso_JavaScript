let num1 = 9.4465783
//arredonda o número para baixo direto
let num2 = Math.floor(num1)
console.log(num2);
//arredonda pra cima direto
num2 = Math.ceil(num1)
console.log(num2);
//arredonda de acordo com as casas decimais, se passar de 5 arredonda pra cima, caso contrário arredonda pra baixo
num2 = Math.round(num1)
console.log(num2);
//'max' retorna o maior número e 'min' retorna o maior número
console.log(Math.max(1,3,8,23,-9,57,23,87,4,44,32,89,13));
console.log(Math.min(1,3,8,23,-9,57,23,87,4,44,32,89,13));
//gera números aleatórios entre 0 e 1
console.log(Math.random());
// números aleatórios entre 1 e 10
let aleatorio = Math.random() * (10 - 1) + 1
aleatorio = Math.round(Math.random() * (10 - 1) + 1)
console.log(aleatorio);
// valor de PI
console.log(Math.PI);
// potência
console.log(aleatorio);
console.log(Math.pow(2,10));//igual a (2**10)

let num3 = 9;
console.log(Math.sqrt(num3)); // pode fazer também (num3 ** 0.5)
//quando divide por 0 ele não dá erro, mostra que o número é Infinity
console.log(num3/0);

