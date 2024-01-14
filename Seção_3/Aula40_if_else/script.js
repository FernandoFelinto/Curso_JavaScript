const hora = 50;

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!');
}else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde!');
}else if(hora > 18 && hora < 24){
    console.log('Boa Noite!');
}else{
    console.log('[ERRO] Hora Inválida!');
}
//console.log(hora);