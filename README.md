# Backend - Sistema de Monitoramento de Saúde

Este é o backend de um sistema de monitoramento de saúde, desenvolvido com **Node.js**, **Express** e **SQLite**. Ele permite que usuários registrem e monitorem indicadores de saúde como peso, horas de sono e consumo de água.

---

## 🚀 Tecnologias Utilizadas
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework para API REST
- **SQLite** - Banco de dados leve
- **JWT (jsonwebtoken)** - Autenticação segura
- **Bcrypt.js** - Hash de senhas
- **Dotenv** - Gerenciamento de variáveis de ambiente

---

## 📂 Estrutura do Projeto
```
/app-saude
  ├── /routes
  │   ├── authRoutes.js   # Rotas de autenticação (login e registro)
  │   ├── healthRoutes.js # Rotas para registro e monitoramento de saúde
  ├── .env                # Configurações sensíveis (NÃO SUBIR NO GIT)
  ├── database.js         # Conexão com SQLite
  ├── createTables.js     # Script para criação das tabelas
  ├── server.js           # Arquivo principal do servidor
  ├── package.json        # Dependências do projeto
```

---

## 🔧 Configuração e Execução

### 1️⃣ **Clonar o Repositório**
```sh
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd app-saude
```

### 2️⃣ **Instalar Dependências**
```sh
npm install
```

### 3️⃣ **Configurar Variáveis de Ambiente**
Crie um arquivo **.env** na raiz do projeto e adicione:
```env
PORT=3000
DATABASE_URL=database.db
JWT_SECRET=password
JWT_EXPIRES_IN=1d
```

### 4️⃣ **Criar o Banco de Dados**
```sh
node createTables.js
```

### 5️⃣ **Iniciar o Servidor**
```sh
node server.js
```
O servidor estará rodando em **http://localhost:3000** 🚀

---

## 📌 Rotas da API

### 🔹 **Autenticação**
| Método | Rota             | Descrição         |
|--------|----------------|------------------|
| POST   | /auth/register | Cadastro de usuário |
| POST   | /auth/login    | Login e geração de token JWT |

### 🔹 **Monitoramento de Saúde**
| Método | Rota            | Descrição                  |
|--------|----------------|----------------------------|
| POST   | /health-data/  | Registrar peso, sono e água |
| GET    | /health-data/  | Obter histórico de saúde   |

**⚠️ Todas as rotas de monitoramento requerem autenticação com token JWT.**
