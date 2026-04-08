const express = require('express');
const app = express();
const porta = 3000;

// ==========================================
// Exercício 1 - Rotas básicas [cite: 171]
// ==========================================

// Rota raiz: / -> mensagem de boas-vindas [cite: 173]
app.get('/', (req, res) => {
    res.send('Bem-vindo à nossa API de Web I!');
});

// Rota /sobre -> descrição do sistema [cite: 174]
app.get('/sobre', (req, res) => {
    res.send('Este sistema foi desenvolvido para a resolução dos exercícios de introdução ao Express.');
});

// Rota /contato -> informação de contato [cite: 175]
app.get('/contato', (req, res) => {
    res.send('Entre em contato através do email: dev.marcelo@email.com');
});


// ==========================================
// Exercício 2 - API simples [cite: 176]
// ==========================================

// Rota /api/produto -> Retornar um objeto JSON com nome e preço [cite: 178, 181, 182, 183]
app.get('/api/produto', (req, res) => {
    res.json({ 
        nome: 'Teclado Mecânico', 
        preco: 350.00 
    });
});


// ==========================================
// Exercício 3 - Parâmetro de rota [cite: 184]
// ==========================================

// Rota /produto/:id -> Capturar o ID e retornar JSON [cite: 186, 188, 189]
app.get('/produto/:id', (req, res) => {
    const idDoProduto = req.params.id; // Captura o ID da URL [cite: 188]
    
    res.json({ 
        id: idDoProduto, // [cite: 191]
        mensagem: 'Produto encontrado com sucesso!' // [cite: 192]
    });
});


// ==========================================
// Exercício 4 - Query string [cite: 193]
// ==========================================

// Rota /busca?nome=valor -> Capturar o parâmetro e retornar JSON com o valor [cite: 195, 197, 198]
app.get('/busca', (req, res) => {
    const termoBuscado = req.query.nome; // Captura o que vier depois de ?nome= [cite: 197]
    
    res.json({ 
        resultado: termoBuscado // [cite: 198]
    });
});


// ==========================================
// Exercício 5 - Lista de dados [cite: 199]
// ==========================================

// Rota /api/alunos -> Criar array de alunos e retornar todos em JSON [cite: 201, 203, 204]
app.get('/api/alunos', (req, res) => {
    const alunos = [
        { id: 1, nome: 'Ana' },
        { id: 2, nome: 'Carlos' },
        { id: 3, nome: 'Beatriz' }
    ]; // [cite: 203]
    
    res.json(alunos); // [cite: 204]
});


// Inicializa o servidor na porta 3000
app.listen(porta, () => {
    console.log(`Servidor rodando perfeitamente em http://localhost:${porta}`);
});