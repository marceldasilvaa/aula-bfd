const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const nome = formData.get("nome").trim();
  const idade = formData.get("idade").trim();
  const especie = formData.get("especie").trim();
  const raca = formData.get("raca").trim();
  const dono = formData.get("dono").trim();

  const exibir = document.createElement("div");
  const titulo = document.createElement("h1");
  const exibeNome = document.createElement("p");
  const exibeIdade = document.createElement("p");
  const exibeEspecie = document.createElement("p");
  const exibeRaca = document.createElement("p");
  const exibeDono = document.createElement("p");

  exibir.classList.add("exibir");

  titulo.textContent = "Cadastro do seu pet";
  exibeNome.textContent = `Nome do pet: ${nome}.`;
  exibeIdade.textContent = `Idade do pet: ${idade} anos.`;
  exibeEspecie.textContent = `Espécie do pet: ${especie}.`;
  exibeRaca.textContent = `Raça do pet: ${raca}.`;
  exibeDono.textContent = `Responsável pelo pet: ${dono}.`;

  document.body.appendChild(exibir);
  exibir.appendChild(titulo);
  exibir.appendChild(exibeNome);
  exibir.appendChild(exibeIdade);
  exibir.appendChild(exibeEspecie);
  exibir.appendChild(exibeRaca);
  exibir.appendChild(exibeDono);
});
