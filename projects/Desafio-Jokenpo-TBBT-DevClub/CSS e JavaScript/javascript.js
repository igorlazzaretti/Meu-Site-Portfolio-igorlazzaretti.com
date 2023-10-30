const humanScorePoint = document.querySelector("#span-player-score");
const sheldonScorePoint = document.querySelector("#span-sheldon-score");
const drawScorePoint = document.querySelector("#span-draw-score");

let humanScoreNumber = 0;
let sheldonScoreNumber = 0;
let drawScoreNumber = 0;

const humanPlay = (humanChoice) => {
  whoWin(humanChoice, sheldonPlay());
};

const sheldonPlay = () => {
  var varOptions = ["rock", "paper", "scissor", "lizard", "spock"];

  const varRandom = Math.floor(Math.random() * 5);

  return varOptions[varRandom];
};

const whoWin = (playerValue, sheldonValue) => {
  console.log("humano:" + playerValue + "sheldon:" + sheldonValue);

  // Rock
  if (playerValue == "rock" && sheldonValue == "rock") {
    document.querySelector("#pResult").innerHTML =
      "Este Jogo Empatou.<br> Apesar das Estatísticas Calculadas para Diminuir a Probabildiade de Empate.<br> Ambos Escolheram Pedra.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoEmpate.PNG";
    drawScoreNumber++;
    drawScorePoint.innerHTML = drawScoreNumber;
  } else if (playerValue == "rock" && sheldonValue == "paper") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> Sua Pedra foi Coberta pelo Papel. Você perdeu!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  } else if (playerValue == "rock" && sheldonValue == "scissor") {
    document.querySelector("#pResult").innerHTML =
      "Ponto pra Você!<br> Sua Pedra Quebrou a Tesoura. Você venceu! <br>Continue jogando antes que o Sheldon fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  } else if (playerValue == "rock" && sheldonValue == "lizard") {
    document.querySelector("#pResult").innerHTML =
      "Ponto pra Você!<br> Sua Pedra Esmagou o Lagarto. Você venceu! <br>Continue jogando antes que o Sheldon fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  } else if (playerValue == "rock" && sheldonValue == "spock") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> Sua Pedra foi Vaporizada pelo Spock. <br>Você perdeu!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  }
  // Papel
  else if (playerValue == "paper" && sheldonValue == "paper") {
    document.querySelector("#pResult").innerHTML =
      "Este Jogo Empatou.<br> Apesar das Estatísticas Calculadas para Diminuir a Probabildiade de Empate.<br> Você e Sheldon Escolheram Papel.";
    document.querySelector("#img").src = "../Fotos-e-Videos//fotoEmpate.PNG";
    drawScoreNumber++;
    drawScorePoint.innerHTML = drawScoreNumber;
  } else if (playerValue == "paper" && sheldonValue == "rock") {
    document.querySelector("#pResult").innerHTML =
      "Ponto pra Você!<br> Seu Papel Envolveu a Pedra. Você venceu!<br> Continue jogando antes que o Sheldon fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  } else if (playerValue == "paper" && sheldonValue == "scissor") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> Seu Papel foi cortado pela Tesoura. Você perdeu!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  } else if (playerValue == "paper" && sheldonValue == "lizard") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> Sua Papel foi Comido Pelo Lagarto. Você perdeu!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  } else if (playerValue == "paper" && sheldonValue == "spock") {
    document.querySelector("#pResult").innerHTML =
      "Ponto pra Você!<br> Seu Papel Refutou o Spock. Você venceu! <br>Continue jogando antes que o Sheldon fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  }
  // Tesoura = Scissor
  else if (playerValue == "scissor" && sheldonValue == "scissor") {
    document.querySelector("#pResult").innerHTML =
      "Este Jogo Empatou.<br> Apesar das Estatísticas Calculadas para Diminuir a Probabildiade de Empate.<br> Os Dois Escolheram Tesoura.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoEmpate.PNG";
    drawScoreNumber++;
    drawScorePoint.innerHTML = drawScoreNumber;
  } else if (playerValue == "scissor" && sheldonValue == "rock") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> Sua Tesoura foi Quebrada pela Pedra. Você perdeu!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  } else if (playerValue == "scissor" && sheldonValue == "paper") {
    document.querySelector("#pResult").innerHTML =
      "Ponto pra Você!<br> Sua Tesoura Cortou o Papel. Você venceu!<br> Continue jogando antes que o Sheldon fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  } else if (playerValue == "scissor" && sheldonValue == "lizard") {
    document.querySelector("#pResult").innerHTML =
      "Espero que a Penny não veja isso!<br> Sua Tesoura Decapitou o Lagarto. Você venceu! Continue jogando antes que o Sheldon fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  } else if (playerValue == "scissor" && sheldonValue == "spock") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> O Spock Quebrou a Pedra!!! Sheldon Venceu!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  }
  //Lizard = Lagarto
  else if (playerValue == "lizard" && sheldonValue == "lizard") {
    document.querySelector("#pResult").innerHTML =
      "Empatou!<br> Apesar das Estatísticas Calculadas para Diminuir a Probabildiade de Empate.<br> Os Dois Escolheram Lagarto.";
    document.querySelector("#img").src = "../Fotos-e-Videos//fotoEmpate.PNG";
    drawScoreNumber++;
    drawScorePoint.innerHTML = drawScoreNumber;
  } else if (playerValue == "lizard" && sheldonValue == "rock") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> Seu Lagarto foi Esmagado pela Pedra!!! Você Perdeu!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  } else if (playerValue == "lizard" && sheldonValue == "paper") {
    document.querySelector("#pResult").innerHTML =
      "Ponto pra Você!<br> Seu Lagarto Comeu o Papel do Sheldon. Você venceu!<br> Continue jogando antes que o Sheldon fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  } else if (playerValue == "lizard" && sheldonValue == "scissor") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> Seu Lagarto foi Decapitado pela Tesoura!!! Espero que a Luisa Mel não Fique Sabendo!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  } else if (playerValue == "lizard" && sheldonValue == "spock") {
    document.querySelector("#pResult").innerHTML =
      "Ponto pra Você!<br> Seu Lagarto Envenenou o Spock. <br> Você venceu! Continue jogando antes que o Sheldon fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  }
  //Spock = Senhor Spock
  else if (playerValue == "spock" && sheldonValue == "spock") {
    document.querySelector("#pResult").innerHTML =
      "Saudações Vulcanas!<br> Apesar das Estatísticas Calculadas para Diminuir a Probabildiade de Empate.<br> Os Dois Escolheram Spock.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoEmpate.PNG";
    drawScoreNumber++;
    drawScorePoint.innerHTML = drawScoreNumber;
  } else if (playerValue == "spock" && sheldonValue == "rock") {
    document.querySelector("#pResult").innerHTML =
      "Ponto pra Você!<br> Seu Spock Vaporizou a Pedra do Sheldon.<br> Você venceu! <br> Continue jogando antes que Shelly fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  } else if (playerValue == "spock" && sheldonValue == "paper") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> Seu Spock foi Refutado pelo Papel. Você perdeu!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  } else if (playerValue == "spock" && sheldonValue == "scissor") {
    document.querySelector("#pResult").innerHTML =
      "Ponto pra Você!<br> Seu Spock Vaporizou a Pedra do Sheldon. Você venceu! Continue jogando antes que Shelly fique triste, abandone a Teoria das Cordas e adote 12 gatos.";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoGatos.PNG";
    humanScoreNumber++;
    humanScorePoint.innerHTML = humanScoreNumber;
  } else if (playerValue == "spock" && sheldonValue == "lizard") {
    document.querySelector("#pResult").innerHTML =
      "BAZINGA!<br> Seu Spock foi Envenenado Lagarto. Você perdeu!";
    document.querySelector("#img").src = "../Fotos-e-Videos/fotoBazinga.PNG";
    sheldonScoreNumber++;
    sheldonScorePoint.innerHTML = sheldonScoreNumber;
  }
};
