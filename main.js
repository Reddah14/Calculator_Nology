let number_A = null;
let number_B = null;
let result = null;
let operation = null;

const displayScreen = document.querySelector("#output-screen");

/* numbers */
const button_Zero = document.querySelector("#zero-btn");
const button_One = document.querySelector("#one-btn");
const button_Two = document.querySelector("#two-btn");
const button_Three = document.querySelector("#three-btn");
const button_Four = document.querySelector("#four-btn");
const button_Five = document.querySelector("#five-btn");
const button_Six = document.querySelector("#six-btn");
const button_Seven = document.querySelector("#seven-btn");
const button_Eight = document.querySelector("#eight-btn");
const button_Nine = document.querySelector("#nine-btn");

/* operations */
const button_Sum = document.querySelector("#plus-btn");
const button_Minus = document.querySelector("#minus-btn");
const button_Multiply = document.querySelector("#multiply-btn");
const button_Divide = document.querySelector("#divide-btn");

/* others */
const button_Equal = document.querySelector("#equal-btn");
const button_Clear = document.querySelector("#clear-btn");
const button_Comma = document.querySelector("#comma-btn");
const button_toNegative = document.querySelector("#to-negative-btn");
const button_deleteOneChar = document.querySelector("#delete-one-character");

/* others event listeners */
button_Equal.addEventListener("click", event => {
    // number_A -> MUST have value before pressing equal Btn
  if (number_A === null) {
    displayScreen.value = "3RR😵R"    
  } else if (number_A) {
    let decimalValue = null;
    // setting number_B
    if (displayScreen.value.indexOf(",") !== -1) {
      decimalValue = displayScreen.value.replace(",", ".");
      number_B = parseFloat(decimalValue);
    } else {
      number_B = parseFloat(displayScreen.value);
    }
  }

  if (operation === "sum") {
    result = number_A + number_B;

    if (result.toString().indexOf(".") !== -1) {
      let resultToFormat = result.toString();
      const toReplace = ".";
      const toAdd = ",";
      let formattedResult = resultToFormat.replace(toReplace, toAdd);
      displayScreen.value = formattedResult;
    } else {
      displayScreen.value = result;
    }
    number_A = result;
    number_B = null;
    operation = null;
  } else if ( operation === "minus") {
    result = number_A - number_B;
    displayScreen.value = result;
    
    number_A = result;
    number_B = null;    
    operation = null;
  } else if ( operation === "multiply") {
    result = number_A * number_B;
    displayScreen.value = result;
    number_A = result;
    number_B = null;    
    operation = null;
  } else if ( operation === "divide") {
    result = number_A / number_B;
    displayScreen.value = result;
    number_A = result;
    number_B = null;        
    operation = null;
  } else {
    displayScreen.value = "3RR😵R"    
  }
});

button_Clear.addEventListener("click", event => {
  displayScreen.value = null;
  number_A = null;
  number_B = null;
  operation = null;
  result = null;
});

button_Comma.addEventListener("click", event => {
  const decimalSymbol = ",";

  displayScreen.value += decimalSymbol;
});

button_toNegative.addEventListener("click", event => {
  displayScreen.value = - displayScreen.value;
});

button_deleteOneChar.addEventListener("click", event => {
  let stringToDeleteOneChar = displayScreen.value.toString();
  let deletedString = stringToDeleteOneChar.slice(0,-1);

  displayScreen.value = parseFloat(deletedString);
});

/* event listeners for operations */
button_Sum.addEventListener("click", event => {
  let decimalValue = null;

  if (displayScreen.value.indexOf(",") !== -1) {
    decimalValue = displayScreen.value.replace(",", ".");
    number_A = parseFloat(decimalValue);
    displayScreen.value = "+";
    operation = "sum";
  } else {
    number_A = parseFloat(displayScreen.value);
    displayScreen.value = "+";
    operation = "sum";
  }

});

button_Minus.addEventListener("click", event => {
  number_A = parseFloat(displayScreen.value);
  displayScreen.value = "-";
  operation = "minus";
});

button_Multiply.addEventListener("click", event => {
  number_A = parseFloat(displayScreen.value);
  displayScreen.value = "x";
  operation = "multiply";
});

button_Divide.addEventListener("click", event => {
  number_A = parseFloat(displayScreen.value);
  displayScreen.value = "/";
  operation = "divide";
});

/* event listeners for numbers */
button_Zero.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }  
  displayScreen.value += 0;
});

button_One.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }
  displayScreen.value += 1;
});

button_Two.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }  
  displayScreen.value += 2;
});

button_Three.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }  
  displayScreen.value += 3;
});

button_Four.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }  
  displayScreen.value += 4;
});

button_Five.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }  
  displayScreen.value += 5;
});

button_Six.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }  
  displayScreen.value += 6;
});

button_Seven.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }  
  displayScreen.value += 7;
});

button_Eight.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }  
  displayScreen.value += 8;
});

button_Nine.addEventListener("click", event => {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/" ) {
    displayScreen.value = null;
  }  
  displayScreen.value += 9;
});