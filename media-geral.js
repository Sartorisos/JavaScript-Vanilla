//Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:
//reduce = reduzir, acumulador valor inicial atualiza valor 

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
 const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
     return acumulador + 1;
    }, 0);
    
    console.log(somaDasNotas);
}

calculaMedia(salaJS);
