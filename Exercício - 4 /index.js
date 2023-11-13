// Exercício 04 ------
// -------------------
// Faça um site simples respondendo:
// * Raiz quadrada
// * É inteiro
// * É NaN
// * Arrendando para baixo
// * Arredondando para cima
// * Com casa decimais
// -------------------

// Prompt para guardar número insirido
const QualSeuNumero = prompt('Digite um número:');
const SeuNumero = parseFloat(QualSeuNumero) // Conversao para garantir que seja numero

const RaizQuadrada = Math.sqrt(SeuNumero); // Função do objeto Math (Raiz quadrada)
const InteiroOuNao = Number.isInteger(SeuNumero);
const NumeroOuNao = isNaN(SeuNumero);
const ArredondandoParaBaixo = Math.floor(SeuNumero); 
const ArredondandoParaCima = Math.ceil(SeuNumero);
const ComDecimais = SeuNumero.toFixed(2);

document.body.innerHTML += `<h1>Testando Calcúlos</h1>`;
document.body.innerHTML += `<h2>O seu número é: <strong>${SeuNumero}<strong></h2>`;
document.body.innerHTML += `<p>Raiz quadrada: <strong>${RaizQuadrada}<strong></p>\n`;
document.body.innerHTML += `<p>Inteiro (false/true): <strong>${InteiroOuNao}<strong></p>\n`;
document.body.innerHTML += `<p>É NaN? (false/true): <strong>${NumeroOuNao}<strong></p>\n`;
document.body.innerHTML += `<p>Para cima: <strong>${ArredondandoParaCima}<strong></p>\n`;
document.body.innerHTML += `<p>Para baixo: <strong>${ArredondandoParaBaixo}<strong></p>\n`;

