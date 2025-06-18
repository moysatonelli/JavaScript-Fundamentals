/*Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente.
A função deve calcular a potência da base elevada ao expoente e retornar o resultado.*/

// usando a função math.pow
const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}`); // Saída: O resultado de 2

// sem função math.pow
const potencia = (b, e) => {
    calculo = b * b * b;
    return calculo;
};

console.log(potencia(2,3));