/* let a = prompt ("First Number");
let b = prompt ("Second Number");

let temp = a

a = b;
b = temp;

console.log(`The value after swapping: ${a}`);
console.log(`The value after swapping: ${b}`);

 */

//destruction metotu ile a ile b nin degerleri degistirildi
/* let a = prompt ("First Variable: ");
let b = prompt ("Second Variable: ");

//destruction metot 
[a, b] =[b, a];

console.log(`The value after swapping: ${a}`);
console.log(`The value after swapping: ${b}`); */

let a = parseInt(prompt("First Variable: "));
let b = parseInt(prompt("Second Variable: "));

a = a + b;
b = a - b;
a = a - b;

console.log(`The value after swapping: ${a}`);
console.log(`The value after swapping: ${b}`);