const perguntas = [
  {
    pergunta: "No contexto de desenvolvimento backend utilizando Node.js com Express, explique o papel das rotas dentro da aplicação e identifique qual alternativa representa corretamente a função de uma rota.",
    opcoes: [
      "Criar conexão com banco de dados",
      "Definir caminhos que recebem requisições HTTP",
      "Executar comandos SQL diretamente",
      "Gerar senha criptografada"
    ],
    resposta: 1,
    explicacao: "Rotas são responsáveis por definir caminhos (endpoints) que recebem requisições HTTP como GET, POST, PUT e DELETE."
  },
  {
    pergunta: "Durante o desenvolvimento de uma API REST utilizando Sequelize, um desenvolvedor precisa buscar todos os registros de uma tabela. Qual método deve ser utilizado e por quê?",
    opcoes: [
      "create()",
      "destroy()",
      "findAll()",
      "update()"
    ],
    resposta: 2,
    explicacao: "O método findAll() retorna todos os registros da tabela, sendo utilizado em operações de leitura (READ)."
  },
  {
    pergunta: "No fluxo de uma aplicação backend estruturada em MVC, analise a seguinte situação: uma requisição chega ao servidor solicitando dados de um usuário. Qual componente será responsável por processar essa requisição e interagir com o banco?",
    opcoes: [
      "Model",
      "Controller",
      "View",
      "Migration"
    ],
    resposta: 1,
    explicacao: "O Controller recebe a requisição, processa a lógica e chama o Model para acessar o banco de dados."
  },
  {
    pergunta: "Sobre segurança em aplicações backend, explique por que o uso do bcrypt é essencial ao trabalhar com senhas de usuários.",
    opcoes: [
      "Para armazenar senha em texto puro",
      "Para melhorar performance do sistema",
      "Para criptografar senha antes de salvar",
      "Para validar rotas HTTP"
    ],
    resposta: 2,
    explicacao: "bcrypt é usado para gerar hash da senha, evitando que ela seja armazenada em texto puro, aumentando a segurança."
  },
  {
    pergunta: "Em uma aplicação Express, um desenvolvedor utiliza o seguinte código: res.status(404).send('Erro'). O que esse código representa dentro do contexto HTTP?",
    opcoes: [
      "Sucesso",
      "Erro interno do servidor",
      "Recurso não encontrado",
      "Requisição inválida"
    ],
    resposta: 2,
    explicacao: "Status 404 indica que o recurso solicitado não foi encontrado."
  }
];

let atual = 0;
let pontuacao = 0;
let selecionado = null;

function carregarPergunta() {
  const p = perguntas[atual];
  document.getElementById("pergunta").innerText = p.pergunta;

  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  p.opcoes.forEach((opcao, index) => {
    const div = document.createElement("div");
    div.classList.add("opcao");
    div.innerText = opcao;

    div.onclick = () => {
      selecionado = index;
      alert(p.explicacao);

      if (index === p.resposta) {
        pontuacao++;
      }
    };

    opcoesDiv.appendChild(div);
  });
}

function proximaPergunta() {
  if (selecionado === null) {
    alert("Escolha uma opção!");
    return;
  }

  atual++;
  selecionado = null;

  if (atual < perguntas.length) {
    carregarPergunta();
  } else {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");
    document.getElementById("pontuacao").innerText =
      `Você acertou ${pontuacao} de ${perguntas.length}`;
  }
}

carregarPergunta();
