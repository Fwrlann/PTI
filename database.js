require("dotenv").config(); // Carrega o .env
const sqlite3 = require("sqlite3").verbose();

// Verifica se a variável DATABASE_URL foi carregada corretamente
if (!process.env.DATABASE_URL) {
    console.error("Erro: DATABASE_URL não definida no .env");
    process.exit(1); // Sai do programa se a variável não estiver definida
}

// Conecta ao banco de dados
const db = new sqlite3.Database(process.env.DATABASE_URL, (err) => {
    if (err) {
        console.error("Erro ao abrir o banco de dados:", err.message);
    } else {
        console.log("Banco de dados conectado!");
    }
});

module.exports = db;
