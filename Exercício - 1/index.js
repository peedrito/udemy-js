// Exercicio--------
// Imprimir no console preenchendo os dados atraves 
// de variaveis.
// -----------------
// "Nome" tem "idade" anos, 
// pesa "00" kg, tem "000" m, e seu IMC é de ""
// -----------------

// Dados pessoais
let nome = "Pedro Luís Costa Lopes"
let idade = 18
let peso = 132
let altura = 1.8

// Calculo IMC
let IMC = peso / (altura * altura)


// Imprime no console
console.log(`${nome} tem atualmente ${idade} anos,\nsua altura é de ${altura} em metros,\nseu peso atual é de ${altura},\nseu IMC é de ${IMC.toFixed()}`)

