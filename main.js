///////////////////////CONSTANTS FOR PROGRAM////////////////////////////////
const arrayOfNums = document.querySelectorAll(".numbers");
const arrayOfPemdas = document.querySelectorAll(".pemdas");
const equalsButton = document.querySelector(".equals");
let temporaryNumArray = [];
let temporaryOperatorArray = [];
let parsedNum;
let equationArray = [0, ];
let equationTotal = "";

/////////////FOR ALL BUTTONS, DO THIS WHEN CLICKED///////////////////////////
for (let i = 0; i < arrayOfNums.length; i++) {
  arrayOfNums[i].addEventListener('click', function () {
      printToResults(arrayOfNums[i].value);
      moveNumsToTempArray(arrayOfNums[i].value);
  });
}

for (let i = 0; i <arrayOfPemdas.length; i++) {
  arrayOfPemdas[i].addEventListener('click', function () {
    printToResults(arrayOfPemdas[i].value);
    parseNumAndAddToEquationArray();
    assignOperator(arrayOfPemdas[i].value);
  });
}

equalsButton.addEventListener('click', function () {
  runEquation();
});

///////////////////////////FUNCTIONS HERE////////////////////////////////////
// PRINT BUTTON VALUES WHEN CLICKED
function printToResults (number) {
  let resultsBox = document.querySelector(".results");
  resultsBox.value = resultsBox.value + number;
}

// // MOVE CLICKED NUMBERS TO TEMPORARY ARRAY; TODO ERROR : i IS NOT DEFINED
function moveNumsToTempArray (arrayvalue) {
  temporaryNumArray.push(arrayvalue)
}

//WHEN ARRAY OF PEMDAS IS CLICKED 1) parseNumAndAddToEquationArray 3) assignOperator
function parseNumAndAddToEquationArray () {
  parsedNum = temporaryNumArray.join("");
  equationArray.push(parsedNum);
}

// //ASSIGN OPERATOR TO NEW variable
function assignOperator(arrayvalue) {
  equationArray.push(arrayvalue)
}

// RUN THE EQUATION OF VALUES IN resultsBox, PRINT TO resultsBox
function runEquation () {

  return `${Number(arr[0]) + parseInt(arr[1] + Number(arr[2]))}`};
  switch statement

  include possibility of 9+9+= >>> if last value is NaN, then dont push the operator and run function without last operator.
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
