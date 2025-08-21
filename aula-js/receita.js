const adaptarIngredientes = (porcoes, pap) => {
  // ingredientes para pudim
  const leite = 1;
  const leiteNinho = 1;
  const ovos = 3;

  // exibindo
  const servir = `Receita de pudim para servir ${porcoes} alienígenas.`;
  const servirLeites = `Para servir ${porcoes} alienígenas, precisa de ${
    leite * porcoes
  } leites.`;
  const servirLeitesNinho = `Para servir ${porcoes} alienígenas, precisa de ${
    leiteNinho * porcoes
  } leites ninho.`;
  const servirOvos = `Para servir ${porcoes} alienígenas, precisa de ${
    ovos * porcoes
  } ovos.`;

  return traduzirParaAlien([
    pap,
    servir,
    servirLeites,
    servirLeitesNinho,
    servirOvos,
  ]);

  // console.log(servir.replaceAll(/a|e/g, "u"));

  // console.log(servirLeites.replaceAll(/a|e/g, "u"));

  // console.log(servirLeitesNinho.replaceAll(/a|e/g, "u"));

  // console.log(servirOvos.replaceAll(/a|e/g, "u"));

  // const pap = imprimirPassoAPasso();
  // console.log(pap.replaceAll(/a|e/g, "u"));
};

const imprimirPassoAPasso = () => {
  // mostrando passo a passo
  const receita = `1. bata bem os ovos no liquidificador.\n2. Acrescente o leite condensado e o leite, e bata novamente. \n3. Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar. \n4. Coloque em uma forma redonda e despeje a massa do pudim por cima. \n5. Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água. \n6. Espete um garfo para ver se está bem assado. \n7. Deixe esfriar e desenforme.`;
  return adaptarIngredientes(10, receita);
};

const traduzirParaAlien = (texto) => {
  const exibir = texto;

  exibir.forEach((prato) => {
    return console.log(prato.replaceAll(/a|e|A|á/g, "u").toUpperCase());
  });
};

imprimirPassoAPasso();
