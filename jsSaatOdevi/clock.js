let myName = prompt("Adinizi Giriniz!");
//document.querySelector("#myName").innerHTML = myName;
document.getElementById("myName").innerHTML = myName;

const myConst = setInterval(function () {
  myTimer();
}, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("myClock").innerHTML = d.toLocaleTimeString();
}
