// Fora do evento
var searchInput = document.getElementById('movie-search');
var resultContainer = document.getElementById('result-container');
// O evento que "escuta" a digitação
searchInput.addEventListener('input', function () {
    // TUDO que acontece quando digita tem que estar aqui dentro!
    resultContainer.innerHTML = "\n        <div class=\"movie-card\">\n            <h3>".concat(searchInput.value, "</h3>\n            <p>\uD83C\uDFAC Categoria: Cinema</p>\n        </div>\n    ");
});
