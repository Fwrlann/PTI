# Frontend - Sistema de Monitoramento de Saúde

Este é o frontend de um sistema de monitoramento de saúde, desenvolvido com HTML, CSS e JavaScript. Ele permite que os usuários visualizem seus indicadores de saúde, como peso, altura, atividade física, horas de sono e consumo de água.

## 🚀 Tecnologias Utilizadas

- **HTML** - Estruturação da página web
- **CSS** - Estilização da página e layout responsivo
- **JavaScript** - Lógica de interatividade e manipulação de dados
- **Bootstrap 5** - Framework para estilização e componentes responsivos

## 📂 Estrutura do Projeto

```
/frontend
  ├── /assets
  │   ├── /css
  │   │   └── styles.css    # Arquivo CSS com as regras de estilo
  ├── index.html            # Página inicial de cadastro e monitoramento de saúde
  ├── dashboard.html        # Dashboard que exibe os dados registrados
  ├── /js
  │   └── script.js         # Lógica de interação e manipulação de dados com LocalStorage
```

## 🔧 Configuração e Execução

### 1️⃣ Clonar o Repositório

```sh
git clone https://github.com/Fwrlann/PTI.git
cd frontend
```

### 2️⃣ Abrir o Projeto no Navegador

Abra o arquivo index.html no seu navegador preferido. Não há necessidade de um servidor backend para visualizar o funcionamento do frontend. No entanto, é necessário que a API backend esteja funcionando corretamente para salvar e recuperar os dados de saúde.

## 🧑‍💻 Funcionalidades

- **Cadastro de Dados de Saúde**: O usuário pode registrar indicadores como peso, altura, atividade física, sono e ingestão de água.
- **Exibição de Dados**: O usuário pode visualizar os dados mais recentes no dashboard e consultar um histórico completo de evolução de sua saúde.
- **LocalStorage**: Os dados registrados são armazenados no localStorage do navegador, garantindo persistência durante a navegação.

### 📑 Como Funciona

#### 1️⃣ Cadastro de Dados

No arquivo index.html, o usuário pode registrar as informações de saúde. Ao preencher o formulário e clicar em "Cadastrar", os dados são armazenados no localStorage do navegador.

#### 2️⃣ Dashboard de Saúde

No arquivo dashboard.html, os dados mais recentes de saúde são recuperados do localStorage e exibidos em cards e em uma tabela de histórico. Caso o localStorage contenha dados, eles são carregados automaticamente.

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
git clone https://github.com/Fwrlann/PTI.git
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
