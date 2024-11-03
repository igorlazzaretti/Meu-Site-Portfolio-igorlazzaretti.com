// Loading
var i = setInterval(function () {
    clearInterval(i);

    // Dom
    document.querySelector(".loader").style.display = "none";
    document.getElementById("content").style.display = "";

}, 2000);

/**
 *  Como Implentar a Loading?
 *
 * Dentro do Body duas divs
 *  class loader
 *  id content => para o seu conteúdo
 *
 */