const http = require('http');

const servidor = http.createServer((req, res) => {
    
    // 1. Verificar se a URL começa com /usuario/ [cite: 9]
    if (req.url.startsWith('/usuario/')) {
        
        // 2. Separar a URL em partes (utilize split('/')) [cite: 10]
        // Se a rota for '/usuario/5', o array será ['', 'usuario', '5']
        const partesUrl = req.url.split('/');
        
        // 3. Extrair o valor que representa o ID [cite: 11]
        const idString = partesUrl[2];
        
        // 4. Converter esse valor para número [cite: 12]
        const id = Number(idString);
        
        // 5. Validar se é um número válido [cite: 13]
        if (!isNaN(id) && idString !== undefined) {
            
            // 6. Retornar um JSON contendo o ID e um nome baseado no ID [cite: 14, 15, 16]
            const respostaUsuario = {
                id: id,
                nome: `Usuário Teste ${id}`
            };
            
            // Sempre usar setHeader ao retornar JSON [cite: 95]
            res.setHeader('Content-Type', 'application/json');
            
            // Sempre garantir que res.end() seja chamado e usar JSON.stringify 
            return res.end(JSON.stringify(respostaUsuario));
        } else {
            // Tratamento caso o ID não seja um número
            res.statusCode = 400; 
            return res.end('Erro: ID fornecido não é válido.');
        }
    } 
    
    // Fallback para rotas não encontradas
    res.statusCode = 404;
    return res.end('Rota não encontrada');
});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});