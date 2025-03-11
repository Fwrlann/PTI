### Nomes dos Integrantes

- **Leonardo dos Santos Lima**
- **Gustavo José Furlan**

# Sistema de Monitoramento de Saúde

Este é o sistema de monitoramento de saúde. Ele permite que os usuários visualizem seus indicadores de saúde, como peso, horas de sono e consumo de água.

## 🚀 Tecnologias Utilizadas (Front-end)

- **HTML** - Estruturação da página web
- **CSS** - Estilização da página e layout responsivo
- **JavaScript** - Lógica de interatividade e manipulação de dados
- **Bootstrap 5** - Framework para estilização e componentes responsivos

## 🚀 Tecnologias Utilizadas (Back-end)

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework para API REST
- **SQLite** - Banco de dados leve
- **JWT (jsonwebtoken)** - Autenticação segura
- **Bcrypt.js** - Hash de senhas
- **Dotenv** - Gerenciamento de variáveis de ambiente

## 📂 Estrutura do Projeto

```
  |-- /Frontend
    ├── /assets
  │   ├── /css
  │   │   └── styles.css    # Arquivo CSS com as regras de estilo
  ├── index.html            # Página inicial de cadastro e monitoramento de saúde
  ├── dashboard.html        # Dashboard que exibe os dados registrados
  ├── /Routes
  │   ├── authRoutes.js   # Rotas de autenticação (login e registro)
  │   ├── healthRoutes.js # Rotas para registro e monitoramento de saúde
  ├── .env                # Configurações sensíveis (NÃO SUBIR NO GIT)
  ├── database.js         # Conexão com SQLite
  ├── createTables.js     # Script para criação das tabelas
  ├── server.js           # Arquivo principal do servidor
  ├── package.json        # Dependências do projeto
```

## 🔧 Configuração e Execução (Front-End)

### 1️⃣ **Clonar o Repositório**

```sh
git clone https://github.com/Fwrlann/PTI.git
```

### 2️⃣ **Entrar na pasta Frontend**

```sh
cd Frontend
```

### 3️⃣ **Iniciar o Projeto**

```sh
start index.html
```

### 4️⃣ **Instalar Dependências**

```sh
npm install
```

### 5️⃣ **Configurar Variáveis de Ambiente**

Crie um arquivo **.env** na raiz do projeto e adicione:

```env
PORT=3000
DATABASE_URL=database.db
JWT_SECRET=password
JWT_EXPIRES_IN=1d
```

### 6️⃣ **Criar o Banco de Dados**

```sh
node createTables.js
```

### 7️⃣ **Iniciar o Servidor**

```sh
node server.js
```

O servidor estará rodando em **http://localhost:3000** 🚀

---

## 📌 Rotas da API

### 🔹 **Autenticação**

| Método | Rota           | Descrição                    |
| ------ | -------------- | ---------------------------- |
| POST   | /auth/register | Cadastro de usuário          |
| POST   | /auth/login    | Login e geração de token JWT |

### 🔹 **Monitoramento de Saúde**

| Método | Rota          | Descrição                   |
| ------ | ------------- | --------------------------- |
| POST   | /health-data/ | Registrar peso, sono e água |
| GET    | /health-data/ | Obter histórico de saúde    |

**⚠️ Todas as rotas de monitoramento requerem autenticação com token JWT.**
