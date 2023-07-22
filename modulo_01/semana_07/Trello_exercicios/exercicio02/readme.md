Em um arquivo app.js incluído em index.html de tipo módulo type="module":

Crie uma classe chamada Fatura que possa ser utilizada por uma fábrica, representando um item vendido.

Uma fatura deve incluir as seguintes informações como atributos :

id: number identificador do item faturado (código do produto)
descricao: string com a descrição do item
quantia: number com a quantidade comprada do item
preco: number com o preço unitário do item

Sua classe deve ter um construtor que inicialize todos os atributos.

Se a quantidade não for positiva, ela deve ser indicada como 0 (zero).

Se o preço por item não for positivo ele deve ser indicado como 0.

Implemente um método chamado obterValorTotal() que calcula o valor da fatura (isso é, multiplica a quantidade pelo preço do item).

Use esta classe Fatura em app.js e crie pelo menos uma instância desta classe para testar a implementação.

Exemplos:

const melao = new Fatura(123, "Melão", 2, 3);

const valor = melao.obterValorTotal();

console.log(valor); // 6
Extra:

Crie a classe em um arquivo separado Fatura.js, a exporte como padrão (export default), importe-a em app.js e use-a no código.
Crie um método getter de nome valorTotal que faz o mesmo cálculo implementado em obterValorTotal, mas que possa ser acessado sem o uso dos parêntesis.