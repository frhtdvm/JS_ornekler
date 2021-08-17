let i,
  f = 1;

  // n = Kullanicidan alacagimiz deger 
const n = parseInt(prompt("Faktoriyelini istediginiz sayiyi giriniz "));

for (i = 2; i <= n; i++) {
  f = f * i;
}

console.log(`${n} Sayisinin faktoriyeli = ${f}`);
