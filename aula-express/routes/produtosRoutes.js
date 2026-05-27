const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.listarProdutos);

router.get('/total', produtosController.totalProdutos);

router.get('/:id', produtosController.buscarProduto);

module.exports = router;