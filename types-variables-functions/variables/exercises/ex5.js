/*Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco.
Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados.
Faça o mesmo processo utilizando let e compare com os resultados anteriores.*/

// using VAR


var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    
    console.log(fora);
    console.log(dentro);
}
console.log(fora);
console.log(dentro);


// using LET


let fora = 'Fora do bloco';

if (true) {
    let dentro = 'Dentro do bloco';

    console.log(fora);
    console.log(dentro);
}

console.log(fora);
console.log(dentro);
