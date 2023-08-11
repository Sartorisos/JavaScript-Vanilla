//Depois calcular média dos alunos, mostre quem esta reprovado entre eles; filter =filtrar

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice)=>{
return medias[indice]<7;
});

console.log(reprovados);