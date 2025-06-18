let estoqueProdutoA = 0; // Definindo o estoque inicial
let quantidade = 1;

function realizarVenda(quantidade) {
    if (quantidade > estoqueProdutoA) {
        console.log("Quantidade insuficiente em estoque.");
    } else {
        estoqueProdutoA -= quantidade;
        console.log(`Venda realizada com sucesso. Novo estoque: ${estoqueProdutoA}`);
    }
}

realizarVenda(quantidade); // Chamando a função para realizar a venda