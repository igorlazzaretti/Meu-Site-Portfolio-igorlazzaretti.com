

/*  
function cliquei() {
    pum.innerText = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(digitadonoinput.value)
    
    if (mudouB.value == "doleta") {
        pdois.innerText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(digitadonoinput.value / dolarHoje)
    }
    if (mudouB.value == "euro") {
        pdois.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(digitadonoinput.value / euroHoje)
    }
    if (mudouB.value == "bitcoin") {
        pdois.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(digitadonoinput.value / bitcoinHoje)
    }
    if (mudouB.value == "real") {
        pdois.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(digitadonoinput.value)
    } 
}


function selecioneiB() {
    if (mudouB.value == "doleta"){
        nomedamoedaB.innerText = "Dólar Americano";
     mudasegband.setAttribute("src", "./assets/setinha.png");
     pdois.innerText = "Clique Converter";
    }
    if (mudouB.value == "bitcoin"){
        nomedamoedaB.innerText = "Bitcoin";
        mudasegband.setAttribute("src", "./assets/setinha.png");
    pdois.innerText = "Clique Converter";
    }
    if (mudouB.value == "euro")
    mudasegband.src = "./"
        nomedamoedaB.innerText = "Euro"
    pdois.innerText = "Clique Converter"

    if (mudouB.value == "real")
        nomedamoedaB.innerText = "Real"
    mudasegband.src = ""
    pdois.innerText = "Clique Converter"

    if (mudouB.value == "libra")
        nomedamoedaB.innerText = "Libra Esterlina"
        mudasegband.src = ""
    pdois.innerText = "Clique Converter"
}


//MINHASSS CONSTANTANTESSssssssssdsdsdsdsdsd

//Valor das Moedas
const bitcoinHoje = 125001.67
const libraHoje = 6.13
const euroHoje = 5.24
const dolarHoje = 4.92

// Funcao Selecionei 1o Selec
//const mudoua = document.querySelector("#selecaoA")
//mudoua.addEventListener("change", selecioneiA)

//Funcao Selecionei 2o Selec
const mudouB = document.getElementById("selecaoB")
mudouB.addEventListener("change", selecioneiB)

// Busca Nome p da Moeda Convertida  
const nomedamoedaB = document.querySelector(".Nome-da-MoedaB")
const nomedamoedaA = document.querySelector(".Nome-da-MoedaA")

//Mudando Bandeira
const mudasegband = document.getElementById("bandeiradois")
const mudapriband = document.querySelector(".bandeira")
//Busca
const pum = document.querySelector("#pum")
const pdois = document.querySelector("#pdois")
const digitadonoinput = document.querySelector(".digitado")

//Cliquei
const varbotaoConverter = document.querySelector("button")
varbotaoConverter.addEventListener("click", cliquei){
console.log("cliquei")}
*/