const modoClaroBtn = document.querySelector(".modo-claro");
const pagina = document.getElementById("pagina");
const navbar = document.querySelector(".navbar");
const footer = document.querySelector(".footer");

modoClaroBtn.addEventListener("click", () => {
  // Alterna a classe "modo-claro" na tag body
  pagina.classList.toggle("modo-claro");

  // Verifica se o modo claro está ativado
  const modoClaroAtivado = pagina.classList.contains("modo-claro");

  // Atualiza as cores com base no modo claro
  if (modoClaroAtivado) {
    // Modo claro ativado
    pagina.style.backgroundColor = "white";
    pagina.style.color = "black";

    // Atualiza as variáveis CSS para a barra de navegação
    navbar.style.backgroundColor = "var(--color-bg-secondary-day)";
    navbar.style.color = "black";

    // Atualiza as variáveis CSS para o footer
    footer.style.backgroundColor = "white"; // Define a cor de fundo do footer para branco
    footer.style.color = "black"; // Define a cor do texto do footer para preto
  } else {
    // Modo escuro ativado (cores padrão)
    pagina.style.backgroundColor = "var(--color-bg-primary)";
    pagina.style.color = "var(--text-color)";

    // Atualiza as variáveis CSS para a barra de navegação de acordo com o estilo padrão
    navbar.style.backgroundColor = "var(--color-bg-black)";
    navbar.style.color = "var(--text-color)";

    // Atualiza as variáveis CSS para o footer de acordo com o estilo padrão
    footer.style.backgroundColor = "var(--footer-bg-color)"; // Define a cor de fundo do footer de acordo com o estilo padrão
    footer.style.color = "var(--footer-text-color)"; // Define a cor do texto do footer de acordo com o estilo padrão
  }
});
