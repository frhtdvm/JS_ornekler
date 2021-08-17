const n = parseInt(prompt("Faktoriyel sayisini giriniz"));

let i,
  f = 1;

for (i = 1; i <= n; i++) {
  f = f * i;
  console.log("faktoriyel = " + f);
}
