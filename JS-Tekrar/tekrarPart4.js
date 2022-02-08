//* 25 Local Storage veri ekleme, silme, duzenleme
//! Local Storage bu konuzu daha sonra tekrarlanmali

//* 27 Form ve Form Submit yöntemi
/* let formDOM = document.querySelector("#userForm");
formDOM.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault(); 
  console.log("Islem gerceklesti!");
} */

//* 28 input icerisinde deger almak
/* let formDOM = document.querySelector("#userForm");
formDOM.addEventListener('submit', formSubmit); 

function formSubmit(event) {
  event.preventDefault(); 
  console.log("Islem gerceklesti!");
} */
//* 29 Formlar ile ilgili Egzersiz
/* let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");

const alertFunction = (title, message) => `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");

  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value); // gonderdikten sonra sifirladik
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDOM.innerHTML = alertFunction("Baslik bilgisi","Hatali Eksik Bilgi girildi");
  }
}

let userListDOM = document.querySelector("#userList");
const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span> `;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDOM.append(liDOM);
};
 */
//* 30 Arrayler
//^ genel giris bilgileri standart uzunluklari hesaplama, ilk eleman son eleman bulma vs

//Array fonksiyonlari, item ekleme silme degistirme vs

/* let items = [10, 20, 30, 40];
console.log("items - ilk hali : ", items);

//? Array: sona oge/eleman eklemek -> Push
items.push(50);
console.log("50 : ", items);
//? array: basa oge eklemek -> unshift
items.unshift(5);
console.log("5 basa eklendi : ", items);
//? Array: sondaki ogeyi cikarmak -> pop
let lastItem = items.pop(); //son elemani hem cikar, cikardigini lastItem a esitle
console.log("lastItem = ", lastItem, "items = ", items);
//? array: basa oge ciakrmak -> shift
let firstItem = items.shift(); // ilk elemani hem cikar, cikardigini firstItem a ekle
console.log("firstItem = ", firstItem, "items = ", items);
//? Array icindeki bir bilgiyi degistirmek
// ilk ogenin degistirilmesi
items[0] = 7;
console.log(items);
// sonuncu ogenin degistirilmesi
items[items.length - 1] = 100;
console.log(items);
 */
//* 31 Array fonksiyonlari
/* let items = [1, 2, 3, 4, 5];
//^ Array icinde array ekleme
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ferhat", "Zeyd", "Ferhat"];
items.unshift(femaleUsers);
console.log(items);
items.push(maleUsers);
console.log(items);
console.log(items[0].length); //array icindeki array in uzunlugu
console.log(items[0][0]); // ayse bilgisine ulasildi
//^ array icerisinden oge ayirmak -> splice(pos, item)
let newItems = items.splice(1, 5);

console.log("newItems: ", newItems);
console.log("items: ", items);

//^ Array icerisindeki ogenin index bilgsini almak -> indexOf('value')
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum"));
//^ Array kompyalamak -> slice ve (ES6) yontemleri
//eski yöntemi
let copyItems = items;
console.log(items);

copyItems.pop(); // son ogeyi cikar
console.log("copyItems", copyItems);
console.log("items", items);

console.log("kopyalandiktan sonraki hali");
copyItems = items.slice(); // kopyalama yapti
copyItems.pop(); //son ogeyi cikar
console.log("copyItems", copyItems);
console.log("items", items);

// es6 yontemi
let es6Items = [...items]; // es6 ile ve sonrasinda gelen kopyalama yontemi
console.log(es6Items);

//^ Iki array bilgisini birlestirmek -> es6
let allUser = [...femaleUsers, ...maleUsers]; // birden fazla array yapisini birlestirmek
console.log(allUser);

//^Array icerisindeki bilgiyi String e cevirmek -> toString, join
console.log(allUser.toString);
console.log(allUser.join("---"));

//^ istedigimiz index bilgisine oge eklemek -> splice(index, 0, value)
allUser.splice(allUser.length - 1, 0, "Mellisa");
allUser.splice(Math.floor(allUser.length / 2), 0, "Lorem"); // bu sekilde listenin ortasina deger ekleniyor
console.log(allUser);
 */

//* döngüler
//? For, Break ve Contiounu  diger diller ile bire bir ayni
/* let index = 0;
for (; index.length; index++); */

const LOREM_LIST = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
];
let counter = 0;

/* for(; counter < 10; counter++) {
  console.log(counter);
  if (counter === 5) {break};
}
for(; counter < 10; counter++) {
  if (counter === 5) {countinue}
  console.log(counter)
} */

/* const UL_DOM = document.querySelector("#userList");

let index = 0;

for (; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == "dolor") {
    break;
  }
  let LI_DOM = document.createElement("li");
  LI_DOM.innerHTML = LOREM_LIST[index];
  UL_DOM.append(LI_DOM);
}

for (; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == "dolor") {
    countinue;
  }
  let LI_DOM = document.createElement("li");
  LI_DOM.innerHTML = LOREM_LIST[index];
  UL_DOM.append(LI_DOM);
} */

//? while döngüsü
//diger dillerle ayni syntaxi var ve calismasini ayni

/* let userName;

while (!userName) {
  //burada !userName derken bos oldugu sürece calis demek
  userName = prompt("Kullanici adini giriniz");
  console.log(userName);
}
 */

//? Foreach ve arraylerin cagrilmasi
/* const PRODUCTS = ["Laptop", "Phone","Speaker", "Desktop PC", "Server", "mouse", "Keyboard"];

//PRODUCTS.forEach((product, index, array) => console.log(array[index] =product + "111"));
PRODUCTS.forEach((product, index, array) => console.log(array[index] `${product.toUpperCase}` ));

console.log(PRODUCTS)

const UL_DOM = document.querySelector("#userList");

PRODUCTS.forEach( item =>{
const liDOM = document.createElement("li");
liDOM.innerHTML = item
userListDOM.append(liDOM)
})
 */
//? Filter yöntemi ile array icinde sadece istenilen bilgilerin listesini olusturma
/* 
const PRODUCTS = ["Laptop", "Phone","Speaker", "Desktop PC", "Server", "mouse", "Keyboard"];
PRODUCTS.filter //-> fonksiyonu sayesinde filtre uygulanir
 */
//?Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması
/* const USERS = ["AYSE", "MEHMET", "TUGCE", "AKSEL"];
const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);
 */

