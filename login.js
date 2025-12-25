function validarLogin(usuario, password) {
    const usuarioCorrecto = "admin";
    const passwordCorrecta = "12345";

    if (usuario === usuarioCorrecto && password === passwordCorrecta) {
        return "Acceso concedido";
    }
    return "Credenciales incorrectas";
}

module.exports = validarLogin;