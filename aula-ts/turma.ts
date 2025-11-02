type Aluno = {
  nome: string;
  matricula: number;
  nota: number;
};

type Turma = {
  materia: string;
  codigo: string;
  alunos: Array<Aluno>;
};

const exAluno: Aluno = {
  nome: "Breno",
  matricula: 3812937471029,
  nota: 8,
};

const exAluno2: Aluno = {
  nome: "Amanda",
  matricula: 6276937471029,
  nota: 8,
};

const exTurma: Turma = {
  materia: "Matemática",
  codigo: "18B",
  alunos: [exAluno],
};

const imprimirPresenca = (turma: Turma) => {
  console.log(turma);
};

const matricularAluno = (turma: Turma, aluno: Aluno) => {
  turma.alunos.push(aluno);
};

const calcularMedia = (turma: Turma): number => {
  let acc = 0.0;
  turma.alunos.map((aluno) => {
    acc += aluno.nota;
  });
  return acc / turma.alunos.length;
};

matricularAluno(exTurma, exAluno2);
imprimirPresenca(exTurma);
console.log(calcularMedia(exTurma));
