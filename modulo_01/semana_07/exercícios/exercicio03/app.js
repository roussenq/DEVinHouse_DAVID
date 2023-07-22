

import Personagem from './Personagem.js';

const personagem1 = new Personagem("Alyx");

console.log(personagem1);//mostra o objeto
console.log('Nome do personagem:'+personagem1.nome); // Alyx
console.log('Vida do personagem:'+personagem1.percentualVida); // 100
console.log('Dano recebido: 30'); // 100
personagem1.sofreuDano(30); // 70
console.log('Novo percentual de vida:'+personagem1.percentualVida); // 70
personagem1.usouKitMedico();
console.log('Após kitmedico, novo percentual de vida:'+personagem1.percentualVida); // 80