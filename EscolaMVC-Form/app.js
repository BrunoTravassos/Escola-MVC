const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

const alunos_router = require('./routes/alunos-router');

app.get("/", (req, res) => res.render("views/pages/index"));

app.set("view engine", "ejs");
app.set("views", __dirname, "/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/alunos", alunos_router);
app.use("/cadastrarAlunos", alunos_router);
app.use("/editarAlunos", alunos_router);

mongoose.connect(
  "mongodb+srv://bruno_travassos:bruno_travassos@cluster0.301t5.mongodb.net/escola?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(port, () =>
  console.log(`Example app listening on port port! ` + port)
);