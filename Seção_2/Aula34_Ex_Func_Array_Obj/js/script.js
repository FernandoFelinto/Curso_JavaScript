//alert('Preencha o formulário!')
function escopo (){
    //o '.' seleciona a class, a '#' seleciona o id
    const form = document.querySelector('.form'); //acessa o formulário
    const resultado = document.querySelector('.resultado')//acessa a div resultado
 
    const pessoas =[]; //criando lista vazia

    function recebeEvento(evento){
        evento.preventDefault();//faz com que o formulário não seja enviado
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push( { //criando o objeto pessoa
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`
    };
    form.addEventListener('submit', recebeEvento);
}
escopo();