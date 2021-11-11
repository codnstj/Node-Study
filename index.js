const path = require("path");
const ejs = require("ejs");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extende: true }));
app.use(express.json());

const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "codns04123",
  database: "node-data",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  conn.query(sql, function (err, result, fields) {
    res.render("index", { users: result });
  });
});

app.get("/create", (req, res) => {
  res.sendFile(path.join(__dirname, "html/form.html"));
});

app.post("/", (req, res) => {
  const sql = "INSERT INTO users SET ?";
  conn.query(sql, req.body, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send("등록이 완료되었습니다.");
  });
});

app.get("/delete/:id", (req, res) => {
  const sql = "DELETE FROM users WHERE id = ?";
  conn.query(sql, [req.params.id], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.redirect("/");
  });
});

app.get("/edit/:id", (req, res) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  conn.query(sql, [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.render("edit", { users: result });
  });
});

app.post("/update/:id", (req, res) => {
  const sql = "UPDATE users SET ? WHERE id =" + req.params.id;
  conn.query(sql, req.body, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 대기중입니다.`);
});
