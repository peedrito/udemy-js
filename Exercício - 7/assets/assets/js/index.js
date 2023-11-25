// Exercício 07 --------
// ---------------------
// Criar uma página simples em HTML com a data atual.
// Aula: 48 --- Switft & Date 
const hoje = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
const DateFormatado = hoje.toLocaleDateString('pt-BR', options);
const container = document.querySelector('.container')

container.innerHTML += `<h1>${DateFormatado}</h1>`;