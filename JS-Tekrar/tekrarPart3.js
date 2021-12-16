//* 19 Fonksiyonlar

//! Bu fonksiyon icinde baska fonksiyon cagirilip ekrana sadece hello fonksiyonu yazdirilarak 2 ayri fonksiyon yazdirildi.
/* function helloWorld() {
  console.log("Hello World");
}
function hello() {
  console.log("Merhaba");
  helloWorld();
}
hello();
 */

//* 20 Fonksiyonlar Param(parametre) ve return eklemek
/* 
//disardaki degisken
let firstName = "Lorem";

function greetings(firstName = "", lastName = "") {
  console.log("Merhaba");
  console.log(`Merhaba ${firstName} ${lastName}`);
}
console.log(firstName);
greetings();
greetings("Parametre");

function greetings2(firstName, lastName) {
  let info = `Merhaba ${firstName} ${lastName}`;
  return info;
}
let greetingsInfo = greetings2("Ad", "Soyad");
console.log(greetingsInfo);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

let htmlInfo = `<span style="color:red">COLOR REEEDDDD</span>`;
domIdWriteInfo("greeting", htmlInfo);
domIdWriteInfo("info", greetings2("Lorem", "ipsum"));
 */
/* 
function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs"); */
//* 21 Fat arrow/arrow function Kullanimi
/* //^normal fonksiyon
function hello(firstName) {
  console.log(`Merhaba ${firstName}`);
}
hello("JavaScript");

//^ fat arrow
//v1 tek argument suslu parantez
const helloFuncV1 = (firstName) => {
  console.log(`Merhaba ${firstName}`);
};
helloFuncV1("helloFuncV1");

//v2 tek argument suslu parantez olmadan
const helloFuncV2 = (firstName) => console.log(`Merhaba ${firstName}`);
helloFuncV2("helloFuncV2");

//v3 birden fazla parametre alinca parametreler paranteze girer
const helloFuncV3 = (firstName, lastName) => {
  console.log(`Merhaba ${firstName}   ${lastName}`);
};
helloFuncV3("helloFuncV3", "LastName");

//v4 birden fazla parametre ve islem mevcut
const helloFuncV4 = (firstName, lastName) => {
  let info = `Merhaba ${firstName}   ${lastName}`;
  console.log(info);
  return info;
};

helloFuncV4("helloFuncV4", "Other infi");
 */

//* 22 DOM etkinlikleriyle calismak 
let greeting = document.querySelector("#greeting");
greeting.addEventListener("mouseover", domClick);

function domClick(){
    console.log("Etkinlik denetlendi");
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
}