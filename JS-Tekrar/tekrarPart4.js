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
