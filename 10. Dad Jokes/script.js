const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('joke-btn');

getJoke();
btn.addEventListener('click', () => getJoke())

async function  getJoke() {
    const headers = [
        ['Accept', 'application/json'],
      ];
    const response = await fetch('https://icanhazdadjoke.com/', { headers });
    const data = await response.json();
    jokeContainer.innerHTML = data.joke;
}