///////////////////////CONSTANTS FOR PROGRAM////////////////////////////////
const arrayOfNums = document.querySelectorAll(".numbers");
const arrayOfPemdas = document.querySelectorAll(".pemdas");
const decimal = document.querySelector(".decimal")
const equalsButton = document.querySelector(".equals");
const resetButton = document.querySelector(".reset")
let temporaryNumArray = [];
let parsedNum;
let equationNumsArray = [];
let equationOperatorArray = [];
let equationTotal = "";
let newNum;

/////////////FOR ALL BUTTONS, DO THIS WHEN CLICKED///////////////////////////
for (let i = 0; i < arrayOfNums.length; i++) {
  arrayOfNums[i].addEventListener('click', function () {
    printToResults(arrayOfNums[i].value);
    moveNumsToTempArray(arrayOfNums[i].value);
  });
}

decimal.addEventListener('click', function () {
  printToResults(decimal.value);
  moveDecimalToTempArray(decimal.value);
})

for (let i = 0; i <arrayOfPemdas.length; i++) {
  arrayOfPemdas[i].addEventListener('click', function () {
    printToResults(arrayOfPemdas[i].value);
    parseNumAndAddToEquationArray();
    assignOperator(arrayOfPemdas[i].value);
  });
}

equalsButton.addEventListener('click', function () {
    document.querySelector(".results").value = "";
    parseNumAndAddToEquationArray();
    runEquation();
    printToResults(equationNumsArray[0]);
    equationNumsArray = [];
    equationOperatorArray = [];
});

resetButton.addEventListener('click', function () {
  clearValues();
})

///////////////////////////FUNCTIONS HERE////////////////////////////////////
// PRINT BUTTON VALUES WHEN CLICKED
function printToResults (number) {
  let resultsBox = document.querySelector(".results");
  resultsBox.value = resultsBox.value + number;
}

// // MOVE CLICKED NUMBERS TO TEMPORARY ARRAY;
function moveNumsToTempArray (arrayvalue) {
    temporaryNumArray.push(arrayvalue)
}

// MOVE CLICKED DECIMAL TO TEMPORARY ARRAY
function moveDecimalToTempArray (arrayvalue) {
    temporaryNumArray.push(arrayvalue);
}

//WHEN ARRAY OF PEMDAS IS CLICKED 1) parseNumAndAddToEquationArray 3) assignOperator
function parseNumAndAddToEquationArray () {
  parsedNum = temporaryNumArray.join("");
  equationNumsArray.push(parseFloat(parsedNum));
  temporaryNumArray = [];
}

// // ASSIGN OPERATOR TO EQUATION "OPERATOR" ARRAY. IF THE LAST VALUE OF EQ ARRAY IS NAN, THEN DELETE THAT LAST ELEMENT AND THEN PUSH.
function assignOperator(arrayvalue) {
  if (equationOperatorArray[equationOperatorArray.length - 1] === NaN) {
    equationOperatorArray.splice(-1, 1);
    equationOperatorArray.push(arrayvalue);
  } else {
    equationOperatorArray.push(arrayvalue);
  }
}

// RUN THE EQUATION
function runEquation() {
  for (j = 0; j < equationOperatorArray.length; j++) {
      if (equationOperatorArray[j] === "*") {
        newNum = equationNumsArray[j]*equationNumsArray[j+1]
        equationNumsArray[j] = newNum;
        equationNumsArray.splice(j+1,1);
      } else if (equationOperatorArray[j] === "/") {
        newNum = equationNumsArray[j]/equationNumsArray[j+1]
        equationNumsArray[j] = newNum;
        equationNumsArray.splice(j+1,1);
      }
  }

  for (j = 0; j < equationOperatorArray.length; j++) {
      if (equationOperatorArray[j] === "+") {
          newNum = equationNumsArray[j]+equationNumsArray[j+1]
          equationNumsArray[j] = newNum;
          equationNumsArray.splice(j+1,1);
      } else if (equationOperatorArray[j] === "-") {
        newNum = equationNumsArray[j]-equationNumsArray[j+1]
        equationNumsArray[j] = newNum;
        equationNumsArray.splice(j+1,1);
      }
    }
}


//When you click the reset button, clear all values.
function clearValues(){
  let resultsBox = document.querySelector(".results");
  resultsBox.value = "";
}

////////////////////////////////NOTES//////////////////////////////////////////

// function printToResults();
//
//
// variables for unaryConversionVars =
// let num1 = 34;
// let num2 =
// let operator = '+'


// onClick = object.addEventListener("click", function)




//WHEN ARRAY OF PEMDAS IS CLICKED 1) prepNumToBeParsed 2) parseNumAndAddToEquationArray 3) assignOperator
// function prepNumToBeParsed () {
//   numToBeParsed = temporaryNumArray.join("")
//       1) concatenate the values in the array temporaryNumArray
//       2) push that string value to the new variable numToBeParsed
// }

 // return `${Number(arr[0]) + parseInt(arr[1] + Number(arr[2]))}`};
