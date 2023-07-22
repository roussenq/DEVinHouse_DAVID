export default class CalculadoraDeArea {
    tipo;
    base;
    altura;

    constructor(tipo, base, altura) {
        this.tipo = tipo;
        this.base = base;
        this.altura = altura;
    }

    calcular(tipo){
        switch (tipo) {
            case 'quadrado':
                return this.base * this.base;
            case 'retangulo':
                return this.base * this.base;
            case 'triangulo':
                return (this.base * this.altura) / 2;
            default:
                return 'Tipo de figura não reconhecida';
        }
    }
}