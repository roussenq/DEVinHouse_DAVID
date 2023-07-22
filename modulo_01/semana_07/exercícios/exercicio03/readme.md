Em um arquivo app.js incluído em index.html de tipo módulo type="module":

Para modelar um jogo de ação, crie a classe Personagem que possua os atributos nome e percentualVida.

O nome deve ser indicado no construtor da classe, e o percentual de vida é iniciado com 100.

Crie o método sofreuDano(percentualDano) cuja implementação diminua o valor de percentualDano do percentual de vida do personagem
(até o limite de zero).

Crie também o método usouKitMedico() que adiciona 10 pontos ao percentual de vida do personagem (até o limite de 100).

Use a classe Personagem em app.js e crie pelo menos uma instância de personagem para testar.

Exemplo:

const alyx = new Personagem("Alyx");

console.log(alyx.percentualVida); // 100

alyx.sofreuDano(50);

console.log(alyx.percentualVida); // 50

alyx.usouKitMedico();

console.log(alyx.percentualVida); // 60
Extra:

Crie a classe em um arquivo separado Personagem.js, a exporte como padrão (export default), importe-a em app.js e use-a no código.