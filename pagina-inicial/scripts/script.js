//
/* Função para atualizar a data e o relógio*/
function atualizarDataHora() {
    const dataHora = new Date();
    const opcoesData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const data = dataHora.toLocaleDateString('pt-BR', opcoesData);
    const hora = dataHora.toLocaleTimeString('pt-BR');

    document.getElementById("data").innerHTML = data;
    document.getElementById("horario").innerHTML = hora;
}

setInterval(atualizarDataHora, 1000);
/* Fim da função */
/* Api para atuliazar o clima */
const apiKey = "4d84fbece14c50151235d310f874a9a0"; // Substitua pela sua chave da API do OpenWeatherMap
const city = "Caxias do Sul"; // Substitua pela cidade desejada

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById("temperature").textContent = `${temperature} °C`;
        document.getElementById("description").textContent = description;
        document.getElementById("weather-icon").src = iconUrl;
    })
    .catch(error => {
        console.error("Erro ao buscar dados da API:", error);
        // Exibir mensagem de erro para o usuário, se necessário
    });