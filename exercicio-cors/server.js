const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Exercicio 1 e 3: Configuração de CORS
// aceitar apenas uma origem específica (Ex 3)
// e definindo quais métodos são permitidos (Ex 5)
const corsOptions = {
    origin: 'http://localhost:5500',
    methods: ['GET'],                // Permite apenas o método GET (Ex 5)
    optionsSuccessStatus: 200
};


app.use(cors(corsOptions));

//(Exercício 1), usar apenas:
// app.use(cors());

// Rota de teste para o Exercício 4
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'Ana', cargo: 'Dev Frontend' },
        { id: 2, nome: 'Carlos', cargo: 'Dev Backend' },
        { id: 3, nome: 'Bia', cargo: 'Designer' }
    ]);
});

// Rota POST para testar o bloqueio do Exercício 5 (já que liberamos apenas GET)
app.post('/usuarios', (req, res) => {
    res.send('Usuário criado!');
});

app.listen(PORT, () => {
    console.log(` Servidor rodando em http://localhost:${PORT}`);
    console.log(` CORS configurado para aceitar requisições de http://localhost:5500`);
});