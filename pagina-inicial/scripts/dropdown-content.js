// Seleciona todos os botões de toggle e os elementos de conteúdo
const googleLabel = document.querySelector(".dropdown-google");
const googleContent1 = document.querySelector(".dropdown-google-content-1");
const googleContent2 = document.querySelector(".dropdown-google-content-2");

googleContent1.style.display = "none";
googleContent2.style.display = "none";

// Adiciona um evento de clique
googleLabel.addEventListener("click", () => {
  console.log('clicou')
    if (googleContent1.style.display == "none") {
      googleContent1.style.display = "block";
    } else {
      googleContent1.style.display = "none";
    }
    if (googleContent2.style.display == "none") {
      googleContent2.style.display = "block";
    } else {
      googleContent2.style.display = "none";
    }
});
