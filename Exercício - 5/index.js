// Esta função é chamada quando o formulário é enviado
function ReceberDados(evento) {
    // Impede o comportamento padrão de enviar o formulário, que seria recarregar a página
    evento.preventDefault();

    // Exibe 'ok' no console, apenas para indicar que a função está sendo executada
    console.log('ok')

    // Obtém os valores do campo de peso e altura do formulário
    const peso = parseFloat(document.querySelector('.peso').value);
    const altura = parseFloat(document.querySelector('.altura').value);

    // Calcula o IMC (Índice de Massa Corporal)
    const CalculoIMC = peso / (altura * altura);

    // Obtém a referência ao elemento HTML onde o resultado será exibido
    const resultado = document.querySelector('.resultado');

    // Exibe mensagens no console indicando que o formulário foi enviado e o IMC calculado
    console.log('Formulário enviado!');
    console.log(`O seu IMC é: ${CalculoIMC.toFixed(2)}`);

    // Atualiza o conteúdo do elemento HTML com o resultado do cálculo do IMC
    resultado.innerHTML += `O seu IMC é: ${CalculoIMC.toFixed(2)}`;
};

// Obtém a referência ao formulário com a classe 'dados'
const form = document.querySelector('.dados');

// Adiciona um ouvinte de evento para o evento de envio do formulário, chamando a função ReceberDados
form.addEventListener('submit', ReceberDados);
