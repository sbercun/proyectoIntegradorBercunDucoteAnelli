let bienvenido = document.querySelector('.bienvenido');
let linkLogin = document.querySelector('#link-login');
let linkRegister = document.querySelector('#link-register');
let logout = document.querySelector('#logout');

let mailGuardado = localStorage.getItem("Email del usuario");

if (mailGuardado){
    bienvenido.textContent = "Bienvenido: " + mailGuardado;
    bienvenido.style.display = "block";

    logout.style.display = "inline";
    linkLogin.style.display = "none";
    linkRegister.style.display = "none";
    
} else {
    bienvenido.textContent = "";
    bienvenido.style.display = "none";

    logout.style.display = "none";
    linkLogin.style.display = "inline";
    linkRegister.style.display = "inline";

}