const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets Input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operator,beforeResult,userInput,finalResult) {
  const logEntry = {
    operation: operator,
    prevResult: beforeResult,
    number: userInput,
    result: finalResult
  }
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathoperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathoperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathoperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathoperator = '-';
  } else if(calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathoperator = '-';
  }

  createAndWriteOutput(mathoperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);