function enviarFormulario() {
  console.log("oi");
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  console.log(mensagem, email, nome);

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const dados = {
    nome: nome,
    email: email,
    mensagem: mensagem,
  };

  // Armazena os dados no localStorage
  alert("Formulário enviado com sucesso!");
  localStorage.setItem("dadosFormulario", JSON.stringify(dados));

  // Resetar os campos do formulário
  document.getElementById("myForm").reset();
}
