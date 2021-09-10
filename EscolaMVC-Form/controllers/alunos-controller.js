const Alunos = require("../models/alunos-model"); //importando o modelo do banco

exports.listar_alunos = (req, res) => {
  Alunos.find({}, (err, aluno) => {
    if (err) {
      return res.status(500).send("Erro ao consultar Aluno");
    } else {
      res.render("views/pages/alunos", { lista_alunos: aluno });
    }
  });
};

exports.abrirCadastroAlunos = (req, res) => {
  res.render("views/pages/formAlunos");
};

//salvando do formAluno
exports.salvarCadastroAlunos = (req, res) => {
  // referenciando a pagina
  let aluno = new Alunos(); // variavel produto recebendo do Model Produto
  aluno.nome_Aluno = req.body.nome_Aluno;
  aluno.dataNasc = req.body.dataNasc;
  aluno.turma = req.body.turma; 
  aluno.endereco = req.body.endereco; 
  aluno.nome_Mae = req.body.nome_Mae; 
  aluno.contato = req.body.contato; 

  aluno.save((err) => {
    if (err) {
      return res.status(500).send("Erro ao cadastrar");
    } else {
      return res.redirect("/alunos");
    }
  });
};;


//deletando
exports.deletarAlunos = (req, res) => {
  var id = req.params.id;

  Alunos.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      return res.status(500).send("Erro ao excluir registro");
    } else {
      res.redirect("/alunos");
    }
  });
};

//chamando alteraçao
exports.alterarAlunos = (req, res) => {
  Alunos.findById(req.params.id, (err, aluno) => {
    if (err) {
      return req.status(500).send("Erro ao consultar o aluno!");
    } else {
      res.render("views/pages/formEditAlunos", { lista_alunos: aluno });
      // res.render("formEditProduto/:id", { produto_item: produto });
    }
  });
};

//salvar a autualização
exports.salvaAlterarAlunos = (req, res) => {
  var id = req.body.id;
  Alunos.findById(id, (err, aluno) => {
    if (err) {
      return req.status(500).send("Erro ao atualizar o aluno!");
    } else {
      aluno.nome_Aluno = req.body.nome_Aluno;
      aluno.dataNasc = req.body.dataNasc;
      aluno.turma = req.body.turma;
      aluno.endereco = req.body.endereco;
      aluno.nome_Mae = req.body.nome_Mae;
      aluno.contato = req.body.contato; 

    }

    aluno.save((err) => {
      if (err) {
        return res.status(500).send("Erro ao Atualizar");
      } else {
        return res.redirect("/alunos");
      }
    });
  });
};


