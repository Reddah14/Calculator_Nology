"use strict";

var number_A = null;
var number_B = null;
var result = null;
var operation = null;
var displayScreen = document.querySelector("#output-screen");
/* numbers */

var button_Zero = document.querySelector("#zero-btn");
var button_One = document.querySelector("#one-btn");
var button_Two = document.querySelector("#two-btn");
var button_Three = document.querySelector("#three-btn");
var button_Four = document.querySelector("#four-btn");
var button_Five = document.querySelector("#five-btn");
var button_Six = document.querySelector("#six-btn");
var button_Seven = document.querySelector("#seven-btn");
var button_Eight = document.querySelector("#eight-btn");
var button_Nine = document.querySelector("#nine-btn");
/* operations */

var button_Sum = document.querySelector("#plus-btn");
var button_Minus = document.querySelector("#minus-btn");
var button_Multiply = document.querySelector("#multiply-btn");
var button_Divide = document.querySelector("#divide-btn");
/* others */

var button_Equal = document.querySelector("#equal-btn");
var button_Clear = document.querySelector("#clear-btn");
var button_Comma = document.querySelector("#comma-btn");
var button_toNegative = document.querySelector("#to-negative-btn");
var button_deleteOneChar = document.querySelector("#delete-one-character");
/* others event listeners */

button_Equal.addEventListener("click", function (event) {
  // number_A -> MUST have value before pressing equal Btn
  if (number_A === null) {
    displayScreen.value = "3RR😵R";
  } else if (number_A) {
    var decimalValue = null; // setting number_B

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
      var resultToFormat = result.toString();
      var toReplace = ".";
      var toAdd = ",";
      var formattedResult = resultToFormat.replace(toReplace, toAdd);
      displayScreen.value = formattedResult;
    } else {
      displayScreen.value = result;
    }

    number_A = result;
    number_B = null;
    operation = null;
  } else if (operation === "minus") {
    result = number_A - number_B;
    displayScreen.value = result;
    number_A = result;
    number_B = null;
    operation = null;
  } else if (operation === "multiply") {
    result = number_A * number_B;
    displayScreen.value = result;
    number_A = result;
    number_B = null;
    operation = null;
  } else if (operation === "divide") {
    result = number_A / number_B;
    displayScreen.value = result;
    number_A = result;
    number_B = null;
    operation = null;
  } else {
    displayScreen.value = "3RR😵R";
  }
});
button_Clear.addEventListener("click", function (event) {
  displayScreen.value = null;
  number_A = null;
  number_B = null;
  operation = null;
  result = null;
});
button_Comma.addEventListener("click", function (event) {
  var decimalSymbol = ",";
  displayScreen.value += decimalSymbol;
});
button_toNegative.addEventListener("click", function (event) {
  displayScreen.value = -displayScreen.value;
});
button_deleteOneChar.addEventListener("click", function (event) {
  var stringToDeleteOneChar = displayScreen.value.toString();
  var deletedString = stringToDeleteOneChar.slice(0, -1);
  displayScreen.value = parseFloat(deletedString);
});
/* event listeners for operations */

button_Sum.addEventListener("click", function (event) {
  var decimalValue = null;

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
button_Minus.addEventListener("click", function (event) {
  number_A = parseFloat(displayScreen.value);
  displayScreen.value = "-";
  operation = "minus";
});
button_Multiply.addEventListener("click", function (event) {
  number_A = parseFloat(displayScreen.value);
  displayScreen.value = "x";
  operation = "multiply";
});
button_Divide.addEventListener("click", function (event) {
  number_A = parseFloat(displayScreen.value);
  displayScreen.value = "/";
  operation = "divide";
});
/* event listeners for numbers */

button_Zero.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 0;
});
button_One.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 1;
});
button_Two.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 2;
});
button_Three.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 3;
});
button_Four.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 4;
});
button_Five.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 5;
});
button_Six.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 6;
});
button_Seven.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 7;
});
button_Eight.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 8;
});
button_Nine.addEventListener("click", function (event) {
  if (displayScreen.value === "+" || displayScreen.value === "-" || displayScreen.value === "x" || displayScreen.value === "/") {
    displayScreen.value = null;
  }

  displayScreen.value += 9;
});