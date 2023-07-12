class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    apresentar() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
    
}