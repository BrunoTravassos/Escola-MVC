const mongoose = require("mongoose");

const Alunos = mongoose.model("alunos", {
  nome_Aluno: String,
  dataNasc: String,
  turma: String,
  endereco: String,
  nome_Mae: String,
  contato: Number,
});

module.exports = Alunos;
