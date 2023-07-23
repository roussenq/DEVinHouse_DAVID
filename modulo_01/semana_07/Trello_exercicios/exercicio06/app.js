import Juros from "./Juros.js";

const aplicacao1 = new Juros(10000, 0.07, 24);

const ap1Simples = aplicacao1.calcularJurosSimples();
const ap1Composta = aplicacao1.calcularJurosCompostos();

console.log('Aplicação1 Juros Simples R$' + ap1Simples);//26800
console.log('Aplicação1 Juros Composto R$' + ap1Composta);//50723

const aplicacao2 = new Juros(10000, 0.15, 10);

const ap2Simples = aplicacao2.calcularJurosSimples(); 
const ap2Composta = aplicacao2.calcularJurosCompostos();

console.log('Aplicação2 Juros Simples R$' + ap2Simples);//25000
console.log('Aplicação2 Juros Composto R$' + ap2Composta);//40455
