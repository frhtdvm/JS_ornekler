/* //take the input from user
const num1 = prompt("Enter the first Number = ");

const result = Math.sqrt(num1);
console.log(`the result form the ${num1} is `, result);5
*/

//eger positiv bir numara Math.sqrt() gelirse islem görür
const num1 = 2.25;
//eger negativ ve string bir deger Math.sqrt() gelirse NoN dir
const num2 = -9;
const num3 = "Hello";

const result1 = Math.sqrt(num1);
const result2 = Math.sqrt(num2);
const result3 = Math.sqrt(num3);

console.log("The results is= ", result1, result2, result3);
