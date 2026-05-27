const express = require('express');

const app = express();

// middleware json
app.use(express.json());

// middleware de log
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// array produtos
let produtos = [];

// =========================
// POST - criar produto
// =========================

app.post('/produtos', (req, res) => {

    const { nome, preco } = req.body;

    // validação
    if (!nome || nome.trim() === '') {
        return res.status(400).json({
            sucesso: false,
            erro: 'Nome inválido'
        });
    }

    if (!preco || preco <= 0) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Preço inválido'
        });
    }

    const produto = {
        id: produtos.length + 1,
        nome,
        preco
    };

    produtos.push(produto);

    res.status(201).json({
        sucesso: true,
        dados: produto
    });
});

// =========================
// GET - listar produtos
// =========================

app.get('/produtos', (req, res) => {

    res.json({
        sucesso: true,
        dados: produtos
    });

});

// =========================
// GET - buscar por id
// =========================

app.get('/produtos/:id', (req, res) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            sucesso: false,
            erro: 'ID inválido'
        });
    }

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto não encontrado'
        });
    }

    res.json({
        sucesso: true,
        dados: produto
    });

});

// =========================
// PUT - atualizar
// =========================

app.put('/produtos/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const { nome, preco } = req.body;

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto não encontrado'
        });
    }

    if (!nome || nome.trim() === '') {
        return res.status(400).json({
            sucesso: false,
            erro: 'Nome inválido'
        });
    }

    if (!preco || preco <= 0) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Preço inválido'
        });
    }

    produto.nome = nome;
    produto.preco = preco;

    res.json({
        sucesso: true,
        dados: produto
    });

});

// =========================
// DELETE - remover
// =========================

app.delete('/produtos/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto não encontrado'
        });
    }

    produtos.splice(index, 1);

    res.json({
        sucesso: true,
        dados: 'Produto removido'
    });

});


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});