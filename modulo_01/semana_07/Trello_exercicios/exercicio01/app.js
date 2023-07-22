import Colaborador from "./colaborador.js";

const ada = new Colaborador("52844204031", "Ada Lovelace", 1000);

console.log(ada.nome); // Ada Lovelace
console.log(ada.cpfValido()); // true
console.log(ada.cpf); // 528.442.040-31
console.log(ada.salario); // 1000

ada.promover(50);

console.log(ada.salario); // 1500
