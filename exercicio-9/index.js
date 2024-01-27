// Exercício 8 - (Aula-61)
// Informações: Crie uma função "foto" que receba dois argumentos (altura, largura), 
// se a imagem for paisagem a função retorna true.


function eFoto (width, height) {
    const SimOuNao = width / height;
    if (SimOuNao > 1) {
        return true;
    } else {
        return false;
    }
}

console.log(eFoto(100,500));

// Correção do professor:
// const eFoto = (width, height) => return width / height  >  1;