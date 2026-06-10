const jwt = require('jsonwebtoken');

// Simulação de banco de dados com roles [cite: 328, 413]
const usuarios = [
    { id: 1, usuario: 'admin', senha: '123', role: 'admin' },
    { id: 2, usuario: 'joao', senha: '123', role: 'user' }
];

function cadastrar(req, res) {
    const { usuario, senha, role } = req.body;
    // Validação de entrada e tratamento de erro [cite: 407, 409]
    if (!usuario || !senha) {
        return res.status(400).json({ erro: 'Preencha usuário e senha' });
    }
    const novoUsuario = {
        id: usuarios.length + 1,
        usuario,
        senha,
        role: role || 'user' // Define 'user' como padrão se não for enviado
    };
    usuarios.push(novoUsuario);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso', id: novoUsuario.id });
}

function login(req, res) {
    const { usuario, senha } = req.body;
    // Validação de entrada [cite: 407]
    if (!usuario || !senha) {
        return res.status(400).json({ erro: 'Preencha usuário e senha' });
    }
    const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);
    if (!user) {
        return res.status(401).json({ erro: 'Credenciais inválidas' });
    }
    
    // Geração de JWT com role no payload e expiração curta para testes [cite: 408, 414]
    const token = jwt.sign(
        { id: user.id, usuario: user.usuario, role: user.role },
        process.env.SECRET,
        { expiresIn: '10m' } 
    );
    res.json({ token });
}

function perfil(req, res) {
    res.json({ mensagem: 'Acesso autorizado', usuario: req.usuario });
}

function admin(req, res) {
    res.json({ mensagem: 'Área administrativa acessada com sucesso!' });
}

module.exports = { cadastrar, login, perfil, admin };