/*! degisken tanimla   */
//TODO test
//NOTE asdasda
//REVIEW

console.log("Hello World");
//alert("Hello World");

//var ile degisken tanimlama
var serverName = "buyukabi.com";

console.log(serverName);

//let ile degisken tanimlama
let password = "1234";
console.log(password);
// birlestirme ekleme islemi
console.log(serverName + " Test edildi");

serverName = serverName + " Yeni eklenen bilgi";
console.log(serverName);
//yada
serverName += " buda en son hali";
console.log(serverName);
//const ile tanimlama yapmak
const SERVER_PASSWORD = " asfafsaod;ifhsdo;";
console.log(SERVER_PASSWORD);

/** Numbers */
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Fiyat",
  price,
  "KDV Orani:",
  tax,
  "KDV Tutari",
  priceTax,
  "Fiyat",
  total
);
/**arttirma azaltma islemleri */
let counter = 320;
counter = +1;
counter++;
console.log(counter);

//NOTE mod alma ile kalan buluniyor
/**Us alma */
//REVIEW ** ile sayinin direk ussunu alabiliyoruz
console.log(2 ** 4);

/**asagi yuvarlama Math.floor*/
console.log(Math.floor(9.8));

// Yukari yuvarlama Math.ceil
console.log(Math.ceil(2.7));

//yakina yuvarlama -> Math.round
console.log(Math.round(3.6));

/** Bool yapisi */
let isActive = false;
isActive = true;
console.log(isActive);

let userName;
let isUserName = Boolean(userName); //NOTE Boolean is keysensitive
console.log(isUserName);

/**
 * *Veri turunu ogrenmek
 */
let price2 = 111;
let stringPrice = "111";
let hassPassword = true;

console.log("price2", typeof price2);

console.log("stringPrice", typeof stringPrice);

console.log("hasPassword", typeof hassPassword);

// string bilgileri int ve float a donusturmek
let number1 = "11";
console.log("number1: ", parseInt(number1), typeof number1);

//NOTE parse ederken rakamin yaninda harf yada belirtec olsa dahi rakami almaya calisir
let number2 = "11.4px";
console.log("number2: ", parseFloat(number2), typeof number2);

let number3 = "11.px";
console.log("number3: ", Number(number3), typeof number3);

/**
 * * Template Literals Kullanimi
 */

let username = "ferhat";
const DOMAIN = "buyukabi.com";
let info = `Merhaba ${username} sitemize hosgeldin  janim benim, mail adresin ${DOMAIN}... domainin uzunlugu ${DOMAIN.length}, isminizin ilk harfi ${username[0]}, borcunuz: ${(2 + 3) * 10} TL, gunun saati suan da: ${new Date().getHours()}`;

console.log(info);

console.log("*******************************************************************************************")
/**
 * * String veri Turu islemleri
 */

let email = "tester@tester.com";
let firstName = "zikkim";
let lastName = "kordibi";

//String karakter sayisi -> length
console.log(email.length);
// ilk karakteri bulmak -> [0]:
console.log(firstName[1]);
console.log(firstName.charAt(1));
//buyuk harf / kucuk harf:
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);
//string icinde istedigimiz bilgiyi aramak ve yerini bulmak -> search
console.log(email.search("@"));
console.log(email[6]);
console.log(email.search("olmayan birseyde -1"));
//belli bir yere kadar al -> slice
console.log(email.slice(1,9))
let DOMAIN2 = email.slice(email.search("@")+1);
console.log(DOMAIN2);

console.log(DOMAIN2.indexOf('.')); //NOTE . nin yerini bulduk 

console.log(DOMAIN2.slice(0, DOMAIN2.indexOf('.'))) //NOTE sadece domain kismini aldik 
// bilgiyi degistir -> replace
email = email.replace('tester.com','gmail.com'); //NOTE orjinal domain ni gmail ile degistirdik 
console.log(email);
//istedigim bilgi varmi? -> includes
console.log(email.includes('@'));
//istedigim bilgiyle basladi mi? bitti mi ? -> startsWidth, endsWidth
console.log(email.endsWith("tester.com"));
// ilk harflerini buyuk yapmak 
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;
console.log(fullName);