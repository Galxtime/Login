// iniciar
// usuario logeado
if (localStorage.getItem('session-user') == '') {

    document.getElementById("iniciar").hidden = false;
    document.getElementById("salir").hidden = true;
} else {
    let correoUsuarioActual = localStorage.getItem('session-user');
    let usuario = localStorage.getItem(correoUsuarioActual);
    let userObj = JSON.parse(usuario);


    let saludo = document.getElementById('saludo');
    saludo.innerHTML = "Hola " + userObj.name + ' ' + userObj.lastName;

    document.getElementById("salir").hidden = true;
    document.getElementById("salir").hidden = false;
}

function cerrarSesion() {
    localStorage.setItem('session-user', '');
}