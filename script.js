const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "0";

function updateDisplay() {
  display.textContent = currentInput;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      if (currentInput === "0") currentInput = value;
      else currentInput += value;
    } 
    else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1) || "0";
    } 
    else if (value === "RESET") {
      currentInput = "0";
    } 
    else if (value === "=") {
      try {
        currentInput = currentInput.replace(/x/g, "*");
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } 
    else {
      currentInput += value;
    }

    updateDisplay();
  });
});

updateDisplay();