const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database");

const router = express.Router();

// Rota para cadastrar usuário
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }

    try {
        // Criptografar senha
        const hashedPassword = await bcrypt.hash(password, 10);

        db.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword],
            function (err) {
                if (err) {
                    return res.status(500).json({ error: "Erro ao cadastrar usuário" });
                }
                res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
            }
        );
    } catch (error) {
        res.status(500).json({ error: "Erro no servidor" });
    }
});

// Rota para login de usuário
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: "Usuário não encontrado" });
        }

        // Comparar senha com hash armazenado
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Senha incorreta" });
        }

        // Gerar token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    });
});

module.exports = router;
