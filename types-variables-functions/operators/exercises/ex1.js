/*Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária,
depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao,
considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.*/

const saldo = 1000;
const deposito = 500;
const saque = 50;
const operacao = saldo + deposito - saque;

console.log(`saldo inicial R$ ${saldo}`);
console.log(`valor do depósito R$ ${deposito}`);
console.log(`valor do saque R$ ${saque}`);
console.log(`saldo final da conta R$ ${operacao}`);