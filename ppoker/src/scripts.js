// Elementos do DOM
const homeScreen = document.querySelector('.home-screen');
const planningScreen = document.querySelector('.planning-screen');
const valueButtons = document.querySelectorAll('.value-button');
const numberButtons = document.querySelectorAll('.value-button.number');
const symbolButtons = document.querySelectorAll('.value-button.symbol');
const goToPlanningBtn = document.getElementById('goToPlanning');
const hourDisplay = document.getElementById('hourDisplay');
const showButton = document.getElementById('showButton');
const backButton = document.getElementById('backButton');
const totalDisplay = document.getElementById('totalDisplay');
const clearButton = document.getElementById('clearSelection');

let selectedValues = [];
let selectedSymbol = null;
let total = 0;

// Função para atualizar o display de total
function updateTotal() {
    if (selectedSymbol) {
        totalDisplay.textContent = `Valor: ${selectedSymbol}`;
        goToPlanningBtn.disabled = false;
        return;
    }

    total = 0;
    selectedValues.forEach(value => {
        total += parseFloat(value);
    });

    totalDisplay.textContent = `Total: ${total}`;
    goToPlanningBtn.disabled = (total === 0);
}

// Adicionar eventos aos botões numéricos
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Se um símbolo estiver selecionado, limpe-o primeiro
        if (selectedSymbol) {
            symbolButtons.forEach(btn => btn.classList.remove('selected'));
            selectedSymbol = null;
        }

        const value = button.getAttribute('data-value');
        const index = selectedValues.indexOf(value);

        if (index === -1) {
            // Adicionar valor à seleção
            selectedValues.push(value);
            button.classList.add('selected');
        } else {
            // Remover valor da seleção
            selectedValues.splice(index, 1);
            button.classList.remove('selected');
        }

        updateTotal();
    });
});

// Adicionar eventos aos botões de símbolo
symbolButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Limpar todas seleções anteriores (números e símbolos)
        valueButtons.forEach(btn => btn.classList.remove('selected'));
        selectedValues = [];

        // Selecionar apenas este símbolo
        button.classList.add('selected');
        selectedSymbol = button.getAttribute('data-value');

        updateTotal();
    });
});

// Botão para limpar seleção
clearButton.addEventListener('click', () => {
    valueButtons.forEach(btn => btn.classList.remove('selected'));
    selectedValues = [];
    selectedSymbol = null;
    updateTotal();
});

// Navegação para a tela de planning
goToPlanningBtn.addEventListener('click', () => {
    // Salvar o valor e mudar para a tela de planning
    if (selectedSymbol) {
        hourDisplay.textContent = selectedSymbol;
    } else {
        hourDisplay.textContent = total;
    }

    homeScreen.style.display = 'none';
    planningScreen.style.display = 'block';
});

// Botão para mostrar o valor
showButton.addEventListener('click', () => {
    hourDisplay.classList.add('revealed');
});

// Botão para voltar à tela inicial
backButton.addEventListener('click', () => {
    // Resetar estado e voltar para home
    hourDisplay.classList.remove('revealed');
    planningScreen.style.display = 'none';
    homeScreen.style.display = 'block';
});

// Seleciona o botão e adiciona o evento de clique
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    const body = document.body;
    const button = this;

    // Alterna a classe dark-mode no body
    body.classList.toggle('dark-mode');

    // Atualiza o emoji no botão
    if (body.classList.contains('dark-mode')) {
        button.textContent = '🦸'; // Sol para modo escuro
    } else {
        button.textContent = '🦇'; // Lua para modo claro
    }
});
