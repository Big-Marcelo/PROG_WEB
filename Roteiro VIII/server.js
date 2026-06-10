require('dotenv').config(); // Necessário para carregar variáveis de ambiente [cite: 230]
const express = require('express');
const routes = require('./src/routes/routes');

const app = express();
app.use(express.json());

// Importando e usando as rotas separadas
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});