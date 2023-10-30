
document.addEventListener("DOMContentLoaded", function () {
  const naoButton = document.getElementById("nao");
  const simButton = document.getElementById("sim");

  simButton.addEventListener("click", function () {
    document.getElementById("sim").innerHTML = "Resposta Certa =D ";
    });
  naoButton.addEventListener("click", function () {
    document.getElementById("nao").innerHTML = "Resposta Errada, tente a outra!";
    });
  
// 
  const handleNao = function () {
    naoButton.style.position = "fixed";

    const randTop =
      Math.random() * (window.innerHeight - naoButton.offsetHeight);
    const randLeft =
      Math.random() * (window.innerWidth - naoButton.offsetWidth);

    naoButton.style.top = randTop + "px";
    naoButton.style.left = randLeft + "px";
  };

  naoButton.addEventListener("click", handleNao);
  naoButton.addEventListener("mouseover", handleNao);
});
