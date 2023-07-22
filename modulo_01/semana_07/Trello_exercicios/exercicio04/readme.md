Em um arquivo app.js incluído em index.html de tipo módulo type="module":

Crie a classe Animal com os atributos nome, idade e som.

Depois crie as subclasses (de Animal) Cachorro e Gato com os atributos nome e idade, inicializando o atributo som da superclasse com "latido" e "miado", respectivamente.

Use as classes Cachorro e Gato em app.js, crie uma instância de cada subclasse para testar, conforme abaixo.

Exemplos:

const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som );   // "latido"
const frajola = new Gato('frajola', 8);
console.log( frajola.som );   // "miado"
Extra:

Crie as classes em arquivos separados Cachorro.js, Gato.js, exporte-as como padrão (export default), importe em app.js e use no código.