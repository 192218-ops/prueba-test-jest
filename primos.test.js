const esPrimo = require('./primos');

test('debería retornar true para el número 7', () => {
    expect(esPrimo(7)).toBe(true);
});

test('debería retornar false para el número 4', () => {
    expect(esPrimo(4)).toBe(false);
});

test('debería retornar false para números negativos o 1', () => {
    expect(esPrimo(1)).toBe(false);
    expect(esPrimo(-5)).toBe(false);
});