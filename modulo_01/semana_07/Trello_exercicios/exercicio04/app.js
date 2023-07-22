//Aluno: David Roussenq Maria - DevInHouse
import Animal from './Animal.js';
import Cachorro from './Cachorro.js';  
import Gato from './Gato.js';


const snoopy = new Cachorro('snoopy', 10);
console.log(snoopy);
console.log( snoopy.nome );  // "snoopy"
console.log( snoopy.som );   // "latido"
const frajola = new Gato('frajola', 8);

console.log(frajola);
console.log( frajola.nome );  // "frajola"
console.log( frajola.som );   // "miado"
