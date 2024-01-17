// if -> ?
// else -> :
// const parImpar = numero % 2 === 0 ? 'Par' : 'Impar'

const pontuacao = 999;


if (pontuacao >= 1000){
    console.log('Usuário VIP!');
}else{
    console.log('Usuário Normal!');
}

const nivel = pontuacao >= 1000 ? 'VIP!!!' : 'Normal!!!'
console.log(nivel);

const parImpar = 11 % 2 === 0 ? 'Par' : 'Impar'
console.log(parImpar);

const corUsuario = null;
const corPadrao = corUsuario || 'Branco' //se o usuário não colocar nenhuma cor, a cor padrão será branca
console.log(corPadrao);