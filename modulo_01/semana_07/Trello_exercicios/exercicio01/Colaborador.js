// Autor: David Roussenq Maria

export default class Colaborador {
    constructor(cpf, nome, salario) {
        this.cpf = cpf;
        this.nome = nome;
        this.salario = salario;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(cpf) {
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    promover(percentual) {
        this.salario = this.salario + (this.salario * percentual / 100);
    }
    cpfValido() {
        let cpf = this.cpf;
        if (cpf.length != 11) {
            return false;
        } else {
            let numeros = cpf.substring(0, 9);
            let digitos = cpf.substring(9);
            let soma = 0;
            for (let i = 10; i > 1; i--) {
                soma += numeros.charAt(10 - i) * i;
            }
            let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            //validação do primeiro dígito
            if (resultado != digitos.charAt(0)) {
                return false;
            }
            soma = 0;
            numeros = cpf.substring(0, 10);
            for (let k = 11; k > 1; k--) {
                soma += numeros.charAt(11 - k) * k;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            //validação do segundo dígito
            if (resultado != digitos.charAt(1)) {
                return false;
            }
            return true;
        }
    }
}

/*Crie a classe em um arquivo separado Colaborador.js, a exporte como padrão (export default) e a importe no arquivo app.js.
Valide o CPF informado e imprima no console se o CPF informado é válido ou não.*/