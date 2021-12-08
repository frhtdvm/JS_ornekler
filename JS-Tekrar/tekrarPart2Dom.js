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

let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "Son oge degisti";
let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk oge degisti";

//yeni oge eklemek
