// 1. Object Literal

// let Person = {
//     name: "Bergario",
//     energy: 10,
//     booster: function (health = 0) {
//         this.energy = this.energy + health;
//         console.log(`${this.name} have energy: ${this.energy}`);
//     },
//     attack: function (hit) {
//         this.energy = this.energy - hit;
//         console.log(`${this.name} have been attack: ${hit} -> energy:${this.energy}`)
//     }
// }




// 2. Function Declaration
// function Person(name, energy) {
//     let person = {};
//     person.name = name;
//     person.energy = energy;

//     person.booster = function (health) {

//         this.energy += health;
//         console.log(`${this.name} add energy:${health} -> ${this.energy}`);

//     }

//     person.attack = function (hit) {
//         this.energy -= hit;
//         console.log(`${this.name} have been attack: ${hit} -> energy:${this.energy}`);
//     }
//     return person;
// }

// let bergario = Person('bergario', 50);
// let batman = Person('batman', 30);


// 3. Constructor Function

// function Person(name, energy) {
//     this.name = name;
//     this.energy = energy;

//     this.booster = function (health) {

//         this.energy += health;
//         console.log(`${this.name} add energy:${health} -> ${this.energy}`);

//     }

//     this.attack = function (hit) {
//         this.energy -= hit;
//         console.log(`${this.name} have been attack: ${hit} -> energy:${this.energy}`);
//     }
// }

// let bergario = new Person('bergario', 50);
// let superman = new Person('superman', 100);



// 4. Object Create

// const methodPerson = {

//     booster: function (health) {

//         this.energy += health;
//         console.log(`${this.name} add energy:${health} -> ${this.energy}`);

//     },

//     attack: function (hit) {
//         this.energy -= hit;
//         console.log(`${this.name} have been attack: ${hit} -> energy:${this.energy}`);
//     }

// }

// function Person(name, energy) {
//     let person = Object.create(methodPerson);
//     person.name = name;
//     person.energy = energy;


//     return person;
// }

// let bergario = Person('bergario', 50);
// let batman = Person('batman', 30);



// 5. Protoype

// function Person(name, energy) {

//     // dibalik layar dibuat deafault --> let this = Object.create(Person.prototype)

//     this.name = name;
//     this.energy = energy;
// }

// Person.prototype.booster = function (health) {

//     this.energy += health;
//     console.log(`${this.name} add energy:${health} -> ${this.energy}`);

// }

// Person.prototype.attack = function (hit) {

//     this.energy -= hit;
//     console.log(`${this.name} have been attack: ${hit} -> energy:${this.energy}`);
// }

// let bergario = new Person("bergario", 90);



// 6. Class Version

// class Person {

//     constructor(name, energy) {
//         this.name = name;
//         this.energy = energy;
//     }

//     booster(health) {

//         this.energy += health;
//         return (`${this.name} add energy: ${health} -> ${this.energy}`);

//     }

//     attack(hit) {

//         this.energy -= hit;
//         return (`${this.name} have been atttack: ${hit} -> energy: ${this.energy}`);
//     }
// }

// let bergario = new Person('bergario', 90);


// 7. Closure function

// let number = (function () {
//     let i = 0;

//     return function () {
//         return ++i;
//     }
// })();

// console.log(number());
// console.log(number());
// console.log(number());


// 8. Errow function

// ---> errow version <---
// let car = (brand) => `My car: ${brand}`;

// ----> versi function expresion <-----
// let car = function(brand){ return `My car: ${brand}`}


// console.log(car('ferrari'));

// --- Contoh lain ---
// let brother = ['Galih', 'Tejo', 'Gita'];

// // let data = brother.map(name => name);

// // ------> jika ingin mengembalikan sebuah object (memakai tanda kurung sebelum kurung kurawal) <-------
// let data = brother.map(nama => ({
//     nama: nama,
//     huruf: nama.length
// }));
// console.table(data);

// Contoh Lain

// const Car = function () {

//     this.brand = "Ferarri";
//     this.color = "red";
//     this.price = 100;
//     // this.description = function () {
//     //     console.log(`My car is ${this.brand}, its color ${this.color}`);
//     // }
//     // -----> function declaration diatas bisa dirubah menjadi arrow function spt dibawah <------

//     this.description = () => {
//         console.log(`My car is ${this.brand}, its color ${this.color} and price ${this.price}`);


//         // setInterval(function () {

//         //     this.price += 50;

//         // }, 1000);
//     }

//     // ---> kalau menggunakan setInterval diatas tidak bisa menggunakan this karena bernilai window, makan dibuat arrow function spt dbwh <---

//     setInterval(() => {

//         console.log(this.price += 50);

//     }, 1000);


// };

// const myCar = new Car();


// 9. Filter, Map, Reduce & Chaining

const angka = [2, 3, 7, 9, -4, -7, 8, -9, 1];

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {

//     if (angka[i] > 4) {

//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

// ---> cara diatas dapat disederahanakan menjadi dibawah (filter + arrow function)

// const newAngka = angka.filter(a => a > 4);

// console.log(newAngka);

// ----> cara sederhana menggunakan map + arrow function

// const newAngka = angka.map(a => a * 3);

// console.log(newAngka);

// ----> menggunakan Reduce (parameter pertamana acumulator, keuda current)

// const newAngka = angka.reduce(function (plus, a) {

//     return a + plus;

// });
// console.log(newAngka);

// -----> Penggabungan atau Chaining(menggunakan tanda titik)
// -----> Angka difilter yg kurangdari 6 lalu dikali 2 lalu dijumlahkan semua

const newAngka = angka.filter(a => a < 6)
    .map(a => a * -2).reduce((akumulasi, angkaSekarang) => akumulasi + angkaSekarang);

console.log(newAngka);