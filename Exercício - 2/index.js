// Exercício 02 -------
// Faça um script que armazene um valor através do prompt do navegador.
//---------------------
// O exercicio não aborda nenhum tema específico, por esse motivo, 
// vou optar por fazer um script baseado no exercicio 01, porém agora no navegador. 
//---------------------

// Poderíamos aqui usar um objeto, mas vou seguir a didatica do curso.
const nome = prompt('Digite seu nome, por favor!');
const idade = prompt('Digite sua idade, por favor.');
let altura = prompt('Digite sua altura em: *metros*!');
let peso = prompt('Digite seu peso em: kg.')

// Aqui vamos fazer o cáculo IMC da pessoa.
// Mas antes precisamos transformar peso e altura em "number", pois está em "string".
altura = Number(altura);
peso = Number(peso);

// Calculo:
const IMC = (peso / (altura * altura));

// Exibe em forma de pop-up o resultado.
alert(`${nome} tem atualmente ${idade} anos, sua altura é de ${altura} em metros, seu peso atual é de ${peso}, seu IMC é de ${IMC.toFixed()}`)
