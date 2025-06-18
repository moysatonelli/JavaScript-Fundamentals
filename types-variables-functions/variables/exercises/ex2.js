/* Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome.
Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings.
Por fim, imprima os resultados obtidos no console. */

const firtstName = 'Moysés';
const lastName = 'D. Souza Tonelli Clarindo';

// Usando o operador +
const fullNameContactee = firtstName + ' ' + lastName;
console.log('Usando operador +: ',fullNameContactee);

// Usando template strings
const templateNameString = `${firtstName} ${lastName}`;
console.log(`Usando template string: ${templateNameString}`);
