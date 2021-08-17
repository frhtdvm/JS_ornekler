const sayi = parseInt(prompt("Carpim Tablosu olusturacak sayiyi giriniz"));

for (i = 0; i <= 10; i++) {
  const result = i * sayi;
  console.log(`${sayi} * ${i} = ${result}`);
}
