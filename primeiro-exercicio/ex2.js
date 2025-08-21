// Q2.A) Crie duas novas variavéis (sem ser constantes) com sua idade e o ano atual;
let idade = 20;
let anoAtual = new Date().getFullYear();
let anosAMais = 0;

// Q2.B) Crie uma nova função idadeEmAno(idadeAgr,anoAgr,anoDesejado), que calcula que idade você terá no anoDesejado dado
function idadeEmAno(idadeAgr, anoAgr, anoDesejado) {
  return anoDesejado - anoAgr + idadeAgr;
}

// Q2.C) Use essa função para calcular sua idade em 2030 e imprimir `Em 2030, eu terei IDADE anos.`, com a idade correta.
let idadeEm2030 = idadeEmAno(idade, anoAtual, 2030);
console.log(`Em ${2030}, eu terei ${idadeEm2030} anos.`);

/* Q2.D) Crie uma nova função chamada mostrarAnosEIdade(idadeAgr, anoAgr, anoDesejado)
        Essa função deve usar um for e a função idadeEmAno para mostrar para cada ano,
        começando em anoAgr e terminando em anoDesejado, a frase `Em ANO, eu terei IDADE anos.`,
        com a idade e o ano corretos.*/
function mostrarAnosEIdade(idadeAgr, anoAgr, anoDesejado) {
  for (let ano = anoAgr; ano <= anoDesejado; ano++) {
    let idadeDesejada = idadeEmAno(idadeAgr, anoAgr, ano);
    console.log(`Em ${ano}, eu terei ${idadeDesejada} anos.`);
  }
}

// Q2.E) Utilize a função mostrarAnosEIdade para mostrar suas idades em todos os ano até 2035
mostrarAnosEIdade(idade, anoAtual, 2035);
