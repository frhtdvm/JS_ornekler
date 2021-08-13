//3 sayidan en buyugunu bulma

/* const sayi1 = parseFloat(prompt("1. sayiyi giriniz"));
const sayi2 = parseFloat(prompt("2. sayiyi giriniz"));
const sayi3 = parseFloat(prompt("3. sayiyi giriniz"));
let enBuyukSayi;
if (sayi1 >= sayi2 && sayi1 >= sayi3) {
  enBuyukSayi = sayi1;
} else if (sayi2 >= sayi1 && sayi2 >= sayi3) {
  enBuyukSayi = sayi2;
} else {
  enBuyukSayi = sayi3;
}

console.log("En buyuk sayi = " + enBuyukSayi); */

const sayi1 = parseFloat(prompt("1. sayiyi giriniz"));
const sayi2 = parseFloat(prompt("2. sayiyi giriniz"));
const sayi3 = parseFloat(prompt("3. sayiyi giriniz"));

//Math.max(value) sayi listesindeki en buyuk degeri buluyor 
const enBuyukSayi = Math.max(sayi1, sayi2, sayi3);

console.log("En buyuk sayi = " + enBuyukSayi);
