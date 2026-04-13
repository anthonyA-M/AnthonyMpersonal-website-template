// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Display greeting on page load
const greeting = document.getElementById("greeting");
greeting.textContent = "Hello, World!";

// Button click: cycle through greeting messages
const greetBtn = document.getElementById("greet-btn");
const messages = [
  "Hello, World!",
  "Welcome to my site!",
  "Let's build something great!",
];
let messageIndex = 0;

greetBtn.addEventListener("click", function () {
  messageIndex = (messageIndex + 1) % messages.length;
  greeting.textContent = messages[messageIndex];
});
