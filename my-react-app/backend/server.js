const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// connect to database file
const db = new sqlite3.Database("./database.db");

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);

db.get("SELECT * FROM users WHERE username = ?", ["JUAN"], (err, row) => {
  if (!row) {
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ["JUAN", "123"]);
  }
});

// create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS schedules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    date TEXT,
    time TEXT
  )
`);

app.get("/", (req, res) => {
  res.send("Backend + SQLite running ✔️");
});

// get schedules
app.get("/schedules", (req, res) => {
  db.all("SELECT * FROM schedules", [], (err, rows) => {
    res.json(rows);
  });
});

// add schedule
app.post("/schedules", (req, res) => {
  const { title, date, time } = req.body;
  db.run(
    "INSERT INTO schedules(title, date, time) VALUES (?, ?, ?)",
    [title, date, time],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

app.listen(3001, () => console.log("Server running on port 3001"));

// login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, row) => {
      if (err) return res.status(500).json({ error: "Database error" });
      if (row) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    }
  );
});

