// 1. Object Literal

let Person = {
    name: "Bergario",
    energy: 10,
    booster: function (value = 0) {
        this.energy = this.energy + value;
        console.log(`${this.name} have energy: ${this.energy}`);
    },
    attack: function (hit) {
        this.energy = this.energy - hit;
        console.log(`${this.name} have been attact: ${hit} -> energy:${this.energy}`)
    }
}