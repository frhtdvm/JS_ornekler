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
//burada CSS bilgileri eklenizor
let greeting = document.querySelector("#greeting");
greeting.classList.add("text-primary");
greeting.classList.add("title");
//birden fazla bilgi eklenebilir.
greeting.classList.add("new-info", "second-class", "third-class");

//burada CSS bilgileri cikariliyor

greeting.classList.remove("title", "second-class", "third-class");
console.log(greeting.classList);