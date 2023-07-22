//Aluno: David Roussenq Maria 21/07/2023 - DEVinHouse - Zuchetti
import Fatura from './Fatura.js';

const fatura1 = new Fatura(1, 'Fatura de teste', -2, -10);
const fatura2 = new Fatura(2, 'Fatura de teste 2', 2, 10);

console.log(fatura1);
console.log(fatura2);
/* Utilizando o método obterValorTotal() para obter o valor total da fatura */
/* 
console.log('Total da Fatura: R$' + fatura1.obterValorTotal());
console.log('Total da Fatura: R$' + fatura2.obterValorTotal()); */
console.log('Total da Fatura: R$' + fatura1.getValorTotal());
console.log('Total da Fatura: R$' + fatura2.getValorTotal());

//exemplo do professor
const melao = new Fatura(123, "Melão", 2, 3);

/* const valor = melao.obterValorTotal();*/
const valor = melao.getValorTotal();
console.log(melao);
console.log(valor); // 6