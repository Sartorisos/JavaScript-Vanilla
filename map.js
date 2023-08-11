const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1; //: significa se não - map não substitui for it, reescrever array alterar valores
});

console.log(notasAtualizadas);