// cria um novo usuário no sistema
class pessoa {
  nome: string;
  cpf: number;
  dataNascimento: string;

  constructor(nome: string, cpf: number, dataNascimento: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }
  // imprime os detalhes do usuário no sistema.
  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Data de Nascimento: ${this.dataNascimento}`);
    console.log("---------------------");
  }
}

class doador extends pessoa {
  qtdDoacao: number;

  constructor(
    nome: string,
    cpf: number,
    dataNascimento: string,
    qtdDoacao: number
  ) {
    super(nome, cpf, dataNascimento);
    this.qtdDoacao = qtdDoacao;
  }

  adicionarDoacao() {
    this.qtdDoacao += 1;
  }

  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Data de Nascimento: ${this.dataNascimento}`);
    console.log(`Quantidade de doações: ${this.qtdDoacao}`);
    console.log("---------------------");
  }
}

module.exports = pessoa;
module.exports = doador;
