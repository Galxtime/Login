function validarDatos() {
    let validado = true
    let formulario = document.forms['login']
    let mensaje = ''


    let email = formulario['email'].value
    let password = formulario['password'].value
    debugger

    let usuario = localStorage.getItem(email)

    if (usuario == null) {
        validado = false
        mensaje = "correo no existe"
    } else {
        let userObj = JSON.parse(usuario)
        if (password != userObj.password) {
            validado = false
            mensaje = "la contraseña es incorrecta"
        }
        // para determinar cual el el usuario logeado
        else {
            localStorage.setItem('session-user', email)
        }
    }



    // mostrar mensaje de alerta
    if (!validado) {
        let alerta = document.getElementById('login-alert')
        alerta.innerHTML = mensaje
        alerta.hidden = false
    }
    return validado
}