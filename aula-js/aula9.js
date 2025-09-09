// tarefa idades
const prompt = require("prompt-sync")();

let idades = [];

const calcularIdadeAjustada = (idade) => {
  const idadeVerdadeira = idade * 7;
  console.log(`Idade Ajustada: ${idadeVerdadeira}`);
};

const perguntaIdade = () => {
  for (v = 0; v < 3; v++) {
    const idade = Number(prompt("Qual a idade do seu animal? "));
    idades.push(idade);
  }
  mostrarIdadesAjustadas(idades);
};

const mostrarIdadesAjustadas = (arrIdades) => {
  arrIdades.forEach((idades, index) => {
    console.log(`\nAnimal ${index + 1}`);
    calcularIdadeAjustada(idades);
  });
};

perguntaIdade();

// tarefa palavras

const frase = String(prompt("Digite uma frase qualquer: "));

const palavraPorPalavra = (frase) => {
  console.log(frase.split(" "));
};

palavraPorPalavra(frase);

const palavraPorPalavraAoContrario = (frase) => {
  console.log(frase.split(" ").reverse());
};

palavraPorPalavraAoContrario(frase);
