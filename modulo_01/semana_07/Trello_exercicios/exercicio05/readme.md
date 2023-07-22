Em um arquivo app.js incluído em index.html de tipo módulo type="module":

Crie uma classe CalculadoraDeArea que tenha os atributos tipo (string), base (number) e altura (number).

Implemente o método calcular() que faça o cálculo da área conforme o tipo do polígono informado:

"triangulo": (base * altura) / 2
"quadrado" e "retangulo" : base * altura
Use a classe CalculadoraDeArea em app.js e teste a implementação com instâncias dessa classe para um triângulo de base 6 cm e altura 8 cm, para um quadrado de base e altura de 4 cm e um retângulo de base 4 cm e altura 6 cm.

Imprima o resultado calculado no console.

Exemplos:

const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36

const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28
Extra:

Crie a classe em um arquivo separado CalculadoraDeArea.js, a exporte como padrão (export default), importe-a em app.js e use-a no código.