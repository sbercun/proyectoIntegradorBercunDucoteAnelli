let bienvenido2 = document.querySelector('.bienvenido');
let linkLogin2 = document.querySelector('#link-login');
let linkRegister2 = document.querySelector('#link-register');
let logout2 = document.querySelector('#logout');

logout2.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.removeItem('Email del usuario');
    bienvenido2.textContent = "";
    bienvenido2.style.display = "none";

    logout2.style.display = "none";
    linkLogin2.style.display = "inline";
    linkRegister2.style.display = "inline";


});
