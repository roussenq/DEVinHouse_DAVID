export default class Juros {
    capitalInicial;
    taxaAplicada;
    tempo;

    constructor(capitalInicial, taxaAplicada, tempo) {
        this.capitalInicial = capitalInicial;
        this.taxaAplicada = taxaAplicada;
        this.tempo = tempo;
    }

    calcularJurosSimples() {
        return (this.capitalInicial+(this.capitalInicial * this.taxaAplicada * this.tempo)).toFixed(2);
    }

    calcularJurosCompostos() {
        return (this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo).toFixed(2);
    }
}