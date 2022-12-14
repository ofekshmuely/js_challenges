/*

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

Example

celsiusToFahrenheit(-30) returns -22;
celsiusToFahrenheit(-10) returns 14;
celsiusToFahrenheit(0) returns 32;

*/

const myCelsiusTemp = 43;

function celsiusToFahrenheit(celsius) {
return Math.round((celsius * 9) / 5 + 32);
}

const myCelsiusTempArr = [-30, 33, 3, -9, 11, 42, 23, 9, 14, 7];
const myConvertTempArr = myCelsiusTempArr.map((item) => celsiusToFahrenheit(item));

console.log(myConvertTempArr);
