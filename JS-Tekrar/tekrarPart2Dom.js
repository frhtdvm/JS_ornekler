//document.body.style.background = "aqua";

/**
 * *ders 10- Document icerisinden etiket ve ID ile oge secimi
 */
/* document.getElementsByTagName("h2");
//console.log(title);
//console.log(title.innerHTML); //NOTE .innerHTML ile h2 nin icerigine ulastik, title ile ise tum bilgiler ulastik

let title = document.getElementById("title");
title.innerHTML = "Degisen bilgi";
console.log(title.innerHTML);

// Queryselector daha iyi ve daha pratik yeni yontem

let link = document.querySelector("#yenilink");
console.log(link.innerHTML);
link.innerHTML += " degisti";
link.style.color = "aqua";
 */

/**
 * * ders 11 - Promt ile kullanicidan bilgi alma
 */
/* let firstName = prompt("Lutfen isminizi giriniz");

let isim = document.querySelector("#greating");
//NOTE backtick icinde baska bir etiket ve ozellik verebiliyoruz ekstra html sayfasina girmeye gerek kalmiyor
greating.innerHTML = `${greating.innerHTML} <small style="color:orange">${firstName}</small>`; */

/**
 * * ders 12 - Liste icerisindeki ogeye erismek ve yeni oge eklemek
 */

/* //ogeye erismek ve degistirmek
let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "Son oge degisti";
let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk oge degisti";

//yeni oge eklemek
let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");

liDOM.innerHTML = "Yeni li olusturuldu";
console.log(liDOM.innerHTML);

//ulDOM.append(liDOM);
ulDOM.prepend(liDOM);
 */

/**
 * * ders 13 DOM da CSS class bilgisiu eklemek cikarmak
 */
/* //burada CSS bilgileri eklenizor
let greeting = document.querySelector("#greeting");
greeting.classList.add("text-primary");
greeting.classList.add("title");
//birden fazla bilgi eklenebilir.
greeting.classList.add("new-info", "second-class", "third-class");

//burada CSS bilgileri cikariliyor

greeting.classList.remove("title", "second-class", "third-class");
console.log(greeting.classList);
 */

// ^ ders 14 Operatörler
/* 
let price = "100";
//* === Esitse, esittir degil yani !
console.log(price == 1);
console.log(price == 100);
//* === hem degeri hem turu esitse
console.log(price == 1);
console.log(price == "100");
//* != esit degilse
console.log(price == 1);
console.log(price != 1);
//* < kucukse
console.log(price < 1);

//* <= Kucuk esitse
console.log(price <= 1);

//* > Buyukse
console.log(price > 1);
//* >= Buyuk esitse
console.log(price >= 1);

//* && ve
console.log(price == 1 && price == 100);

//* || veya
console.log(price == 1 || price == 100);

//* ! degil (tersi)
console.log(price == 1 || !price == 100);
 */

// ^ ders 15 if else yapilari

/* let username = prompt("Kullanici adini giriniz");

if (username.length > 0) {
  console.log(`Kullanici Bilginiz = ${username}`);
} else {
  console.log("Lutfen isminizi giriniz ! ");
} */

//^ ders 16 Coklu if else yapilari
/* 
let userName = prompt("Kullanici adinizi giriniz");
let age = prompt("Yasiniz: ?");
let info = document.querySelector("#info");

if (userName && age >= 18) {
  info.innerHTML = "Ehliyet alabilirsiniz";
} else if (!userName) {
  info.innerHTML = "Kullanici adiniz Yok";
} else if (!(age >= 18)) {
  info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz";
} else "Yanlis bilgi girdiniz tekrar deneyiniz"; */

//^ ders 17 Ternarz Operatörleri
/* 
let userName = prompt("Kullanici adinizi giriniz");
let info = document.querySelector("#info"); */

//! Ternary if -> kosul ? dogruysa : yanlissa

//info.innerHTML = `${userName.length > 0 ? userName: "Kullanici bulunamadi"}`

