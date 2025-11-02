// adiciona um livro atráves dos parametros passados pelo usuário.
class livro {
  titulo: string;
  autor: string;
  numeroPaginas: number;
  qtdEstoque: number;
  anoPublicacao: string;

  constructor(
    titulo: string,
    autor: string,
    anoPublicacao: string,
    numeroPaginas: number,
    qtdEstoque: number
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.numeroPaginas = numeroPaginas;
    this.qtdEstoque = qtdEstoque;
  }
  // imprime os detalhes do livro.
  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Ano de Publicação: ${this.anoPublicacao}`);
    console.log(`Número de Páginas: ${this.numeroPaginas}`);
    console.log(`Quantidade em Estoque: ${this.qtdEstoque}`);
    console.log("---------------------");
  }
}

class filme {
  elenco: Array<string>;
  genero: string;
  diretor: string;
  dataLancamento: string;

  constructor(
    elenco: Array<string>,
    genero: string,
    diretor: string,
    dataLancamento: string
  ) {
    this.genero = genero;
    this.elenco = elenco;
    this.diretor = diretor;
    this.dataLancamento = dataLancamento;
  }

  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Elenco: ${this.elenco}`);
    console.log(`Diretor: ${this.diretor}`);
    console.log(`Gênero: ${this.genero}`);
    console.log(`Data de lançamento: ${this.dataLancamento}`);
    console.log("---------------------");
  }
}

module.exports = livro;
module.exports = filme;
