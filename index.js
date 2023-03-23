const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "A ship in port is safe, but that's not what ships are built for. - Grace Hopper",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you want to go fast, go alone. If you want to go far, go together. - African Proverb",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  ];
  
  const quotesEl = document.getElementById("quote");
  const randomQuoteButton = document.getElementById("random-quote-button");
  
  randomQuoteButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quotesEl.textContent = quotes[randomIndex];
  });  