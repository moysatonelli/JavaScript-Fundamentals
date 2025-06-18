/*Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18).
Imprima o resultado no console.*/

function maiorIdade (idade) {
    if (idade < 18) {
        return "é menor de idade";
    } else {
        return "é maior de idade";
    }
};

console.log(maiorIdade(18));