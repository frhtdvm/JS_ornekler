//verilen sayinin tek mi cift mi oldugunu kontrol et
let sayi = parseInt(prompt("Kontrol edilecek sayiyi giriniz"));

/* if (sayi % 2 == 0) {
  console.log("verilen sayi cifttir");
} else if (sayi % 2 == 1) {
  console.log("verilen sayi tektir");
} else {
  console.log("verilen sayi hatali");
}
 */

const result = sayi % 2 == 0 ? "cift" : "tektir";

console.log("Sonuc = " + result);
