/*const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase()); //colocar tudo em letra maiuscula 

console.log(nomesPadronizados);
*/

/*Selecione a alternativa que representa a diferença entre o método map() e forEach():
Certo! Enquanto o método forEach não tem um retorno, 
o método map() pode retornar um array se a função callback retornar algum valor.

Nesta aula introduzimos um novo conceito, o de funções callback.
O termo callback se refere à função que é “chamada de volta” dentro de outra função. 
Após o lançamento do ES6 (também conhecido como EcmaScript 2015) o uso desse tipo de método foi se 
consolidando, então é importante entender como utilizá-lo.
O JavaScript moderno traz vários métodos e funções callback diversos, não apenas para uso com arrays.
Porém a estrutura da função se mantém similar.

Crie um novo arquivo index.js e crie uma array de números:
*/
const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
Vamos utilizar o map() para multiplicar cada um dos valores nesse array por 10 e retornar 
um novo array com os resultados. 
Antes de escrevermos o map() para isso, vamos criar a função callback; ou seja,
a função que vamos chamar (call) de volta quando executarmos o método map(): */

function multiplicaPorDez(num) {
    return num * 10
   }

  // Para entender melhor, vamos reescrever o código, passando a função multiplicaPorDez(num) 
  // direto como parâmetro do map():
   const arraySomada = arrayNums.map(num => num * 10)

console.log(arraySomada)
   //const arraySomada = arrayNums.map(multiplicaPorDez)

//console.log(arraySomada)

