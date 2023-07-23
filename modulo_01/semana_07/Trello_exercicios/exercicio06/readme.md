Em um arquivo app.js incluído em index.html de tipo módulo type="module":

Os juros de uma aplicação podem ser calculados de forma simples ou composta.
Para o cálculo, geralmente se usa a letra C ou M para representar o montante final da aplicação, a letra i para representar a taxa aplicada (ao mês ou anual) e a letra t indicando o tempo (em meses ou anos) da aplicação.

Crie uma classe Juros, que tenha como atributos o capitalInicial, a taxaAplicada e o tempo (no mesmo período: meses ou anos).

a) Adicione o método calcularJurosSimples() que faça o cálculo usando a fórmula J = C  *i*  t

b) Adicione o método calcularJurosCompostos() que faça o cálculo usando a fórmula M = C  *(1 + i) ** t

c) Use essa classe em app.js e teste a implementação da classe imprimindo no console os valores de juros simples e composto para uma aplicação de 10.000 reais a uma taxa de 7% ao mês (ou seja, 0.07) pelo período de 24 meses.

d) Teste também (imprimindo igualmente no console) os valores de juros simples e composto para uma aplicação de 10.000 reais a uma taxa de 15% ao ano (ou seja, 0.15) pelo período de 10 anos.

Extra:

Crie a classe em um arquivo separado Juros.js, a exporte como padrão (export default), importe-a em app.js e use-a no código.