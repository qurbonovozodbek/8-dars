// let car = new Map();

// car.set('name', 'Ozodbek');
// car.set('lastname', 'Qurbonov');
// car.set('age', '16');
// car.set('weight', '60+');

// console.log(car.get('lastname'));
// console.log(car.get('name'));
// console.log(car.get('age'));
// console.log(car.get('weight'));

// console.log(car.size);
// car.delete('age');
// console.log(car);
// car.clear;
// console.log(car.has('age'));

// const h2 = document.getElementById('h2')

// console.log(window.getComputedStyle(h2));


// 1 - masala

// const narxlari = [10.99, 5.45, 23.00, 7.86];
// 1-qism

// [a,,,b] = narxlari;
// console.log(a,b);

// 2-qism

// [a,b,c,d] = narxlari;
// [a,b] = [b,a];
// console.log(a, b, c, d);

// 3-qism

// let data = [];
// [,a,b] = narxlari;
// data.push(a,b);
// let add = data.map(function(arg) {
//     return arg * 2
// })
// console.log(add);


// 2 - masala

// Aytaylik, sizda kino ma'lumotlarini o'z ichiga olgan ikkita ob'ekt bor:
// JavaScript

// const movie1 = {
//  Sarlavha: "Matritsa",
//  rejissyor: "Vachovskilar",
//  Yil: 1999,
// };

// const movie2 = {
//  janr: "Ilmiy fantastika",
//  aktyorlar:
//  ["Kianu Rivz", "Lorens Fishbern", "Kerri-Ann Moss"],
// };

// Ispolzuyte kod ostorojnostyu. Podrobnee...
// 1. Ikkala ob'ektdan olingan ma'lumotlarni destruktivizatsiya yordamida bitta ob'ektga birlashtiring.
// 2. Muayyan ma'lumotlar nuqtalarini (masalan, sarlavha, rejissyor, janr) alohida o'zgaruvchilarga ajratib, birlashtirilgan ob'ektni
// yo'q qilish.
// 3. Ikki ob'ektni argument sifatida qabul qiladigan va ularning ma'lumotlarini destruktivizatsiya yordamida birlashtirgan yangi ob'ektni qaytaradigan
// funksiya yarating.

// 3 - masala

// 1-mashq: Xarita yordamida savatni boshqarish:
// 1. Savatchani ifodalash uchun Xarita yarating. Kalit mahsulot identifikatori va qiymat bu mahsulot
// miqdoridir.
// 2. Savatga narsalarni qo‘shish yoki yangilash: Foydalanuvchilarga o‘rnatish va olish kabi Xarita usullaridan foydalanib, belgilangan miqdorda savatga
// narsalarni qo‘shishga ruxsat bering.
// 3. Savatdan narsalarni olib tashlang: O'chirish yoki boshqa mos usullardan foydalanib, keraksiz narsalarni savatdan olib
// tashlash funksiyasini amalga oshiring.
// 4. Umumiy xarajatni hisoblang: Xaritani takrorlang va savatdagi narsalarning umumiy narxini ularning narxlari asosida
// hisoblang.
// 5. Bonus: Muayyan shartlar asosida chegirmalarni qo'llash yoki turli valyuta konvertatsiyalarini boshqarish kabi
// xususiyatlarni qo'shish orqali mashqni kengaytiring.

// const arr = new Map();
// arr.set('sabzi', 5000);
// arr.set('kartoshka', 4000);
// arr.set('piyoz', 7000);
// arr.set('guruch', 19000);
// arr.set('gugurt', 500);

// arr.delete('gugurt');
// console.log(arr.has('sabzi'));
// console.log(arr.clear);

// 4 - masala

// const arr = new Set();

// arr.add('BMW', 200000);
// arr.add('Ferrari', 2500000);
// arr.add('Lambarghni', 4000000);
// arr.add('Tesla', 700000);
// arr.add('Benz', 500000);
// arr.add('Tico', 2000);

// // arr.delete('Tico');
// // console.log(arr.has('Benzz'));
// console.log(arr.values());
// console.log(arr.keys());

// 6 - masala

// localstorge

// localStorage.setItem('name', 'Ozodbek');
// localStorage.setItem('lastname', 'Qurbonov');
// let data = localStorage.getItem('name')
// console.log(data);

// cookie

// Cookies.set('name', 'Ozodbek')

// sessionStorage

// sessionStorage.setItem("name", "Ozodbek");
// let data = sessionStorage.getItem("name");
// sessionStorage.removeItem("name");
// sessionStorage.clear();

// IndexDb 
// let openRequest = indexedDB.open('name', 'Ozodbek');

