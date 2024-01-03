//https://api.quotable.io/random

const button = document.querySelector('#button');

button.addEventListener('click', getQuote)

async function getQuote(){
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json();
    const result = data.content
    const author = data.author
    document.getElementById('content').innerHTML = result;
    document.getElementById('author').innerHTML = author;
}
getQuote()