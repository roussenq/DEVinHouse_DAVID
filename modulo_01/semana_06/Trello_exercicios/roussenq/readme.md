Crie uma tela de login com base na imagem anexada.

Os campos de e-mail e senha são obrigatórios, portanto, o login não deve ser permitido se estiverem vazios.

Após clicar no botão, procure no array de usuários usando o método find() por um usuário que tenha o e-mail e senha digitados. Se for encontrado, redirecione o usuário para a tela home.html. Caso contrário, exiba uma mensagem informando que o usuário não foi encontrado na tela.

Utilize o array de usuário em anexo.

const usuarios = [
  {
    email: "joao@gmail.com",
    nome: "João Silva",
    senha: "123456"
  },
  {
    email: "maria@hotmail.com",
    nome: "Maria Souza",
    senha: "senha123"
  },
  {
    email: "pedro@yahoo.com",
    nome: "Pedro Oliveira",
    senha: "abc123"
  },
  {
    email: "laura@gmail.com",
    nome: "Laura Santos",
    senha: "qwerty"
  },
  {
    email: "gabriel@yahoo.com",
    nome: "Gabriel Costa",
    senha: "senha12345"
  }
];