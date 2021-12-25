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
let userFormDOM = document.querySelector("#userForm");
userFormDOM.addeventListener('submit', formHandler);

function formHandler(event){
  event.preventDefault()
  const USERN_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score")
}
