// Fora do evento
const searchInput = document.getElementById('movie-search') as HTMLInputElement;
const resultContainer = document.getElementById('result-container') as HTMLDivElement;

// O evento que "escuta" a digitação
searchInput.addEventListener('input', () => {
    // TUDO que acontece quando digita tem que estar aqui dentro!
    resultContainer.innerHTML = `
        <div class="movie-card">
            <h3>${searchInput.value}</h3>
            <p>🎬 Categoria: Cinema</p>
        </div>
    `;
});