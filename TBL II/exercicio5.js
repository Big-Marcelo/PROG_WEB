const http = require('http');
const pool = require('./db'); // Importando a conexão com o banco [cite: 319]

const servidor = http.createServer(async (req, res) => { // async para usar await no banco [cite: 361, 362]
    
    // 1. Identificar se a URL começa com /usuarios/ [cite: 64]
    if (req.url.startsWith('/usuarios/')) {
        // 2. Extrair o ID da URL [cite: 65]
        const id = Number(req.url.split('/')[2]);
        
        // 3. Validar o ID (verificar se é número) [cite: 66]
        if (!isNaN(id)) {
            try { // 7. Tratar possíveis erros com try/catch [cite: 73]
                
                // 4. Executar uma query no banco passando o ID como parâmetro ($1) [cite: 67, 68, 69]
                const resultado = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
                
                res.setHeader('Content-Type', 'application/json');
                
                // 6. Verificar se o resultado existe [cite: 70]
                if (resultado.rows.length > 0) {
                    // Se existir retornar o usuário [cite: 71]
                    return res.end(JSON.stringify(resultado.rows[0]));
                } else {
                    // Se não retornar mensagem de "não encontrado" [cite: 72]
                    res.statusCode = 404;
                    return res.end(JSON.stringify({ mensagem: 'Usuário não encontrado' }));
                }
            } catch (erro) {
                res.statusCode = 500;
                return res.end(JSON.stringify({ erro: 'Erro ao buscar no banco de dados' }));
            }
        }
    }
    
    res.statusCode = 404;
    return res.end('Rota não encontrada');
});

servidor.listen(3001, () => { // Usando porta 3001 para não dar conflito se o ex 4 estiver rodando [cite: 273]
    console.log('Servidor de busca por ID rodando na porta 3001');
});