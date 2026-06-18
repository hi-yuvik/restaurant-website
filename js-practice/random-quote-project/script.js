const quotes = [
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },

    {
        quote: "Knowledge is power.",
        author: "Francis Bacon"
    },

    {
        quote: "Never stop learning.",
        author: "Unknown"
    }]; // Save Quotes in Array

const quoteText = document.getElementById("quote-text"); // used quoteText variable to find quote-text id in html to map with JS

const authorName = document.getElementById("author-name"); // used authorName variable to find author-name id in html to map with JS

const generateButton = document.getElementById("btn-generate"); // used generateButton varirable to find btn-generate id in html to map with JS

generateButton.addEventListener("click", function() // TO listen click event
{
    const randomIndex = Math.floor(Math.random() * quotes.length); // Math floor so that the number becomes 1-2 instead 2-3 as length starts from 1 and index from 0
    const randomQuote = quotes[randomIndex]; // randomQuote stroes the object key value pair

    quoteText.textContent = randomQuote.quote; 
    authorName.textContent = randomQuote.author;
});

