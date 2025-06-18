/*Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles.
Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior.
Imprima o maior valor no console.*/

function maiorNumero(n1,n2,n3) {
    let maior = n1;

    if (n2 > maior) {
        maior = n2;
    }

    if (n3 > maior) {
        maior = n3;
    }

    return maior;
};

console.log(maiorNumero(10,20,5)) // 20
