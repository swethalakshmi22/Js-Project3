//Random Quote Generator using Immediately Invoked Function Expression

( function() {
   const quotes = [
   {quote :"Every next level of your life will demand a different you.",
   author: "Carl Jung"},
   {quote :"We know what we are, but know not what we may be.",
   author: "Stephen King"},
   {quote :"Learn to be calm and you will always be happy.",
   author:  "Oscar Wilde"},
   {quote :"It will be the toughest thing you’ll ever do, but your heart is never wrong.",
   author: "Mark Twain"},
   {quote : "Live your beliefs and you can turn the world around.",
   author: "Samuel Beckett"},
   {quote : "The Way Get Started Is To Quit Talking And Begin Doing.",
   author: "Walt Disney"},
   {quote : "Don’t Let Yesterday Take Up Too Much Of Today.",
   author: "Will Rogers"},
];

document.querySelector("button").addEventListener("click", function() {
   let randomNum = Math.floor(Math.random() * (quotes.length));
   document.querySelector("h3").textContent = quotes[randomNum].quote;
   document.querySelector("h5").textContent = quotes[randomNum].author;
}); 
}) ();

//Random Quote Generator using API - What Does Trump Thinks

// const quoteButton = document.querySelector('button');

// quoteButton.addEventListener('click', getQuote);

// const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

// function getQuote() {
//    fetch(endpoint)
//    .then(function (response) {
//       return response.json();
//    })
//    .then(function (data) {
//       displayQuote(data.message); 
//    })
//    .catch(function () {
//       console.log('An error has occurred');
//    });
// }

// function displayQuote(quote) {
//    document.querySelector('h3').textContent = quote;
// }