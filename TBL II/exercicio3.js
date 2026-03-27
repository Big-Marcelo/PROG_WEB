const http = require('http');

// 1. Criar um array de objetos dentro do código [cite: 32]
// 2. Cada objeto deve conter: id, nome, preço [cite: 33, 34, 35]
const produtos = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250.00 },
    { id: 2, nome: 'Mouse Gamer', preco: 120.00 },
    { id: 3, nome: 'Monitor 24"', preco: 800.00 }
];

const servidor = http.createServer((req, res) => {
    
    // Rota para listar todos os produtos
    if (req.url === '/api/produtos') {
        
        // 3. Quando a rota for acessada:
        // Definir o header como JSON [cite: 38, 95]
        res.setHeader('Content-Type', 'application/json');
        
        // Converter o array com JSON.stringify e retornar a resposta [cite: 40, 94]
        return res.end(JSON.stringify(produtos));
    }
    
    // Extensão: Rota para buscar um produto específico por ID [cite: 41, 42, 43]
    if (req.url.startsWith('/api/produtos/')) {
        
        // Separando a URL para pegar o ID no final
        const partesUrl = req.url.split('/');
        const id = Number(partesUrl[3]); 
        
        // Validando se o ID passado é um número [cite: 94]
        if (!isNaN(id)) {
            // Buscando no array o produto que tem o mesmo id
            const produtoEncontrado = produtos.find(p => p.id === id);
            
            // Sempre usar setHeader ao retornar JSON [cite: 95]
            res.setHeader('Content-Type', 'application/json');
            
            if (produtoEncontrado) {
                // Retornar apenas um produto específico [cite: 44]
                return res.end(JSON.stringify(produtoEncontrado));
            } else {
                // Caso não encontre o produto
                res.statusCode = 404;
                return res.end(JSON.stringify({ erro: 'Produto não encontrado' }));
            }
        }
    }
    
    // Tratamento padrão para qualquer outra rota que não existe
    res.statusCode = 404;
    return res.end('Rota não encontrada');
});

servidor.listen(3000, () => {
    console.log('Servidor de produtos rodando em http://localhost:3000');
});