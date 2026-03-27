const http = require('http');
const pool = require('./db');

const servidor = http.createServer(async (req, res) => {
    // 1. Verificar se a rota é /usuarios [cite: 80]
    if (req.url === '/usuarios') {
        // Usar try/catch para tratamento de erro [cite: 87, 88]
        try {
            // 2. Executar a query [cite: 81] e 3. Aguardar o resultado com await [cite: 83]
            const resultado = await pool.query('SELECT * FROM usuarios'); [cite: 82]
            
            // 5. Definir o header como JSON [cite: 85]
            res.setHeader('Content-Type', 'application/json');
            
            // 4. Pegar os dados em resultado.rows [cite: 84] e 6. Retornar os dados [cite: 86]
            return res.end(JSON.stringify(resultado.rows));
        } catch (erro) {
            // Em caso de erro: definir status 500 e retornar mensagem apropriada [cite: 89, 90, 91]
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ erro: 'Erro interno no servidor ao listar usuários' }));
        }
    }
    
    res.statusCode = 404;
    return res.end('Rota não encontrada');
});

servidor.listen(3002, () => {
    console.log('Servidor de listagem rodando na porta 3002');
});