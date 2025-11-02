//  adiciona um novo emprestimo a lista, utilizando valores vindos de outros arquivos
class emprestimo {
  livro: any;
  pessoa: any;
  dias_emprestimo: number;
  qtdEstoque: any;
  nome: any;

  constructor(livro: livro, pessoa: pessoa, dias_emprestimo: number) {
    this.livro = livro;
    this.pessoa = pessoa;
    this.dias_emprestimo = dias_emprestimo;
    this.livro.qtdEstoque -= 1;
  }
  // imprime os detalhes do emprestimo.
  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Livro: ${this.livro.titulo}`);
    console.log(`Pessoa: ${this.pessoa.nome}`);
    console.log(`Dias de Empréstimo: ${this.dias_emprestimo}`);
    console.log("---------------------");
  }
  // faz um calculo da multa dos dias em que o usuario demorou para devolver o livro
  calcularMulta(demoraDias: any): number {
    if (demoraDias <= this.dias_emprestimo) {
      return 0.0;
    }
    return (
      (demoraDias - this.dias_emprestimo) *
      Math.ceil(this.livro.numeroPaginas / 100) *
      2.0
    );
  }
}

class doacoes {
  doador: string;
  obraDoada: string;
  dataDoacao: string;

  constructor(doador: string, obraDoada: string, dataDoacao: string) {
    this.doador = doador;
    this.obraDoada = obraDoada;
    this.dataDoacao = dataDoacao;
  }
}

module.exports = emprestimo;
module.exports = doacoes;
