// document.getElementById("fetchData").addEventListener("click", () => {
fetch("http://127.0.0.1:8000/games")
    .then((response) => response.json())
    .then((data) => {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = ""; // Clear previous results

    data.forEach((game) => {
        const card = document.createElement("div");
        card.classList.add("card-item");

        card.innerHTML = `
            <img src="${game.image}" alt="Capa Jogo ${game.name}" />
            <h3>${game.name}</h3>
            <hr>
            <p>${game.description}</p>
            <div class="price-container">
                <h2>R$ ${game.price.toFixed(2)}</h2>
            </div>
            <a href="" class="btn-card" target="_blank">Mais Informações</a>
        `;

        resultContainer.appendChild(card);
        });
    })
    .catch((error) => {
    console.error("Error:", error);
    })
