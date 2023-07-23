import { usuarios } from "../constantes/usuarios.js";

document.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if (usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.href = 'home.html';
    } else {
        alert('Usuário ou senha inválidos');
    }
});

