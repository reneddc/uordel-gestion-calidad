import funcionesWordle from "../src/funcionesWordle"

describe("Tests Unitarios para clase funcionesWordel", () => {

    let wordle = new funcionesWordle()
    
    test("Método definir tamanio palabra secreta debe devolver el tamaño correcto" , () => {
        const palabraSecreta = "HOLA";
        const expectedValue = 4;
        const actualValue = wordle.definirTamanioPalabraSecreta(palabraSecreta);
        expect(actualValue).toBe(expectedValue);
    });
})