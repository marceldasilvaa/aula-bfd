const prompt = require("prompt-sync")();
const Compra = require("./Compra");
const Livro = require("./Obras");
const Filme = require("./Obras");
const Emprestimo = require("./Emprestimo");
const Pessoa = require("./Pessoa");
const Doador = require("./Pessoa");

const perguntar = (pergunta: string): string => {
  const resposta = prompt(pergunta);
  if (resposta) return resposta;
  return "";
};

const livros: Array<livro> = [];
const filmes: Array<filme> = [];
const compras: Array<compra> = [];
const emprestimos: Array<emprestimo> = [];
const pessoas: Array<pessoa> = [];
const doadores: Array<doador> = [];

const escolherObras = () => {
  console.log("\nEscolha qual obra você quer:");
  console.log("1. Livros");
  console.log("2. Filmes");

  const escolherObras = perguntar("Escolha uma opção: ");

  if (escolherObras !== null && escolherObras === "1") {
    console.log("\n---------------------------------");
    console.log("Ok. Agora escolha se você quer:");
    console.log("1. Adicionar um livro.");
    console.log("2. Listar livros.");
    console.log("---------------------------------\n");

    const livro = perguntar("Digite o número da sua escolha: ");

    if (livro !== null && livro === "1") {
      console.log("---------------------------------");
      adicionarLivro();
    } else if (livro !== null && livro === "2") {
      console.log("---------------------------------");
      listarLivros();
    } else {
      console.log("---------------------------------");
      console.error("Você deve escolher um número entre 1 e 2.");
    }
  } else if (escolherObras !== null && escolherObras === "2") {
    console.log("\n---------------------------------");
    console.log("Ok. Agora escolha se você quer:");
    console.log("1. Adicionar um filme.");
    console.log("2. Listar filmes.");
    console.log("---------------------------------\n");

    const filme = perguntar("Digite o número da sua escolha: ");

    if (filme !== null && filme === "1") {
      console.log("---------------------------------");
      adicionarFilme();
    } else if (filme !== null && filme === "2") {
      console.log("---------------------------------");
      listarFilmes();
    } else {
      console.log("---------------------------------");
      console.error("Você deve escolher um número entre 1 e 2.");
    }
  } else {
    console.log("Opção inválida!");
  }
};

// const adicionarLivro serve para criar um novo livro através da importação do arquivo Livro que vem de Livro.js.
const adicionarLivro = () => {
  const titulo = perguntar("Título do livro: ");
  const autor = perguntar("Autor do livro: ");
  const ano = perguntar("Ano de publicação: ");
  const paginas = parseInt(perguntar("Número de páginas: "));
  const estoque = parseInt(perguntar("Qtd em estoque:"));

  const livro = new Livro(titulo, autor, ano, paginas, estoque);
  livros.push(livro);
  console.log("Livro adicionado com sucesso!");
};
// const listarLivros serve para imprimir na tela cada um dos livros salvos na lista. Usando o método livro.imprimirDetalhes() que também vem do arquivo Livro.js.
const listarLivros = () => {
  0;
  console.log("Lista de Livros:");
  livros.forEach((livro, index) => {
    console.log(`\nLivro ${index + 1}:`);
    livro.imprimirDetalhes();
  });
};

const adicionarFilme = () => {
  const elenco = perguntar("Qual é o elenco do filme? ");
  const genero = perguntar("Qual o gênero do filme? ");
  const diretor = perguntar("Qual o nome do diretor do filme? ");
  const dataLancamento = perguntar("Qual a data de lançamento do filme? ");

  const filme = new Filme(elenco, genero, diretor, dataLancamento);
  filmes.push(filme);
  console.log("Filme adicionado com sucesso!");
};

const listarFilmes = () => {
  0;
  console.log("Lista de Livros:");
  filmes.forEach((filme, index) => {
    console.log(`\nFilme ${index + 1}:`);
    filme.imprimirDetalhes();
  });
};
// const adicionarPessoa serve para criar um novo usuário através da importação do arquivo Pessoa.js. Adicionando o usuário à uma lista no servidor.
const adicionarPessoa = () => {
  const nome = perguntar("Nome da pessoa: ");
  const cpf = parseInt(perguntar("CPF da pessoa: "));
  const dataNascimento = perguntar("Data de nascimento da pessoa: ");

  const pessoa = new Pessoa(nome, cpf, dataNascimento);
  pessoas.push(pessoa);
  console.log("Pessoa adicionada com sucesso!");
};

// const listarPessoas serve para imprimir na tela cada uma das pessoas salvas na lista. Usando o método pessoa.imprimirDetalhes(), mostrando o nome, CPF e data de nascimento da pessoa que também vem do arquivo Pessoa.js.

