//Aluno: David Roussenq Maria 21/07/2023 - DEVinHouse - Zuchetti

class Fatura {
    id;
    descricao;
    quantia;
    preco;

    constructor(id, descricao, quantia, preco) {
        this.id = id;
        this.descricao = descricao;
        this.quantia = quantia > 0 ? quantia : 0;
        this.preco = preco > 0 ? preco : 0;
    }
    //método para obter o valor total da fatura
   /*  obterValorTotal() {
        return this.quantia * this.preco;
    } */

    getValorTotal() {
        return this.quantia * this.preco;
    }
}

export default Fatura;