const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const nome = formData.get("nome");
  const endereco = formData.get("endereco")
  const telefone = formData.get("telefone")
  const email = formData.get("email")

  alert(`Seu nome é ${nome}`);
  alert(`Seu endereco é ${endereco}`);
  alert(`Seu telefone é ${telefone}`);
  alert(`Seu email é ${email}`);
});
