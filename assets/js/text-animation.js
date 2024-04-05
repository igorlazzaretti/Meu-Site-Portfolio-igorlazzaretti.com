const targetElement = document.getElementById("text");
const texts = [
        "Olá! Eu sou Igor",
        "Hello! I am Igor",
        "Hola! Soy Igor",
        "Ciao! Sono Igor",
    ];

let textConfirm = false;
let index = countIndex = waitTime = 0;
targetElement.textContent = "|";
setInterval(function(){
    let countText = texts[index];

    if(textConfirm == false){

        targetElement.textContent = targetElement.textContent.replace("|","");
        targetElement.innerHTML += texts[index][countIndex] +"|";
        countIndex++;

        if(countIndex == countText.length){

            textConfirm = true;
            countIndex = 0;
            index++;

        }

    }

    if(textConfirm == true){
        waitTime++;
        if(waitTime == 10){
            textConfirm = false;
            targetElement.innerHTML="";
            waitTime = 0;
        }
    }

    if(index>=3){
        index = 0;
    }
},100);