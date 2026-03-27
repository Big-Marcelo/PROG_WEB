const http = require('http');

const servidor = http.createServer((req, res) => {
    
    // 1. Verificar se a rota acessada é /teste [cite: 22]
    if (req.url === '/teste') {
        
        // 2. Dentro dessa condição, verificar o método usando req.method [cite: 23]
        if (req.method === 'GET') {
            
            // 3. Se for GET, retornar uma mensagem simples [cite: 24]
            res.statusCode = 200; // 200 significa OK
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            return res.end('Você acessou a rota usando o método GET. Sucesso!');
            
        } else {
            
            // 4. Se for qualquer outro método, retornar uma mensagem informando que não é permitido [cite: 25, 26]
            // 5. Definir um status code adequado (ex: 405) [cite: 27]
            res.statusCode = 405; // 405 significa Method Not Allowed
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            return res.end(`Erro: O método ${req.method} não é permitido nesta rota.`);
            
        }
    }
    
    // Tratamento para rotas que não existem
    res.statusCode = 404;
    return res.end('Rota não encontrada');
});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});