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

document.body.innerHTML += `Seu nome completo é ${nome}.<br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `Qual o último índice da sua letra? ${nome.length - 1}<br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `As últimas 3 letras do seu nome: ${nome.slice(nome.length - 3)}<br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ').join(', ')}<br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `Seu nome em maiúsculo: ${nome.toUpperCase()}<br />`
document.body.innerHTML += `----------<br />`
document.body.innerHTML += `Seu nome em minúsculo: ${nome.toLowerCase()}<br />`