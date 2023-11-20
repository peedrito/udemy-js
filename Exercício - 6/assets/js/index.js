const form = document.querySelector(' form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento confirmado!');
    resultado('Hello, world!');
})

function resultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>${msg}<p>`;
     
}

// Não fiz esse e não vou fazer, não posso culpar diretamente o Luiz mas a didatica 
// Da aula foi péssima, não absorvi quase nada.