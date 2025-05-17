let display = document.getElementById("display");

let append = (character) => {
  if (display.textContent === "0") {
    display.textContent = character;
  } else {
    display.textContent += character;
  }
};

let clearDisplay = () => {
  display.textContent = "0";
};

let backspace = () => {
  let current = display.textContent;
  display.textContent = current.length > 1 ? current.slice(0, -1) : "0";
}

let calculate = () => {
  try {
    display.textContent = eval(display.textContent.replace(/x/g, '*'));
  } catch (e) {
    display.textContent = "erreur";
  }
};
