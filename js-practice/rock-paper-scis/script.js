const rps = ["rock", "paper", "scissor"];

const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorButton = document.getElementById("scissor-btn");
const compButton = document.getElementById("computer-btn");
const resultButton = document.getElementById("result-btn");

rockButton.addEventListener("click", function()
{
    playerChoice.textContent = "rock";
})
paperButton.addEventListener("click", function()
{
    playerChoice.textContent = "paper";
})
scissorButton.addEventListener("click", function()
{
    playerChoice.textContent = "scissor";
})


compButton.addEventListener("click", function()
{
    const randomIndex = Math.floor(Math.random() * rps.length);
    const compChoice = rps[randomIndex];


})