Em um arquivo app.js incluído em index.html de tipo módulo type="module":

Crie uma pagina HTML de autenticação com dois campos de texto (email, senha), um botão ("Acessar") para realizar a ação de login e um parágrafo para exibirmos mensagens.

Dado a classe Usuário abaixo:

class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    autenticar(emailInformado, senhaInformada) {
        return (this.email === emailInformado && this.senha === senhaInformada);
    }
}
Use esta classe Usuário para implementar a autenticação quando for clicado no botão "Acessar". É preciso ter previamente existente uma instância de usuário. Ao tentar autenticar, deve-se pegar os valores dos campos email e senha e utilizá-los como parâmetros no método autenticar.

Dicas:
a) Instancie um usuário indicando seus atributos: nome, email e senha (podem ser dados fixos e indicados no momento da criação do objeto).

b) Colocar no evento relacionado ao botão a chamada para uma função que faça uso do método 'autenticar' deste objeto previamente instanciado.

c) Se a autenticação tiver sucesso (resultado = true), exibir mensagem de sucesso na tela, caso contrário, exibir mensagem de credenciais inválidas.

Sugestão:
Aplique estilo CSS na página para praticar!

Extra:

Crie a classe em um arquivo separado Usuario.js, a exporte como padrão (export default), importe-a em app.js e use-a no código.