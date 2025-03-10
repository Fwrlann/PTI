require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./Routes/authRoutes");
const healthRoutes = require("./Routes/healthRoutes"); // Importe as rotas DEPOIS de criar o app

const app = express();

app.use(express.json()); // Permitir requisições JSON
app.use(cors()); // Habilitar CORS

// Rota principal para testar o servidor
app.get("/", (req, res) => {
    res.send("API do App Saúde funcionando!");
});

// Definição das rotas
app.use("/auth", authRoutes);
app.use("/health-data", healthRoutes); // Agora é seguro chamar aqui

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
