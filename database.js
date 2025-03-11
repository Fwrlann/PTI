require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();

if (!process.env.DATABASE_URL) {
  console.error("Erro: DATABASE_URL não definida no .env");
  process.exit(1);
}

const db = new sqlite3.Database(process.env.DATABASE_URL, (err) => {
  if (err) {
    console.error("Erro ao abrir o banco de dados:", err.message);
  } else {
    console.log("Banco de dados conectado!");
  }
});

module.exports = db;
