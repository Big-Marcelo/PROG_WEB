const express = require('express');
const { cadastrar, login, perfil, admin } = require('../controllers/authController');
const { autenticarToken, autorizarRole } = require('../middlewares/authMiddleware');

const router = express.Router();

// Rotas públicas [cite: 401, 402]
router.post('/cadastro', cadastrar);
router.post('/login', login);

// Rotas protegidas [cite: 403, 416, 417]
router.get('/me', autenticarToken, perfil);
router.get('/admin', autenticarToken, autorizarRole('admin'), admin);

module.exports = router;