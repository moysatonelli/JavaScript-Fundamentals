/*Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador
para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o 
operador AND para verificar se ambas são verdadeiras.*/

const logado = true;
const permissao = false;

const resultado = logado && permissao;

console.log('Usuário logado:', resultado);