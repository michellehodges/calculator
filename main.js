WITHIN function calculator()

1. Need to assign actual values to the buttons.
2. When you click the buttons, those values need to be printed out to results.
3. When you click a number, then that value gets assigned to a temporary variable "unaryConversionVar".
4. When you click another number, then that value should get concatenated to the unaryConversionVar value.
3. When you click a PEMDAS button,
  I. A function "unaryConversion" runs that sets the unary operator to convert that string in said variable into a number, and keeps it in that variable.
  II. After the function runs, assign the value of the PEMDAS button to the variable. (Ask Luke is this is possible)
4. If you click another number, unaryConversion will get reassigned to that string value.
5. If you click another number, then that value will get concatenated with unaryConversion.
6. When you click the EQUALS button,
  I. The function unaryConversion will run.
  II. The new variable "total" will store the values of the number (PEMDAS) number
  III. Print value of total to the screen.


function printToResults();


let num1 = 34;
let num2 =
let operator = '+'