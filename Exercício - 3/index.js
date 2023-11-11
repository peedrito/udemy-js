// Exercício 03 --------
//----------------------
// Responda o questinoário abaixo usando os conhecimentos apresentados
// na aula 24.
/*----------------------
A segunda letra do seu nome é: 
Qual o primeiro índice da letra no seu nome? 
Qual o último índice da letra no seu nome? 
As últimas 3 letras do seu nome são: 
As palavras do seu nome são:
Seu nome com letras maiúsculas: 
Seu nome com letras minúsculas: 
------------------------*/

// Cria um pop-up para armazenar o valor.
const nome = prompt('Qual seu nome completo?');
// Cria um espaço html com o valor atribuido.
document.body.innerHTML += `Site simples sobre String <3<br /><br />`

document.body.innerHTML += `Seu nome completo é <strong>${nome}<strong>.<br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}<strong> <br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `Qual o último índice da sua letra? <strong>${nome.length - 1}<strong><br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `As últimas 3 letras do seu nome: <strong>${nome.slice(nome.length - 3)}<strong><br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ').join(', ')}<strong><br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `Seu nome em maiúsculo: <strong>${nome.toUpperCase()}<strong><br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `Seu nome em minúsculo: <strong>${nome.toLowerCase()}<strong><br />`