const nome = "Marcel";
console.log(
  `Meu nome é ${nome}. Este nome tem ${nome.length} número de letras.`
);

function umaLetraDeVez(palavra) {
  for (let letra = 0; letra < palavra.length; letra++) {
    console.log(palavra[letra]);
  }
}

umaLetraDeVez(nome);
