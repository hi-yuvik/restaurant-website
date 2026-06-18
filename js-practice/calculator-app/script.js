const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const operator = document.getElementById("operator");
const calculateBtn = document.getElementById("calculate-btn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", calculateResult) // To listen the event

function calculateResult()
{
    const num1 = parseFloat(firstNumber.value); //parseFloat converts string to number, because .value always returns as a string
    const num2 = parseFloat(secondNumber.value);
    const opValue = operator.value; // Assigning numbers for calculation

if(isNaN(num1) || isNaN(num2))
{
    result.textContent = "Please Enter a valid Number";
    return
}

let answer;

if(opValue === "+")
{
    answer = num1 + num2;
}
else if(opValue === "-")
{
    answer = num1 - num2;
}
else if(opValue === "*")
{
    answer = num1 * num2;
}
else
{
    if(num2===0)
    {
        result.textContent = "Cannot divide by zero";
        return
    }
    answer = num1/num2;
}

result.textContent = `Result: ${answer}`;
}
