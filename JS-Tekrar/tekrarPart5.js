//* Object(Nesne) Kavrami
/* Objeler, içerisinde birden fazla değeri depolayan yapılardır. Property olarak bilinen bu değerler primitive(String,number, boolean vb.) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir. */
/* 
let arrayObj = [1, 2, 3];
let object1 = { obj: 1 };

console.log("arrayObj", typeof arrayObj);
console.log("object1", typeof object1);

let item1 = new Object(); //-> bu eski Object tanimlama
let item2 = {}; // -> bu yeni object tanimlama

console.log("item1", typeof item1);
console.log("item2", typeof item2);

//object olusturmak
let item3 = {};
let item4 = new Object();

console.log("object", object1);
 */
//* Object Anahtar(Key) ve Değer(Value) Yapısının Kullanımı/Erişimi
/* 
let laptop1 = {
  brand: "Apple", //! buradaki brand "key" görevinde
  model: "Macbook Pro", //! key value ler string baslar numara almazlar, sadece "" icinde rakamlar ile baslayabilir
  "2kg": 2,
};

console.log(laptop1);

//Dogru Anahtar bilgisi olusturmak

console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop.model, laptop1["model"]);
console.log(laptop1["2kg"]);

// Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac";
laptop1["brand"] = "Mac1";
console.log(laptop1);

// Yeni bilgi eklemek
laptop1.version = "10.15.7";
console.log(laptop1);
// Anahtar bilgilerine Ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1);
console.log(keys);
//!yukaridaki ve asagidaki kod ayni islemi görüyor
console.log(Object.keys(laptop1));

keys.foreach(keyInfo =>{
    console.log(keyInfo)
    console.log(laptop1[keyInfo]);
})
// Deger bilgilerine ulasmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
    )

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value)
})
 */
//*Nesnelere Nasıl Metot Ekleriz?
/* let user1 = {
  firstName: "Bilgin",
  lastName: "Uzman",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function () {
    return `${this.firstName[0].toUpperCase} ${this.lastName}`;
  },
};

console.log(user1);
 */
//*Object ve Array Destructuring Kullanımı
//! BU BÖLÜM ATLANDI !!!
/* 
//* TRY & CATCH
let products;

try {
  products.foreach((item) => console.log(item));
} catch (error) {
  console.log("error:", error);
  //alttaki satirda dogru calisan komut dizisi mevcut
  products = [1, 2, 3];
  products.forEach((item) => console.log(item));
}

console.log("Hata yönetimi düzgün calisti");

let info = "Kodluyoruz";
console.log(info);
 */
//*Fetch API ile Çalışmak
fetch("data/settings.json")
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });

  