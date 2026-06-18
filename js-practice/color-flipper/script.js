const colors = ["#FF0000", "#008000", "#0000FF", "#800080", "#A52A2A"];

const body = document.body;
const genButton = document.getElementById("btn-generate");

genButton.addEventListener("click", function()
{
    const randomIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomIndex];
})