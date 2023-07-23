import Usuario from "./Usuario.js";

console.log('M1-S07-EXERCICIO07');

const formLogin = document.getElementById('form-login');
const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const pMensagem = document.getElementById('mensagem');

const usuario1 = new Usuario("David", "david.maria@estudante.com.br", "123456");

console.log(usuario1);

function realizaLogin(evento) {
    evento.preventDefault();
    const email = inputEmail.value;
    const senha = inputSenha.value;

    const logou = usuario1.autenticar(email, senha);

    if (logou) {
        pMensagem.innerHTML = `Olá ${usuario1.nome}`;
    } else {
        pMensagem.innerHTML = "Credenciais Inválidas!";
    }
}

formLogin.addEventListener("submit", realizaLogin);