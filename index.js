var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());
// app.use(express.static(__dirname + "public"));
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/quizApp"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var mysql = require("mysql");
var path = require("path");
var PORT = 9000;
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});
var db = mysql.createConnection({
  host: "sql3.freemysqlhosting.net",
  user: "sql3489519",
  password: "HumNZ7ckQb",
  database: "sql3489519"
  // host:"127.0.0.1",
  // user:"root",
  // password:"password",
  // database:"mahesh"
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});
// ----------------------------------------------------------
app.get("/get", (req, res) => {
  db.query("Select * from sql_db", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    
  });
});
app.post("/post", (req, res) => {
  var title = req.body.title;
  var date = req.body.date;
  var reminder = req.body.rem;

  console.log(req.body);

  var insertQuery =
    'INSERT INTO sql_db(title,date,reminder) VALUES("' +
    title +
    '","' +
    date +
    '","' +
    reminder +
    '")';

  console.log(insertQuery);
  db.query(insertQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("sent");
  });
});

//-----------------------------------------------------------
app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
