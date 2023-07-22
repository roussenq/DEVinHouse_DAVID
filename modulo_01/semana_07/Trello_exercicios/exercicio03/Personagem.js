export default class Personagem {
    nome;
    percentualVida = 100;
    
    constructor(nome) {
        this.nome = nome;
    }

    sofreuDano(percentualDano) {
        let novaVida = this.percentualVida - percentualDano;
        if (novaVida < 0) {
            novaVida = 0;
            this.percentualVida = novaVida;
        } else {
            this.percentualVida = novaVida;
        }
    }
    usouKitMedico() {
        let novaVida = this.percentualVida + 10;
        if (novaVida > 100) {
            novaVida = 100;
            this.percentualVida = novaVida;
        } else {
            this.percentualVida = novaVida;
        }
    }

}