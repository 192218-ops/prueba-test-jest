const validarLogin = require('./login');

describe('Pruebas de Login', () => {
    test('debería permitir el acceso con credenciales correctas', () => {
        expect(validarLogin("admin", "12345")).toBe("Acceso concedido");
    });

    test('debería denegar el acceso con password incorrecta', () => {
        expect(validarLogin("admin", "error")).toBe("Credenciales incorrectas");
    });

    test('debería denegar el acceso si el usuario no existe', () => {
        expect(validarLogin("invitado", "12345")).toBe("Credenciales incorrectas");
    });
});