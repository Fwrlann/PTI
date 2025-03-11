const db = require("./database");

db.serialize(() => {
  db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `);

  db.run(`
        CREATE TABLE IF NOT EXISTS health_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            weight REAL,
            sleep_hours INTEGER,
            water_intake INTEGER,
            date TEXT DEFAULT CURRENT_DATE,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    `);

  console.log("Tabelas criadas com sucesso!");
});

db.close();
