const h1 = document.querySelector('.container h1');
const data = new Date();


// h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full' });


function getDia(diaSemana){
    switch(diaSemana){
        case 0: 
            return "domingo";
        case 1:
            return "segunda-feira";
        case 2:
            return "terça-feira";
        case 3:
            return "quarta-feira";
        case 4:
            return "quinta-feira";
        case 5:
            return "sexta-feira";
        case 6:
            return "sábado";
        default:
            return "Dia Inválido!";
    }
}

function getMes(mes){
    switch(mes){
        case 0: 
            return "janeiro";
        case 1:
            return "fevereiro";
        case 2:
            return "março";
        case 3:
            return "abril";
        case 4:
            return "maio";
        case 5:
            return "junho";
        case 6:
            return "julho";
        case 7:
            return "agosto";
        case 8:
            return "setembro";
        case 9:
            return "outubro";
        case 10:
            return "novembro"
        case 11:
            return "dezembro";
        default:
            return "Mês Inválido!";
    }
}

function zeroAesquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(){
    const dia = data.getDay();
    const mes = data.getMonth();

    const nomeDia = getDia(dia);
    const nomeMes = getMes(mes); 

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ` + `\n` +
    `${zeroAesquerda(data.getHours())} : ${zeroAesquerda(data.getMinutes())}`);
}

h1.innerHTML = criaData();
