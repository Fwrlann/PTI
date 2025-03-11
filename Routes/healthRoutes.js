const express = require("express");
const db = require("../database");
const jwt = require("jsonwebtoken");

const router = express.Router();

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Acesso negado" });

  jwt.verify(
    token.replace("Bearer ", ""),
    process.env.JWT_SECRET,
    (err, user) => {
      if (err) return res.status(403).json({ error: "Token inválido" });
      req.user = user;
      next();
    }
  );
};

router.post("/", authenticateToken, (req, res) => {
  const { weight, sleep_hours, water_intake } = req.body;
  const user_id = req.user.id;

  if (!weight || !sleep_hours || !water_intake) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  db.run(
    "INSERT INTO health_data (user_id, weight, sleep_hours, water_intake) VALUES (?, ?, ?, ?)",
    [user_id, weight, sleep_hours, water_intake],
    function (err) {
      if (err) {
        return res.status(500).json({ error: "Erro ao salvar os dados" });
      }
      res.status(201).json({ message: "Dados registrados com sucesso!" });
    }
  );
});

router.get("/", authenticateToken, (req, res) => {
  const user_id = req.user.id;

  db.all(
    "SELECT * FROM health_data WHERE user_id = ? ORDER BY date DESC",
    [user_id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao buscar os dados" });
      }
      res.json(rows);
    }
  );
});

module.exports = router;
