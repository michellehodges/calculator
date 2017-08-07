///////////////////////CONSTANTS FOR PROGRAM////////////////////////////////
const arrayOfNums = document.querySelectorAll(".numbers");
const arrayOfPemdas = document.querySelectorAll(".pemdas");
const arrayOfDecimal = document.querySelector(".decimal")
const equalsButton = document.querySelector(".equals");
let temporaryNumArray = [];
let parsedNum;
let equationNumsArray = [0, ];
let equationOperatorArray = [];
let equationTotal = "";

/////////////FOR ALL BUTTONS, DO THIS WHEN CLICKED///////////////////////////
for (let i = 0; i < arrayOfNums.length; i++) {
  arrayOfNums[i].addEventListener('click', function () {
    printToResults(arrayOfNums[i].value);
    moveNumsToTempArray(arrayOfNums[i].value);
    moveDecimalToTempArray(arrayOfDecimal[i].value);
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
    parseNumAndAddToEquationArray();
    runEquation();
    printToResults(equationTotal);
});

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
  if (temporaryNumArray[temporaryNumArray.length - 1] === ".") {
    return;
  } else {
    temporaryNumArray.push(arrayvalue)
  }
}

//WHEN ARRAY OF PEMDAS IS CLICKED 1) parseNumAndAddToEquationArray 3) assignOperator
function parseNumAndAddToEquationArray () {
  parsedNum = temporaryNumArray.join("");
  equationArray.push(parsedNum);
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

// RUN THE EQUATION, with caveats
function runEquation () {
  for (i = 0; i < equationArray.length; i++) {
    if ((equationArray[equationArray.length - 1] === NaN) || (equationArray[equationArray.length - 1] === ".")) {
      equationArray.splice(-1, 1);

    if ((equationArray[i] === NaN) || (equationArray[i] === ".")) {
      switch (x, y) {
          case x + "*" + y:
            x*y;
          case x + "/" + y:
            x/y;
      } else {
        switch (x, y) {
          case x + "+" + y:
            x+y;
          case x + "-" + y:
            x-y;
        }
      }
    }
    }
  }
}

  //So now, if I said 1 + 2 / 3, what I have is [0, 1, "+", 2, "/", 3]. I have to add all the values in that array.

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
