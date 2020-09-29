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

function Person(name, energy) {
    this.name = name;
    this.energy = energy;

    this.booster = function (health) {

        this.energy += health;
        console.log(`${this.name} add energy:${health} -> ${this.energy}`);

    }

    this.attack = function (hit) {
        this.energy -= hit;
        console.log(`${this.name} have been attack: ${hit} -> energy:${this.energy}`);
    }
}

let bergario = new Person('bergario', 50);
let superman = new Person('superman', 100);