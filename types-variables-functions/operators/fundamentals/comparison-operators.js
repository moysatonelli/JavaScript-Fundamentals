const estaAprovado = true;

if (estaAprovado === true) {
    console.log('aprovado');
}

// compara valor
if ('0' == 0) {
    console.log('passou na comparação');
} else {
    console.log('não passou na comparação')
}

// compara o tipo, mais recomendável
if ('0' === 0) {
    console.log('passou na comparação');
} else {
    console.log('não passou na comparação')
}