const numero = 10;
const nome = 'Moysés';

Number.isNaN(numero); // false
Number.isNaN(nome); // false
Number.isNaN(NaN); // true

console.log('Com Number.isNaN: ', Number.isNaN(numero),Number.isNaN(nome),Number.isNaN(NaN));

isNaN(numero); // false
isNaN(nome); // true
isNaN(NaN); // true

console.log('Somente isNaN: ', isNaN(numero),isNaN(nome),isNaN(NaN));