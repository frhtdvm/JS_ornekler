/* let km = parseInt(prompt("Km uzunlugunu giriniz "));
let mil = parseInt(prompt("Mil uzunlugunu giriniz"));
mil = mil * 1.6;
let hesap = km * (1 / 1.6);

console.log(`Verilen KM nin Mil cinsindeki uzunlugu = ${hesap}`);
console.log(`Verilen Mil in KM cinsindeki uzunlugu = ${mil}`);
 */

// Kisa yol
const km = parseInt(prompt("Km uzunlugunu giriniz "));

const factor = 0.621371;

const mil = km * factor;

console.log(`${km} KM nin Mil cinsindeki uzunlugu = ${mil}`);
