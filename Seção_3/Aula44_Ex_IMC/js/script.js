const form = document.querySelector('#formulario'); //id selecina com #

form.addEventListener('submit', function(evento){ //o 'e' significa evento
    evento.preventDefault(); //não deixa o formulario ser enviado
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);//convertendo os inputs para Number
    const altura = Number(inputAltura.value);

    console.log(peso, altura);

    if (!peso){
        setResultado('Peso Inválido!', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const grauImc = getGrauImc(imc);
    
    const mensagem = `Seu IMC é: ${imc}, (${grauImc}).`;
    setResultado(mensagem, true);


});

function getGrauImc(imc){
    const grau = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc > 39.9) return grau[5];
    if(imc > 34.9) return grau[4];
    if(imc > 29.9) return grau[3];
    if(imc > 24.9) return grau[2];
    if(imc >= 18.5) return grau[1];
    if(imc < 18.5) return grau[0];
    
}


function getIMC(peso, altura){
    const imc = (peso) / (altura**2);
    return imc.toFixed(2);
}


function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
   
    const p = criaP();
    
    if (isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    } 

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}
