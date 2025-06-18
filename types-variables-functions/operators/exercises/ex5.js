/*Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show.
Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionai
(if, else) para determinar se o usuário pode realizar a compra.*/

const idade = 17;
const idadeMinima = 18;

if (idade < 18) {
    console.log('Não tem idade mínima, venda cancelada!');
}else {
    console.log('Tem idade mínima, venda liberada!')
};
