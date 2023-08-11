const alunos =['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//const sala1= alunos.slice(0, 10); //slice divide array segundo parametro não é incluso array
//const sala2 = alunos.slice(10);

const sala1= alunos.slice(0, alunos.length / 2); //length quando é um numero indefinido maior de alunos 
const sala2 = alunos.slice(alunos.length/2);



console.log(sala1);
console.log(sala2);