const listarPessoas = () => {
  console.log("Lista de Pessoas:");
  pessoas.forEach((pessoa, index) => {
    console.log(`\nPessoa ${index + 1}:`);
    pessoa.imprimirDetalhes();
  });
};
// const adicionarCompra serve para listar os livros disponíveis no sistema para compra e realizar a venda dos mesmos. Passando os parâmetros escolhidos pelo usuário e adicionando a compra à uma lista.
const adicionarCompra = () => {
  listarLivros();
  const livroIndex =
    parseInt(perguntar("Selecione o número do livro para compra: ")) - 1;
  const preco = parseFloat(perguntar("Preço total da compra: "));
  const vendedor = perguntar("Nome do vendedor: ");
  const dataVenda = perguntar("Data da venda: ");
  const qtd = parseInt(perguntar("Quantidade comprada: "));

  const compra = new Compra(
    livros[livroIndex],
    preco,
    vendedor,
    dataVenda,
    qtd
  );
  compras.push(compra);
  console.log("Compra adicionada com sucesso!");
};
// const listarCompras serve para imprimir na tela as informações de cada compra salva na lista. Usando o método compra.imprimirDetalhes(), vindo do arquivo Compras.js.
const listarCompras = () => {
  console.log("Lista de Compras:");
  compras.forEach((compra, index) => {
    console.log(`\nCompra ${index + 1}:`);
    compra.imprimirDetalhes();
  });
};

// const adicionarEmprestimo serve para mostrar os livros disponíveis para empréstimo e mostrar também a lista de usuários no sistema para a pessoa se identificar, junto com os dias de empréstimo. E assim é adicinado o empréstimo à lista de empréstimo, vindo do arquivo Emprestimos.js.
const adicionarEmprestimo = () => {
  listarLivros();
  const livroIndex =
    parseInt(perguntar("Selecione o número do livro para empréstimo: ")) - 1;
  listarPessoas();
  const pessoaIndex =
    parseInt(
      perguntar("Selecione o número da pessoa que está pegando o empréstimo: ")
    ) - 1;
  const diasEmprestimo = parseInt(
    perguntar("Número de dias para o empréstimo: ")
  );

  const emprestimo = new Emprestimo(
    livros[livroIndex],
    pessoas[pessoaIndex],
    diasEmprestimo
  );
  emprestimos.push(emprestimo);
  console.log("Empréstimo adicionado com sucesso!");
};
// const listarEmprestimos serve para imprimir na tela as informações de cada empréstimo salvo na lista. Usando o método emprestimo.imprimirDetalhes(), vindo do arquivo Emprestimo.js.
const listarEmprestimos = () => {
  console.log("Lista de Empréstimos:");
  emprestimos.forEach((emprestimo, index) => {
    console.log(`\nEmpréstimo ${index + 1}:`);
    emprestimo.imprimirDetalhes();
  });
};
// const devolverLivro serve para imprimir os empréstimos em aberto no sistema, dando a escolha ao usuário de selecionar qual ele quer devolver, utilizando o número do empréstimo e os dias. E logo após fazendo o cálculo
//  da multa a ser paga pelo usuário (caso ele tenha ultrapassado os dias de empréstimo selecionado), passando o número de dias para o método calcularMulta(), que vem do Emprestimo.js.
const devolverLivro = () => {
  listarEmprestimos();
  const emprestimoIndex =
    parseInt(perguntar("Selecione o número do empréstimo para devolução: ")) -
    1;
  const demoraDias = parseInt(
    perguntar("Número de dias que demorou para devolver: ")
  );

  const emprestimo = emprestimos[emprestimoIndex];
  console.log(`Multa a ser paga: ${emprestimo.calcularMulta(demoraDias)}`);
};

// interface do aplicativo para o usuário acessar as opções
const menu = () => {
  console.log("\nMenu:");
  console.log("1. Escolher obras");
  console.log("2. Adicionar Pessoa");
  console.log("3. Listar Pessoas");
  console.log("4. Adicionar Compra");
  console.log("5. Listar Compras");
  console.log("6. Adicionar Empréstimo");
  console.log("7. Listar Empréstimos");
  console.log("8. Devolver Livro");
  console.log("0. Sair");
  const escolha = prompt("Escolha uma opção: ");

  switch (escolha) {
    case "1":
      escolherObras();
      break;
    case "2":
      adicionarPessoa();
      break;
    case "3":
      listarPessoas();
      break;
    case "4":
      adicionarCompra();
      break;
    case "5":
      listarCompras();
      break;
    case "6":
      adicionarEmprestimo();
      break;
    case "7":
      listarEmprestimos();
      break;
    case "8":
      devolverLivro();
      break;
    case "0":
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida!");
      menu();
  }
};

//Exibição do menu até que o usuário queira sair do sistema, mandando uma menssagem de confirmação.
while (true) {
  menu();
  const continuar = perguntar("Deseja sair do sistema? (s/n): ");
  if (continuar.toLowerCase() == "s") {
    break;
  }
}
