const num1: number = 10;

const calcularCubo = (a: number): number => {
  return a * a * a;
};

const primeiraOuUltimaLetra = (nome: string, arg: boolean): string => {
  if (arg === true) {
    return nome[0];
  } else {
    return nome[nome.length - 1];
  }
};

console.log(calcularCubo(num1));
console.log(primeiraOuUltimaLetra("Nome", false));
