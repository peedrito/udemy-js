// Início do exercício (Aula - 60)
// Informações: Criar uma função que recebe dois numbers e retorna o number maior.

function numberMax (num1, num2) {
    if (num1 == num2) { // Condição para saber se é o mesmo number.
        console.log("Não há números maiores, pois são números iguais.");
    } else if (num1 < num2) { // Condição para saber qual é o number maior.
        console.log(`O número maior é ${num2}.`);    
    } else {
        console.log(`O número maior é ${num1}`);
}
}

numberMax(150, 150) // Chamando função e atribuindo dois valores em cada variavel.

// Correção do professor Luiz Otavio -------
// const max = (x, y) => x > y ? x : y;
// console.log(max(10, 20))