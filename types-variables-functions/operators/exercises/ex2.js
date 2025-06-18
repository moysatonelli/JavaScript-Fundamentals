/*Crie uma variável numérica com um valor.
Utilize um operador ternário para verificar se esse valor é par ou ímpar.
Exiba o resultado no console.*/

// sem operador ternário
const num = 10;

if (num % 2 === 0) {
    console.log(`${num} é par`);
} else {
    console.log(`${num} é impar`);
};

// com operador ternário
const numero = 7;

const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
console.log(`${numero} é ${resultado}`); // Ímpar