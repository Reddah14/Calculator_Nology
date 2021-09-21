const displayScreen = document.querySelector("#output-screen");

let resultOperation = 0;
let numA = 0;
let numB = 0;
let defineOperation = "";

const pressNumberBtn = (buttonNumber) => {
  if (
    displayScreen.value == "+" ||
    displayScreen.value == "-" ||
    displayScreen.value == "/" ||
    displayScreen.value == "x"
  ) {
    displayScreen.value = "";
  }
  displayScreen.value = displayScreen.value + buttonNumber;
};

const pressOperationBtn = (operation) => {
  displayScreen.value = displayScreen.value.replace(",", ".");
  numA = parseFloat(displayScreen.value);
  if (operation == "+") {
    displayScreen.value = "+";
    defineOperation = "sum";
  } else if (operation == "-") {
    displayScreen.value = "-";
    defineOperation = "minus";
  } else if (operation == "x") {
    displayScreen.value = "x";
    defineOperation = "multiply";
  } else if (operation == "/") {
    displayScreen.value = "/";
    defineOperation = "divide";
  }
};

const pressEqualBtn = () => {
  if (defineOperation == "sum") {
    displayScreen.value = displayScreen.value.replace(",", ".");
    numB = parseFloat(displayScreen.value);
    resultOperation = numA + numB;
    displayScreen.value = resultOperation;
  } else if (defineOperation == "minus") {
    displayScreen.value = displayScreen.value.replace(",", ".");
    numB = parseFloat(displayScreen.value);
    resultOperation = numA - numB;
    displayScreen.value = resultOperation;
  } else if (defineOperation == "multiply") {
    displayScreen.value = displayScreen.value.replace(",", ".");
    numB = parseFloat(displayScreen.value);
    resultOperation = numA * numB;
    displayScreen.value = resultOperation;
  } else if (defineOperation == "divide") {
    displayScreen.value = displayScreen.value.replace(",", ".");
    numB = parseFloat(displayScreen.value);
    resultOperation = numA / numB;
    displayScreen.value = resultOperation;
  }
};

const pressClearBtn = () => {
  displayScreen.value = "";
  numA = 0;
  numB = 0;
  resultOperation = 0;
};

const pressComaBtn = () => {
  if (displayScreen.value.indexOf(",") == -1) {
    displayScreen.value = displayScreen.value + ",";
  }
};