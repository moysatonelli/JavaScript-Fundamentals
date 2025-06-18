/*Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número.
Exiba os tipos de dados resultantes no console.*/

// antes
console.log('Antes da conversação');

const number = 0;
const string = '1';

console.log(number, "tipo = ", typeof(number));
console.log(string, "tipo = ", typeof(string));

// depois
console.log('Após a conversão');

const numberConvertido = String(number);
const stringConvertido = Number(string);

console.log(number, "tipo = ", typeof(numberConvertido));
console.log(string, "tipo = ", typeof(stringConvertido));
