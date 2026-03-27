const http = require('http');

// 1. Criar uma variável fora do createServer [cite: 51]
// 2. Inicializar com valor 0 [cite: 52]
let acessos = 0;

const servidor = http.createServer((req, res) => {
    if (req.url === '/contador') {
        // 3. Toda vez que a rota /contador for acessada, incrementar essa variável [cite: 53]
        acessos++;
        
        // 4. Retornar o valor atualizado em formato JSON [cite: 54]
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ acessosTotais: acessos }));
    }
    
    res.statusCode = 404;
    return res.end('Rota não encontrada');
});

servidor.listen(3000, () => {
    console.log('Servidor do contador rodando na porta 3000');
});