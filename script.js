const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => handleInput(button.dataset.value));
});

function handleInput(value) {
  if (value === "AC") {
    display.value = "";
  } 
  else if (value === "DEL") {
    display.value = display.value.slice(0, -1);
  } 
  else if (value === "=") {
    calculate();
  } 
  else {
    display.value += value;
  }
}

function calculate() {
  try {
    display.value = Function("return " + display.value)();
  } catch {
    display.value = "Error";
  }
}


document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.%".includes(key)) {
    display.value += key;
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    display.value = "";
  }
});