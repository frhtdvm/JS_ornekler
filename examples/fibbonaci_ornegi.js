const sayi1 = parseInt(prompt("Fibbonaci sayisini Giriniz"));

let n1 = 0,
  n2 = 1,
  nextTerm;

for(i = 0; i <= sayi1; i++){
    //console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
console.log("Fibbonaci Serisi = " + nextTerm);
}