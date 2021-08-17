const sayi1 = parseInt(prompt("1.Sayiyi giriniz"));
const sayi2 = parseInt(prompt("2.Sayiyi giriniz"));

const islem = prompt(
  "Hangi Islem?= a-) Toplama, b-) Cikarma, c-) Carpma, d-) Bölme"
);

switch (islem) {
  //case harflerini tirnak icerisine almaliki deger vermede sorun yasanmasin!!!!
  case "a":
    //sayi1 + sayi2;
    console.log("Toplama = ", sayi1 + sayi2);
    break;
  case "b":
    //sayi1 - sayi2;
    console.log("Cikarim = ", sayi1 - sayi2);
    break;
  case "c":
    //sayi1 * sayi2;
    console.log("Carpim = ", sayi1 * sayi2);
    break;
  case "d":
    //sayi1 / sayi2;
    console.log("Bölüm = ", sayi1 / sayi2);
    break;

  default:
    console.log("Yanlis islem degeri girdiniz !");
}
