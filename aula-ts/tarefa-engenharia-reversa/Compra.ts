// adiciona uma compra ao sistema, utilizando tambem parâmetros de outro arquivo.
class compra {
  livro: any;
  preco: number;
  vendedor: string;
  data_venda: string;
  qtd: number;
  precoUnitario: any;

  constructor(
    livro: livro,
    preco: number,
    vendedor: string,
    data_venda: string,
    qtd: number
  ) {
    this.livro = livro;
    this.preco = preco;
    this.vendedor = vendedor;
    this.data_venda = data_venda;
    this.qtd = qtd;
    this.precoUnitario = this.calcularPrecoUnitario();
    this.livro.qtdEstoque += qtd;
  }
  // Calcula o preço de um unico livro.
  calcularPrecoUnitario() {
    return this.preco / this.qtd;
  }
  // imprime detalhes da compra.
  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Livro: ${this.livro.titulo}`);
    console.log(`Preço Total: R$ ${this.preco.toFixed(2)}`);
    console.log(`Vendedor: ${this.vendedor}`);
    console.log(`Data da Venda: ${this.data_venda}`);
    console.log(`Quantidade: ${this.qtd}`);
    console.log(`Preço Unitário: R$ ${this.precoUnitario.toFixed(2)}`);
    console.log("---------------------");
  }
}

module.exports = compra;
