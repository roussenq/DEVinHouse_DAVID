import Animal from "./Animal.js";

export default class Cachorro extends Animal {
    constructor(nome, idade, som) {
        super(nome, idade, "latido");
    }
}