const express = require("express");
const router = express.Router();

const alunosController = require("../controllers/alunos-controller");

//chamando o listar produtos em produtos controller
router.get("/", alunosController.listar_alunos);

router.get("/cadastrarAlunos", alunosController.abrirCadastroAlunos);

router.post("/cadastrarAlunos", alunosController.salvarCadastroAlunos);

router.get("/editarAlunos/:id", alunosController.alterarAlunos);
router.post("/editarAlunos/", alunosController.salvaAlterarAlunos);

router.get("/deletarAluno/:id", alunosController.deletarAlunos);

module.exports = router;
