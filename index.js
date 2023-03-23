const randomQuoteButton = document.getElementById("random-quote-button");
const quotesEl = document.getElementById("quote");
const advideID = document.getElementById("advide-id");

async function getData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    quotesEl.innerText = data.slip.advice;
    advideID.innerText = data.slip.id;   
} 
randomQuoteButton.addEventListener("click", () => {
    getData();
})