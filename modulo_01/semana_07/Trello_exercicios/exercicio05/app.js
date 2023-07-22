import CalculadoraDeArea from "./CalculadoraDeArea.js";

const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular(quadA.tipo);
console.log(quadA); // CalculadoraDeArea { tipo: 'quadrado', base: 6, altura: 6 }
console.log(areaQA); // 36

const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular(triangB.tipo);
console.log(triangB); // CalculadoraDeArea { tipo: 'triangulo', base: 8, altura: 7 }
console.log(areaTB); // 28

const retanC = new CalculadoraDeArea("retangulo", 9, 9);
const areaRC = retanC.calcular(retanC.tipo);
console.log(retanC); // CalculadoraDeArea { tipo: 'retangulo', base: 9, altura: 9 }
console.log(areaRC); // 81