require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./Routes/authRoutes");
const healthRoutes = require("./Routes/healthRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API do App Saúde funcionando!");
});

app.use("/auth", authRoutes);
app.use("/health-data", healthRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
