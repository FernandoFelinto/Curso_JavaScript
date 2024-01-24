function getDia(diaSemana){
    switch(diaSemana){
        case 0: 
            return "Domingo";
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
        default:
            return "Dia Inválido!";
    }
}


const data = new Date('1992-03-16 00:00:00');
const diaSemana = data.getDay();
console.log(diaSemana);
console.log(getDia(diaSemana));