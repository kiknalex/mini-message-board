require('dotenv').config();
const express = require("express");
const path = require("node:path");
const app = express();
const port = process.env.PORT || 3000;
const pool = require("./db/pool.js");
const db = require("./db/queries.js");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", async (req, res) => {
  const {rows} = await pool.query("SELECT * FROM messages");
  console.log(rows);
  res.render("index", { title: "Mini Messageboard", messages: rows });
  console.log("testtest");
});

app.get("/new", (req, res) => {
    res.render("form");
})

app.post("/new", async (req,res) => {
     await db.addMessage(req.body.author,req.body.message);
     res.redirect("/");
})

app.listen(port, () => {
  console.log("Listening to the requests");
});
