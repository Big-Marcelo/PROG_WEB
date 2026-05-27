const produtos = [
    { id: 1, nome: 'Notebook' },
    { id: 2, nome: 'Mouse' },
    { id: 3, nome: 'Teclado' }
];

function listarProdutos(req, res) {
    res.json({
        mensagem: 'Sucesso',
        dados: produtos
    });
}

function buscarProduto(req, res) {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            erro: 'ID inválido'
        });
    }

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    res.json({
        mensagem: 'Sucesso',
        dados: produto
    });
}

function totalProdutos(req, res) {
    res.json({
        total: produtos.length
    });
}

module.exports = {
    listarProdutos,
    buscarProduto,
    totalProdutos
};