// Criando um símbolo para uma chave de propriedade única
const id = Symbol('id');

// Criando um objeto que usa o símbolo como chave
const usuario = {
  [id]: 12345,
  nome: 'João',
  idade: 30
};

// Acessando a propriedade usando o símbolo
console.log(usuario[id]); // Saída: 12345

// Mostrando que o símbolo é único
const outroId = Symbol('id');
console.log(id === outroId); // Saída: false