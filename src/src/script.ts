const searchInput = document.getElementById('movie-search') as HTMLInputElement;

searchInput.addEventListener('input', (event) => {
    console.log("You're typing", searchInput.value)
});