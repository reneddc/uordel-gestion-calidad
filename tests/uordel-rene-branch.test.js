import funcionesWordle from "../src/funcionesWordle"

describe("Tests Unitarios para clase funcionesWordel", () => {

    let wordle = new funcionesWordle()
    
    test("Método definir tamanio palabra secreta debe devolver el tamaño correcto" , () => {
        const palabraSecreta = "HOLA";
        const expectedValue = 4;
        const actualValue = wordle.definirTamanioPalabraSecreta(palabraSecreta);
        expect(actualValue).toBe(expectedValue);
    });
    
    test("Método definir lista pistas debería devolver la lista de las pistas" , () => {
        const expectedValue = ["X", "X", "X", "X", "X", "X"];
        const actualValue = wordle.definirListaPistas();
        expect(actualValue).toHaveLength(6);
        expect(actualValue).toEqual(expectedValue);
    });

    
    test("Método obtener pista al azar debe devolver una letra de la palabra secreta, en este caso la primera letra" , () => {
        const palabraSecreta = "HOLA";
        const actualValue = wordle.obtenerPistaAlAzar(palabraSecreta);
        const expectedValue = "H";
        expect(actualValue).toBe(expectedValue);
        expect(palabraSecreta).toContain(actualValue);
    });
})